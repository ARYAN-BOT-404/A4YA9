module.exports = {
 config: {
 name: "Hussain",
 version: "1.0",
 author: "Hussain", // hopeless 
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "hussain") {
 return message.reply({
 body: "𝙃𝙐𝙎𝙎𝘼𝙄𝙉 is hear😌💫💖 !!",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/KyVF88v.jpeg")
 });
 }
 }
} 
