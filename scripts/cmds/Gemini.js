const axios = require("axios");

module.exports.config = {
  name: "gemini",
  version: "1.0.0",
  role: 0, 
  author: "dipto", 
  description: "Gemini ai with multiple conversation",
  usePrefix: true,
  guide: "[message]",
  category: "Ai",
  coolDowns: 5,
};
module.exports.onReply = async function ({ api, event, Reply}) {
 //api.unsendMessage(Reply.messageID);
  const { author } = Reply;
  if(author != event.senderID)
  return;
  const uid = event.senderID
  if (event.type == "message_reply") {
  const reply = event.body.toLowerCase();;
  if (isNaN(reply)) {
    const response = await axios.get(`https://nobs-api.onrender.com/dipto/gemini2?text=${encodeURIComponent(reply)}&senderID=${uid}`)
       const ok = response.data.response
    await api.sendMessage(ok ,event.threadID,(error, info) => {
  global.GoatBot.onReply.set(info.messageID,{
        commandName: this.config.name,
        type: 'reply',
    messageID: info.messageID,
    author: event.senderID,
    link: ok
  })},event.messageID)
  }
  }
}
module.exports.onStart = async function ({ api, args, event }) {
 const uid = event.senderID
  try {
    const dipto = args.join(" ").toLowerCase();
    if (!args[0]) {
      api.sendMessage(
        "𝙿𝙻𝙴𝙰𝚂𝙴 𝙿𝚁𝙾𝚅𝙸𝙳𝙳 𝙰 𝚀𝚂 𝚃𝙾 𝙰𝙽𝚂 \n\n𝙴𝚇𝙰𝙼𝙿𝙻𝙴:\n𝙶𝙴𝙼𝙸𝙽𝙸 𝙷𝙴𝚈",
  event.threadID,  event.messageID ); return;}
    if (dipto) {
      const response = await axios.get(`https://noobs-api2.onrender.com/dipto/gemini2?text=${encodeURIComponent(dipto)}&senderID=${uid}`);
         const mg = response.data.response;
      await api.sendMessage({body: mg ,},event.threadID,(error, info) => {
  global.GoatBot.onReply.set(info.messageID,{
        commandName: this.config.name,
    type: 'reply',
    messageID: info.messageID,
    author: event.senderID,
    link: mg
  })},event.messageID);
    }
  } catch (error) {console.error(`Failed to get an answer: ${error.message}`);
api.sendMessage(`${error.message}.\nAn error`,event.threadID,event.messageID);}
};
