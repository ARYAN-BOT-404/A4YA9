const axios = require("axios");
const fs = require("fs-extra");
const yts = require("yt-search");
const baseApiUrl = async () => {
    const base = await axios.get(    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
    );
    return base.data.api;
  };

module.exports = {
  config: {
    name: "s",
    aliases: ['music2', 'play2'],
    version: "1.0",
    role: 0,
    author: "AceGun",
    countDown: 0,
    description: "download music from YouTube",
    category: "media",
    guide: "{pn} <MusicName>",
    dependencies: {
      "fs-extra": "",
      "axios": "",
      "yt-search": ""
    }
  },

  onStart: async ({ api, event, args }) => {
    const musicName = args.join(" ");

    try {
      api.setMessageReaction("⏳", event.messageID, (err) => {}, true);

      const searchResults = await yts(musicName);
      if (!searchResults.videos.length) {
        return api.sendMessage("🙂💔", event.threadID, event.messageID);
      }
      const musicUrl = searchResults.videos[0].url;
      const songId = musicUrl.split('v=')[1];

      const response = await axios.get(`${await baseApiUrl()}/ytdl?songID=${songId}`);
      const title = response.data.title;

      const desiredFormat = response.data.adaptiveFormats.find(
        format => format.mimeType.includes("audio/webm") && format.audioQuality === "AUDIO_QUALITY_LOW"
      ) || response.data.adaptiveFormats.find(
        format => format.mimeType.includes("audio/webm") && format.audioQuality === "AUDIO_QUALITY_MEDIUM"
      );
      
      const fileName = `${event.senderID}.mp3`;
      const filePath = __dirname + `/cache/${fileName}`;
      const stream = fs.createWriteStream(filePath);
      const responseStream = await axios({
        url: desiredFormat.url,
        method: 'GET',
        responseType: 'stream'
      });
      responseStream.data.pipe(stream);

      stream.on('finish', async () => {
        if (fs.statSync(filePath).size > 10485760004) {
          fs.unlinkSync(filePath);
          api.setMessageReaction('💔', event.messageID, (err) => {}, true);

          return api.sendMessage('🙂💔', event.threadID);
        }

        const message = {
          body: title,
          attachment: fs.createReadStream(filePath)
        };
        api.setMessageReaction('✅', event.messageID, (err) => {}, true);
        api.sendMessage(message, event.threadID, () => {
          fs.unlinkSync(filePath);
        }, event.messageID);
      });
    } catch (error) {
      api.setMessageReaction("❌", event.messageID, (err) => {}, true);
      console.log('[ERROR]', error);
      api.sendMessage('🙂💔', event.threadID);
    }
  }
};
