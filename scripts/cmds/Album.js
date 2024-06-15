const axios = require("axios");

module.exports.config = {
  name: "album",
  version: "1.0.3",
  role: 0,
  author: "Romim",
  description: "album video",
  category: "video list",
  countDown: 5,
};

module.exports.onStart = async function({ event, api, args }) {
  if (!args[0]) {
    return api.sendMessage("♚═══ ∰𝙰𝙻𝙱𝚄𝙼 𝚂𝚃𝙰𝚁𝚃 ☚ ═══♚\n\n∰⇨𝙰𝙻𝙱𝚄𝙼 𝙲𝚁𝙴𝙳𝙸𝚃 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼ᬊᬁ \n👑\n\n ♬ 𝙰𝙿𝙸 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼 ♪\n★         👑        ★\n\n𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻 !\n\n━━━━━━━━━━━━━━━━━━━━━\n\n ✇1 -  𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻   𝚅𝙸𝙳𝙴𝙾 !\n\n  ✇2 -  𝙼𝙴𝚂𝚂𝙸 1 !\n\n ✇3 -  𝙽𝙴𝚈𝙼𝙰𝚁  !\n\n  ✇4 -  𝚁𝙾𝙽𝙰𝙻𝙳𝙾 !\n\n   ━━━━━━━━━━━━━━━━━━━━━\n\n               ★        👑         ★\n                    𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 !\n\n    ━━━━━━━━━━━━━━━━━━━━━\n\n ✇5 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚅𝙸𝙳𝙴𝙾   !\n\n  ✇6 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚂𝙰𝙳 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇7 -  𝚆𝙷𝙸𝚃𝙴 01 !\n\n  ✇8 -  𝙱𝙾𝙽𝙴𝚇4 𝙵𝙵 !\n\n ✇9 -  𝙼1𝙽𝚇 !\n\n       ━━━━━━━━━━━━━━━━━━━━━\n\n               ★          👑        ★\n\n                    𝙲𝚁𝙸𝙲𝙺𝙴𝚃 !\n\n   ━━━━━━━━━━━━━━━━━━━━━\n\n✇10 - 𝚂𝙰𝙺𝙸𝙱 𝙰𝙻 𝙷𝙰𝚂𝙰𝙽 !\n\n   ━━━━━━━━━━━━━━━━━━━━━\n\n               ★          👑        ★\n                         𝚂𝙸𝙶𝙼𝙰 !\n\n  ━━━━━━━━━━━━━━━━━━━━━\n ✇11 - 𝙷𝙰𝚉𝚈 𝙼𝙰𝙽 !\n\n   ━━━━━━━━━━━━━━━━━━━━━\n\n               ★          👑        ★\n                       𝙸𝚂𝙻𝙰𝙼𝙸𝙲 !\n\n ━━━━━━━━━━━━━━━━━━━━━\n\n ✇12 - 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇13 - 𝙰𝙳𝙽𝙰𝙽 𝙷𝚄𝙹𝙾𝚁 𝚅𝙸𝙳𝙴𝙾 !\n    ━━━━━━━━━━━━━━━━━━━━━\n\n               ★          👑        ★\n                         𝙻𝙾𝚅𝙴  !\n\n    ━━━━━━━━━━━━━━━━━━━━━\n ✇14  -  𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾 !\n\n✇15  - 𝚂𝚃𝙰𝚃𝚄𝚂 𝚅𝙸𝙳𝙴𝙾 \n\n  ★━━━━━━━━━━━━━━━━━━━★\n  ✇16  -  18+- 𝙷𝙾𝚁𝙽𝚈 𝚅𝙸𝙳𝙴𝙾 !\n\n   ☆━━━━━━━━━━━━━━━━━━━☆\n\n                 ⇩  𝙰𝙻𝙱𝚄𝙼 𝙴𝙽𝙳  ⚚\n\n   ⚚━━━━━━━━━━━━━━━━━━━⚚\n\n          ★❦𝙴𝙽𝙹𝙾𝚈 𝚁4𝙼1𝙼 𝙰𝙻𝙱𝚄𝙼༒\n\n", event.threadID, ((err, info) => {
    global.client.onReply.set(info.messageID, {
      commandName: this.config.name,
      messageID: info.messageID,
      author: event.senderID,
      type: "reply"
    })
  }), event.messageID);
  }
};
  module.exports.onReply = async ({ api, event, Reply }) => {
    let apiUrl;
  if(Reply.author == event.senderID){
  if (event.type == "message_reply") {
    api.unsendMessage(await Reply.messageID);
    if ("1" == event.body){
       apiUrl = "https://a6-video-api.onrender.com/video/football";
    }else if ("2" == event.body){
         apiUrl = "https://a6-video-api.onrender.com/video/messi";
    }else if ("3" == event.body){
           apiUrl = "https://a6-video-api.onrender.com/video/Neymar";
    }else if ("4" == event.body){
       apiUrl = "https://a6-video-api.onrender.com/video/cr7";
    }else if ("5" == event.body){
       apiUrl = "https://a6-video-api.onrender.com/video/editff";
    }else if ("6" == event.body){
         apiUrl = "https://a6-video-api.onrender.com/video/sadff";
    }else if ("7" == event.body){
         apiUrl = "https://a6-video-api.onrender.com/video/white01";
    }else if ("8" == event.body){
         apiUrl = "https://a6-video-api.onrender.com/video/ff";
    }else if ("9" == event.body){
           apiUrl = "https://a6-video-api.onrender.com/video/m1nx";
    }else if ("10" == event.body){
           apiUrl = "https://a6-video-api.onrender.com/video/sakib";
    }else if ("11" == event.body){
         apiUrl = "https://a6-video-api.onrender.com/video/hazy";
    }else if ("12" == event.body){
         apiUrl = "https://a6-video-api.onrender.com/video/islamic";
    }else if ("13" == event.body){
           apiUrl = "https://a6-video-api.onrender.com/video/adnan";
    }else if ("14" == event.body){
           apiUrl = "https://a6-video-api.onrender.com/video/love";
    }else if ("15" == event.body){
           apiUrl = "https://a6-video-api.onrender.com/video/status";
    }else if ("16" == event.body){
           apiUrl = "https://a6-video-api.onrender.com/video/horny";
    }
    const response = await axios.get(apiUrl);
    const videoUrl = response.data.data;
    const body = response.data["—͟͟͞͞𖣘𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳 亗"];
    const attachment = await global.utils.getStreamFromURL(videoUrl);
    await api.sendMessage({ 
      body, 
      attachment 
    }, event.threadID, event.messageID);
  }
   }
 };
