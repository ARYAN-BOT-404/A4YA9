const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "genix",
  aliases: ["art"],
  version: "1.0.0", 
  role: 2,
  author: "Dipto",
  description: "prompt to photo, photo to photo",
  usePrefix: false, 
  category: "image generator", 
  guide: {en:"prompt | reply a photo"},
  coolDowns: 10
};

module.exports.onReply = async function ({ api, event , args}) {
  if (event.type == "message_reply") {
    let mod = args[0] || "1";
    let prompt = args.slice(1).join(" ").toLowerCase() || "anime type";
    const url = event.messageReply.attachments[0].url;
    if (isNaN(url)) {
      try {
        api.setMessageReaction("🐤", event.messageID, (err) => {}, true);
        const response = await axios.get(`${global.GoatBot.config.api}/genix?url=${encodeURIComponent(url)}&prompt=${encodeURIComponent(prompt)}&model=${mod}`);
        const data = response.data.data;
        await api.sendMessage({ 
          body: "Here's your photo", 
          attachment: await global.utils.getStreamFromURL(data)
        }, event.threadID, (error, info) => {
global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: 'reply',
            messageID: info.messageID,
            author: event.senderID,
            link: data
          });
        }, event.messageID);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

module.exports.onStart = async function ({ api, args, event, message }) {
  try {
    let mod = args[0] || "1";
    let prompt = args.slice(1).join(" ").toLowerCase() || "anime type";
    if (event.type === "message_reply") {
      const url = event.messageReply.attachments[0].url;
const wait = await api.sendMessage("wait baby <😘", event.threadID);
      try {
        const response = await axios.get(`${global.GoatBot.config.api}/genix?url=${encodeURIComponent(url)}&prompt=${prompt}&model=${mod}`);
        const link = response.data.data;
        api.unsendMessage(wait.messageID);
        await api.sendMessage({ 
          body: "Here's your photo", 
          attachment: await global.utils.getStreamFromURL(link)
        }, event.threadID, (error, info) => {
global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: 'reply',
            messageID: info.messageID,
            author: event.senderID,
            link: link
          });
        }, event.messageID);
      } catch (e) {
        console.log(e);
      }
    } else if (prompt) {
  let ratio = "1:1"
  /*  let steps
let seed
  let weight
    let cfg;*/
  for (let i = 0; i < args.length; i += 2) {
    switch (args[i]) {
      case "--ratio":
        ratio = args[i + 1]
        break;
   /*   case "--steps":
        steps = args[i + 1]
        break;
      case "--cfg":
        cfg = args[i + 1]
        break;
      case "--seed":
        seed = args[i + 1]
        break;
      case "--weight":
        weight = args[i + 1]
        break;*/
    }
  }
  const cleanedPrompt = args.filter(arg => !arg.startsWith("--")).join(" ");

  const wait = await message.reply("wait baby <😘");

  try {
    const response = await axios.get(`${global.GoatBot.config.api}/genix?prompt=${encodeURIComponent(cleanedPrompt)}&ratio=${ratio}`);
    const link = response.data.data;
    const filePath = __dirname + `/cache/genix.png`;
    const respo = await axios.get(link, { responseType: 'stream' });
    const writer = fs.createWriteStream(filePath);
    await message.unsend(wait.messageID)
    respo.data.pipe(writer);
     writer.on('finish', async () => {
    //await api.unsendMessage(wait.messageID)
      await api.sendMessage({ 
        body: "Here's your photo", 
        attachment: fs.createReadStream(filePath)
      }, event.threadID, (error, info) => {
  global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          type: 'reply',
          messageID: info.messageID,
          author: event.senderID,
          link
        });
      }, event.messageID);
    });
  } catch (error) {
    console.error(`Failed to generate: ${error.message}`);
    api.sendMessage(`An error`, event.threadID, event.messageID);
  }finally{
    fs.unlinkSync(filePath);
  }
}
  }catch (error) {
    console.error(`Failed to generate: ${error.message}`);
    api.sendMessage(`An error`, event.threadID, event.messageID);
  }
}
