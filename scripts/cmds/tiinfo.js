const axios = require("axios");

module.exports = {
  config: {
    name: "tiktok",
    version: "1.0",
    author: "a6y",
    role: 0,
    category: "info",
  },
  onStart: async ({ api, event, args }) => {
    const { threadID, messageID } = event;
    const input = args.join(" ");
    if (!input) {
      return api.sendMessage("please provide a valid tiktok username", threadID, messageID);
    }
    try {
      const response = await axios.get(`https://mostakim-api.onrender.com/tikstalk?username=${input}`);
      var Url = response.data;
      var nick = Url.nickname;
      var user = Url.username;
      var avtar = Url.avatarLarger;
      var like = Url.heartCount;
      var follower = Url.followerCount;
      const a6 = await axios.get(avtar,{responseType: 'stream'});
      var a6y = a6.data
      var all = `𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:${nick}\n 𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴:${user}\n𝙻𝙸𝙺𝙴:${like}\n𝙵𝙾𝙻𝙻𝙾𝚆𝙴𝚁:${follower} `;
      api.sendMessage({ body: `${all}`, attachment: a6y},threadID,messageID);
    } catch (error) {
      api.sendMessage(`error☞︎︎︎${error.message}`, event.threadID, event.messageID);
    }
  }
};
