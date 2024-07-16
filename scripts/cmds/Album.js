module.exports.config = {
  name: "album",
  author: "A6Y",
  category: "video sender"
};

module.exports.onStart = async ({ api, event, args }) => {
  if (!args[0]) {
    api.setMessageReaction("😘", event.messageID, (err) => {}, true);

    const a6Y1 = "♚═══ ∰𝙰𝙻𝙱𝚄𝙼 𝚂𝚃𝙰𝚁𝚃 ☚ ═══♚\n\n∰⇨𝙰𝙻𝙱𝚄𝙼 𝙲𝚁𝙴𝙳𝙸𝚃 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼ᬊᬁ \n ✇1 -  𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻   𝚅𝙸𝙳𝙴𝙾 !\n  ✇2 -  𝙼𝙴𝚂𝚂𝙸 1 !\n ✇3 -  𝙽𝙴𝚈𝙼𝙰𝚁  !\n  ✇4 -  𝚁𝙾𝙽𝙰𝙻𝙳𝙾 !\n ✇5 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚅𝙸𝙳𝙴𝙾   !\n  ✇6 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚂𝙰𝙳 𝚅𝙸𝙳𝙴𝙾 !\n ✇7 -  𝚆𝙷𝙸𝚃𝙴 01 !\n  ✇8 -  𝙱𝙾𝙽𝙴𝚇4 𝙵𝙵 !\n\n ✇9 -  𝙼1𝙽𝚇 !\n ✇11 - 𝙷𝙰𝚉𝚈 𝙼𝙰𝙽 !\n ✇12 - 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇13 - 𝙰𝙳𝙽𝙰𝙽 𝙷𝚄𝙹𝙾𝚁 𝚅𝙸𝙳𝙴𝙾 !\n ✇14  -  𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾 !\n✇15  - 𝚂𝚃𝙰𝚃𝚄𝚂 𝚅𝙸𝙳𝙴𝙾 \n ✇16  -  18+- 𝙷𝙾𝚁𝙽𝚈 𝚅𝙸𝙳𝙴𝙾 !\n ⚚━━━━━━━━━━━━━━━━━━━⚚\n★❦𝙴𝙽𝙹𝙾𝚈 𝚁4𝙼1𝙼 𝙰𝙻𝙱𝚄𝙼༒\n\n please enter a valid number of album";
    await api.sendMessage(a6Y1, event.threadID,
      (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          msg: a6Y1,
        });
      },
      event.messageID
    );
  } else if (args[0] === "2") {
    api.setMessageReaction("😚", event.messageID, (err) => {}, true);

    const a6Y2 = "♚═══ ∰𝙰𝙻𝙱𝚄𝙼  𝚂𝚃𝙰𝚁𝚃 ☚ ═══♚\n\n∰⇨𝙰𝙻𝙱𝚄𝙼  𝙲𝚁𝙴𝙳𝙸𝚃 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼ᬊᬁ \n\n ✇17 -  𝙻𝚈𝚁𝙸𝙲𝚂 𝚅𝙸𝙳𝙴𝙾 !\n\n  ✇18 - 𝙰𝙴𝚂𝚃𝙷𝙴𝚃𝙸𝙲 𝚅𝙸𝙳𝙴𝙾  !\n\n ✇19 -  𝙲𝙰𝚁'𝚂 𝚅𝙸𝙳𝙴𝙾 !\n\n  ✇20-  𝙰𝙽𝙸𝙼𝙴 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇21-  𝚂𝙾𝙻𝙾 𝙻𝙴𝚅𝙴𝙻𝙸𝙽𝙶 𝚅𝙸𝙳𝙴𝙾 !\n\n  ✇22 -  𝙼𝙰𝙳𝙰𝚁𝙰 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇23 -  𝙽𝙰𝚁𝚄𝚃𝙾 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇24 -  𝙿𝙷𝙾𝙽𝙺 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇25 -  𝙶𝙸𝚁𝙻 𝚅𝙸𝙳𝙴𝙾 ! \n\n ⚚━━━━━━━━━━━━━━━━━━━⚚\n★❦𝙴𝙽𝙹𝙾𝚈 𝚁4𝙼1𝙼 𝙰𝙻𝙱𝚄𝙼༒\n\n please enter a valid number of album";
    await api.sendMessage(a6Y2, event.threadID,
      (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          msg: a6Y2,
        });
      },
      event.messageID
    );
  }
};

module.exports.onReply = async ({ api, event, Reply }) => {
  const axios = require("axios");
  try {
    if (event.type === "message_reply") {
      const a61 = parseInt(event.body);
      api.unsendMessage(Reply.messageID);
      let r4m1m1;

      switch (a61) {
        case 1:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/football";
          break;
        case 2:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/messi";
          break;
        case 3:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/Neymar";
          break;
        case 4:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/cr7";
          break;
        case 5:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/editff";
          break;
        case 6:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/sadff";
          break;
        case 7:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/white01";
          break;
        case 8:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/ff";
          break;
        case 9:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/m1nx";
          break;
        case 10:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/sakib";
          break;
        case 11:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/sigma";
          break;
        case 12:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/islamic";
          break;
        case 13:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/adnan";
          break;
        case 14:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/love";
          break;
        case 15:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/status";
          break;
        case 16:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/horny";
          break;
case 17:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/lyrics";
          break;
case 18:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/aesthetic";
          break;
case 19:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/car";
          break;
case 20:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/anime";
          break;
case 21:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/arise";
          break;
case 22:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/madara";
          break;
case 23:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/naruto";
          break;
case 24:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/phonk";
          break;
case 25:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/girl";
          break;

        default:
          api.sendMessage("Invalid selection. Please enter a valid number from the album.", event.threadID, event.messageID);
          return;
      }

      const resp = await axios.get(r4m1m1);
      const url1 = resp.data.data;
      const video1 = await axios.get(url1, { responseType: 'stream' });
      const uri1 = resp.data.count;
      const rm1 = video1.data;
      api.sendMessage({ body: `𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙰6𝚈 𝙰𝙿𝙸 𝚂𝙴𝙽𝙳 𝚈𝙾𝚄𝚁 𝙰𝙻𝙱𝚄𝙼 𝚅𝙸𝙳𝙴𝙾  𝙰𝙽𝙳 𝚅𝙸𝙳𝙴𝙾 𝙲𝙾𝚄𝙽𝚃 [ ${uri1} ]`, attachment: rm1 }, event.threadID, event.messageID);
    }
  } catch (error) {
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
};
