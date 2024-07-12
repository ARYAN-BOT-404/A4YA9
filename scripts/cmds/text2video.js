const axios = require('axios');
const fs = require('fs');

module.exports = {
    config: {
        name: 'text2video',
        aliases: [],
        version: "1.6.9",
        author: "sai",
        role: 0,
        countDown: 2,
        category: "Media",
        description: "text to Video converter",
        guide: "{pn} [prompt] or [reply to a photo]"
    },

 onStart: async function ({ message, event, args }) {
        try {
            const d = event.messageReply?.attachments[0]?.url || args.join(' ');

            if (!d) {
                return message.reply('❌| Please provide a link or reply to a video.', event.threadID);
            }

            message.reply("wait a minute...");

          
            const { data } = await axios.get(`${global.GoatBot.config.api}/text2video?prompt=${encodeURIComponent(d)}`);

            const response = await axios({
                url: data.url,
                method: 'GET',
                responseType: 'stream'
            });

const tempFilePath = __dirname + '/cache/temp_video.mp4';
            const writer = fs.createWriteStream(tempFilePath);

            response.data.pipe(writer);

            writer.on('finish', () => {
                message.reply({
                    body: `✅ | Here's your Video`,
                    attachment: fs.createReadStream(tempFilePath)
                }, () => {
                    fs.unlinkSync(tempFilePath);
                });
            });

            writer.on('error', (err) => {
                console.error(err);
                message.reply('❌| An error occurred while processing the video.', event.threadID);
            });

        } catch (err) {
            console.log(err);
            message.reply(err.message, event.threadID);
        }
    }
        }
