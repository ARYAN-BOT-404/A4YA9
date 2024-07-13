const axios = require("axios");
module.exports.config = {
  name: "lyrics",
  author: "A6y",
  version: "1.0.0",
  category: "song to text"
}
module.exports.onStart = async ({api,event,args}) => {
  try {
    const lyrics = args.join(" ")
  if (!lyrics){
    api.sendMessage("please put one lyrics name",event.threadID,event.messageID)
  }
  const response = await axios.get(`${global.GoatBot.config.api2}/lyrics2?songName=${lyrics}`)
  const res = response.data
  const ly = res.lyrics
  const title = res.title
  const image = res.image
  const a6y = await axios.get({responseType: 'stream',url:image});
  const a6 = a6y.data
  api.sendMessage({body:`title:${title}\nlyrics:${lyrics}`,attachment:a6},event.threadID,event.messageID)
  } catch (error) {
api.sendMessage(`error: ${error.message}`,event.threadID,event.messageID);
  }
}
/*const axios = require("axios");

module.exports = {
  config: {
    name: "lyrics",
    version: "1.0",
    author: "nazrul",
    countDown: 5,
    role: 0,
    description: {
      en: "Get song lyrics with their Images"
    },
    category: "info",
    guide: {
      en: "{pn} <song name>"
    }
  },

  onStart: async ({api, event ,args}) =>{
    try {
      const lyrics = args.join(' ');
      if (!lyrics) {
        return api.sendMessage("Please provide a song name!", event.threadID, event.messageID);
      }
      const { data } = await axios.get(`${global.GoatBot.config.api2}/lyrics2?songName=${lyrics}`);
      const messageData = {
        body: `❏Title: ${data.title || ''}\n\n❏Artist: ${data.artist || ''}\n\n❏Lyrics:\n\n ${data.lyrics || ''}`,
        attachment: await global.utils.getStreamFromURL(data.image)
      };
      return api.sendMessage(messageData, event.threadID,event.messageID);
    } catch (error) {
      console.error(error);
      return api.sendMessage(error.message, event.threadID, event.messageID);
    }
  }
};
*/
