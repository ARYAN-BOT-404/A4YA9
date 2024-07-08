module.exports.config = {
  name: "album2",
  author: "A6Y",
  category: "video sender"
}

module.exports.onStart = async ({ api, event, args }) => {
  if (!args[0]) {
    const a6Y = "♚═══ ∰𝙰𝙻𝙱𝚄𝙼 𝚂𝚃𝙰𝚁𝚃 ☚ ═══♚\n\n∰⇨𝙰𝙻𝙱𝚄𝙼 𝙲𝚁𝙴𝙳𝙸𝚃 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼ᬊᬁ \n\n ✇1 -  𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻   𝚅𝙸𝙳𝙴𝙾 !\n  ✇2 -  𝙼𝙴𝚂𝚂𝙸 1 !\n ✇3 -  𝙽𝙴𝚈𝙼𝙰𝚁  !\n  ✇4 -  𝚁𝙾𝙽𝙰𝙻𝙳𝙾 !\n ✇5 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚅𝙸𝙳𝙴𝙾   !\n  ✇6 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚂𝙰𝙳 𝚅𝙸𝙳𝙴𝙾 !\n ✇7 -  𝚆𝙷𝙸𝚃𝙴 01 !\n  ✇8 -  𝙱𝙾𝙽𝙴𝚇4 𝙵𝙵 !\n\n ✇9 -  𝙼1𝙽𝚇 !\n ✇11 - 𝙷𝙰𝚉𝚈 𝙼𝙰𝙽 !\n ✇12 - 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇13 - 𝙰𝙳𝙽𝙰𝙽 𝙷𝚄𝙹𝙾𝚁 𝚅𝙸𝙳𝙴𝙾 !\n ✇14  -  𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾 !\n✇15  - 𝚂𝚃𝙰𝚃𝚄𝚂 𝚅𝙸𝙳𝙴𝙾 \n ✇16  -  18+- 𝙷𝙾𝚁𝙽𝚈 𝚅𝙸𝙳𝙴𝙾 !\n ⚚━━━━━━━━━━━━━━━━━━━⚚\n★❦𝙴𝙽𝙹𝙾𝚈 𝚁4𝙼1𝙼 𝙰𝙻𝙱𝚄𝙼༒\n\n please enter a valid number of album"
await api.sendMessage(a6Y,event.threadID,
      (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          msg: a6Y,
        });
      },
      event.messageID
    );
  }
}

module.exports.onReply = async ({ api, event, Reply }) => {
  const axios = require("axios");
  try {
    if (event.type === "message_reply") {
      const a6 = parseInt(event.body);
      api.unsendMessage(Reply.messageID);
      var r4m1m;

      switch (a6) {
        case 1:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/football";
          break;
        case 2:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/messi";
          break;
        case 3:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/Neymar";
          break;
        case 4:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/cr7";
          break;
        case 5:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/editff";
          break;
        case 6:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/sadff";
          break;
        case 7:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/white01";
          break;
        case 8:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/ff";
          break;
        case 9:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/m1nx";
          break;
        case 10:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/sakib";
          break;
        case 11:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/sigma";
          break;
        case 12:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/islamic";
          break;
        case 13:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/adnan";
          break;
        case 14:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/love";
          break;
        case 15:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/status";
          break;
        case 16:
          r4m1m = "https://a6-video-api-t0il.onrender.com/video/horny";
          break;
        default:
          api.sendMessage("Invalid selection. Please enter a valid number from the album.", event.threadID, event.messageID);
          return;
      }

      const res = await axios.get(r4m1m);
      const url = res.data.data;
      const video = await axios.get(url, { responseType: 'stream' });
        const uri = res.data.count;
      const rm = video.data;
      api.sendMessage({ body: `𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙰6𝚈 𝙰𝙿𝙸 𝚂𝙴𝙽𝙳 𝚈𝙾𝚄𝚁 𝙰𝙻𝙱𝚄𝙼 𝚅𝙸𝙳𝙴𝙾  𝙰𝙽𝙳 𝚅𝙸𝙵𝙴𝙾 𝙲𝙾𝚄𝙽𝚃 [ ${uri} ]`, attachment: rm }, event.threadID, event.messageID);
    }
  } catch (error) {
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
}
