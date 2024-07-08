const axios = require("axios");

module.exports = {
  config: {
    name: 'waifu2',
    aliases: ["waifu2"],
    version: '3.0',
    author: 'Dipto',
    countDown: 0,
    role: 0,
    description: {
      en: 'Guess the waifu name'
    },
    category: 'game',
    guide: {
      en: '{pn}'
    }
  },

  onReply: async function ({ api, event, Reply, usersData }) {
    const { waifu, attempts } = Reply;
    const maxAttempts = 5;

    if (event.type == "message_reply") {
      const reply = event.body.toLowerCase();
      const getCoin = 2 * 120.5;
      const getExp = 1 * 121;
      const userData = await usersData.get(event.senderID);

      if (attempts >= maxAttempts) {
        await api.sendMessage("🚫 | You have reached the maximum number of attempts (5).", event.threadID, event.messageID);
        return;
      }
      if (isNaN(reply)) {
        if (reply == waifu.toLowerCase()) {
          try {
            await api.unsendMessage(Reply.messageID);
            await usersData.set(event.senderID, {
              money: userData.money + getCoin,
              exp: userData.exp + getExp,
              data: userData.data
            });
          } catch (err) {
            console.log("Error: ", err.message);
          } finally {
            const message = `✅ | Correct answer!\nYou have earned ${getCoin} coins and ${getExp} exp.`;
            await api.sendMessage(message, event.threadID, event.messageID);
          }
        } else {
          Reply.attempts += 1;
          global.GoatBot.onReply.set(Reply.messageID, Reply); // Update attempts
          api.sendMessage(`❌ | Wrong Answer. You have ${maxAttempts - Reply.attempts} attempts left.\n✅ | Try Again!`, event.threadID, event.messageID);
        }
      }
    }
  },

  onStart: async function ({ api, args, event }) {
    try {
      if (!args[0]) {
        const response = await axios.get(`${global.GoatBot.config.api}/waifu?randomWaifu=random`);
        const { waifu, link } = response.data;
        api.sendMessage({ body: "Guess this waifu name.", attachment: await global.utils.getStreamFromURL(link) }, event.threadID, (error, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: 'reply',
            messageID: info.messageID,
            author: event.senderID,
            link,
            waifu,
            attempts: 0 
          });
          setTimeout(() => {
            api.unsendMessage(info.messageID);
          }, 90000);
        }, event.messageID);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
    }
  },

  onLoad: async function ({ api }) {
    const checkTime = async () => {
      const currentTime = new Date();
const hours = currentTime.getUTCHours() + 6; 
      const minutes = currentTime.getMinutes();
      const targetTimes = [
        { hour: 14, minute: 45 },
        { hour: 16, minute: 45 },
        { hour: 18, minute: 45 },
        { hour: 20, minute: 45 },
        { hour: 20, minute: 59 },
        { hour: 22, minute: 45 }
      ];
const tid = global.GoatBot.config.whiteListModeThread.whiteListThreadIds
    targetTimes.forEach(async targetTime => {
        if (hours === targetTime.hour && minutes === targetTime.minute) {
          try {
            const response = await axios.get(`${global.GoatBot.config.api}/waifu?randomWaifu=random`);
            const { waifu, link } = response.data;
            const message = await api.sendMessage({ body: "Guess this waifu name.", attachment: await global.utils.getStreamFromURL(link) }, 7329472667111053);

            global.GoatBot.onReply.set(message.messageID, {
              commandName: "waifu2",
              type: 'reply',
              messageID: message.messageID,
              link,
              waifu,
              attempts: 0
            });
          } catch (error) {
            console.log(`Error: ${error}`);
 api.sendMessage(`Error: ${error.message}`, 7678480192268096);
          }
        }
      });
    };
    setInterval(checkTime, 50000); 
  }
};
