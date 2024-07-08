const axios = require("axios");

module.exports = {
  config: {
    name: 'flag',
    aliases: ["flagGame"],
    version: '3.0',
    author: 'Dipto',
    countDown: 0,
    role: 0,
    description: {
      en: 'Guess the flag name'
    },
    category: 'game',
    guide: {
      en: '{pn}'
    }
  },

  onReply: async function ({ api, event, Reply, usersData }) {
    const { country, attempts } = Reply;
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
        if (reply == country.toLowerCase()) {
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
        const response = await axios.get(`${global.GoatBot.config.api}/flagGame?randomFlag=random`);
        const { link, country } = response.data;
        api.sendMessage({ body: "A random flag has appeared! Guess the flag like this.", attachment: await global.utils.getStreamFromURL(link) }, event.threadID, (error, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: 'reply',
            messageID: info.messageID,
            author: event.senderID,
            link,
            country,
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

  onLoad: async function ({ api, event }) {
    const checkTime = async () => {
      const currentTime = new Date();
      const hours = currentTime.getUTCHours() + 6; // Adjusting to BD time (UTC+6)
      const minutes = currentTime.getMinutes();
      const tid = global.GoatBot.config.whiteListModeThread.whiteListThreadIds;
      const targetTimes = [
        { hour: 10, minute: 10 },
        { hour: 12, minute: 12 },
        { hour: 14, minute: 14 },
        { hour: 16, minute: 16 },
        { hour: 18, minute: 18 },
        { hour: 20, minute: 20 },
        { hour: 0, minute: 0 }
      ];

      targetTimes.forEach(async targetTime => {
        if (hours === targetTime.hour && minutes === targetTime.minute) {
          try {
            const response = await axios.get(`${global.GoatBot.config.api}/flagGame?randomFlag=random`);
            const { link, country } = response.data;
            tid.forEach(async threadID => {
              const message = await api.sendMessage({ body: "Hey Guys 😃😃!! A random flag has appeared! Guess the flag😗.", attachment: await global.utils.getStreamFromURL(link) }, threadID);

              global.GoatBot.onReply.set(message.messageID, {
                commandName: "flag",
                type: 'reply',
                messageID: message.messageID,
                link,
                country,
                attempts: 0
              });
            });
          } catch (error) {
            console.log(`Error: ${error}`);
            tid.forEach(threadID => {
              api.sendMessage(`Error: ${error.message}`, threadID);
            });
          }
        }
      });
    };
    setInterval(checkTime, 50000);
  }
};
