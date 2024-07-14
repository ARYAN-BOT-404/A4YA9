const axios = require("axios");
module.exports.config = {
  name: "bbyb",
    author:"Romim",
    version: "72782828281919292992",
category: "text"

}
module.exports.onStart = async function ({}) { }
module.exports.onChat = async function ({api,event,args}) {
const u = event.body.toLowerCase();
  if (u.startsWith("bby")||u.startsWith("bot")){
  const fuck = args.join(" ");
  const res =  await axios.get(`${global.GoatBot.config.api}/baby?text=${fuck}`)
  const response = res.data.reply 
 await api.sendMessage(`${response}`,event.threadID, (error,info) => {
global.GoatBot.onReply.set(info.messageID, {commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            msg: response,
        });
 },event.messageID)
}
module.exports.onReply = async ({api,event,args}) => {
      const fuc = args.join(" ")
    const res =  await axios.get(`${global.GoatBot.config.api}/baby?text=${fuc}`)
    const response = res.data.reply 
   await api.sendMessage(`${response}`,event.threadID, (error,info) => {
  global.GoatBot.onReply.set(info.messageID, {commandName: this.config.name,
              type: "reply",
              messageID: info.messageID,
              author: event.senderID,
              msg: response,
          });
   },event.messageID)
  }
}
