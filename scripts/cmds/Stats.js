const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "status",
    aliases: ["ping","upt","time"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "stats",
    },
    longDescription: {
      en: "shows stats of bot.",
    },
    category: "system",
    guide: {
      en: "Use {p}stats to see stats of bot.",
    },
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${hours}Hrs ${minutes}min ${seconds}sec`;

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "𝚂𝚃𝙰𝚁𝚃𝙴𝙳 𝙰-6𝚈",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "Not smooth throw your router, buddy";
      if (ping < 400) {
        pingStatus = "Smooth like your tiny pussy";
      }

      // Assuming global.utils.getStreamFromURL(mp4) is correctly defined
      const imgURL= [ "https://i.imgur.com/zoDHpkt.mp4","https://i.imgur.com/Apx7TKW.mp4","https://i.imgur.com/sxVhJKi.mp4","https://i.imgur.com/vHGNDXs.mp4","https://i.imgur.com/l4Cj58j.mp4","https://i.imgur.com/ZkRQknc.mp4" ];
      const attachment = await global.utils.getStreamFromURL(imgURL); api.sendMessage({
        body: `𝙰-6𝚈 𝙴𝙻𝙸𝚃𝙴 \────────\

🍀 | 𝙰-6𝚈 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 𝚃𝙸𝙼𝙴﹞\  ${uptimeString}\──────── \

📅 | 𝙳𝙰𝚃𝙴﹞: ${date}\────────\n 𝚃𝙸𝙽𝙴: ${time}\──────── \

🏂 | 𝚃𝙾𝚃𝙰𝙻 𝚄𝚂𝙴𝚁﹞\allUsers.length}\──────── \

🏢 | 𝚃𝙾𝚃𝙰𝙻 𝚃𝙷𝚁𝙴𝙰𝙳𝚂 ﹞\llThreads.length}\| 𝙿𝙸𝙽𝙶 ﹞: ${ping}ms\──────── \ status: ${pingStatus}`,
        attachment: attachment,
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
