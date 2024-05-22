const axios = require('axios');
   module.exports = {
    config: {
      name: "swap",
      aliases: ["swap"],
      author: "Hehehe",
      version: "2.0",
      cooldowns: 5,
      role: 0,
      description: {
        en: "𝗦𝘄𝗮𝗽 𝗳𝗮𝗰𝗲𝘀 𝗶𝗻 𝗶𝗺𝗮𝗴𝗲𝘀"
      },
      category: "𝗜𝗠𝗔𝗚𝗘",
      guide: {
        en: "{pn} <reply with 2 images>"
      }
    },


  onStart: async function({ message, event, api }) {
    try {

      const setReactionInProgress = () => {
        api.setMessageReaction("⏳", event.messageID, (err) => {
          if (err) console.error(err);
        }, true);
      };


      const setReactionSuccess = () => {
        api.setMessageReaction("✅", event.messageID, (err) => {
          if (err) console.error(err);
        }, true);
      };

      if (event.type != "message_reply") {
        return message.reply("⚠️ | 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗽𝗹𝘆 𝘁𝗼 𝗮 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝘄𝗼 𝗶𝗺𝗮𝗴𝗲𝘀 𝗮𝘁𝘁𝗮𝗰𝗵𝗲𝗱.");
      }

      let links = [];
      for (let attachment of event.messageReply.attachments) {
        links.push(attachment.url);
      }

      if (links.length < 2) {

        setReactionSuccess(); 
        return message.reply("⚠️ | 𝗣𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝘀𝘂𝗿𝗲 𝘁𝗵𝗲𝗿𝗲 𝗮𝗿𝗲 𝗲𝘅𝗮𝗰𝘁𝗹𝘆 𝘁𝘄𝗼 𝗶𝗺𝗮𝗴𝗲𝘀 𝗮𝘁𝘁𝗮𝗰𝗵𝗲𝗱.");
      }

      setReactionInProgress();

      const maskimg = await global.utils.uploadImgbb(links[0]);
      const maskimgurl = maskimg.image.url;

      const targetimg = await global.utils.uploadImgbb(links[1]);
      const targetimgurl = targetimg.image.url;

      const transformingMessage = await message.reply({ body: "⏳ | 𝙵𝚊𝚌𝚎 𝚜𝚠𝚊𝚙𝚙𝚒𝚗𝚐, 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝" });
      
      const { data } = await axios.get(`https://noobs-api2.onrender.com/dipto/faceswap?targetUrl=${targetimgurl}&faceUrl=${maskimgurl}`);

      const transformedImageStream = await global.utils.getStreamFromURL(data.data);

      await api.unsendMessage(transformingMessage.messageID);

      await message.reply({ body: "✅ | 𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚜𝚠𝚊𝚙𝚙𝚎𝚍 𝚏𝚊𝚌𝚎", attachment: transformedImageStream });

      setReactionSuccess(); 

    } catch (error) {
      console.error(error);
      message.reply("❎ | 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐 𝚝𝚑𝚎 𝚏𝚊𝚌𝚎 𝚜𝚠𝚊𝚙.");
    }
  }
};
