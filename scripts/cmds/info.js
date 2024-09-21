const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "ArYan",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "ᴀʀʏᴀɴ ʀᴀᴊ";
		const botPrefix = ".";
		const authorName = "ᴅᴀᴠɪᴅ ᴀʀʏᴀɴ";
		const ownAge = "18";
		const teamName = "ᴛɪᴍᴇ";
		const authorFB = "https://www.facebook.com/ArYan.com.404";
		const authorInsta = "ɴᴏ";
		const tikTok = "ɴᴏ";
		const st = "ᴀᴄᴛɪᴠᴇ";
		const urls = JSON.parse(fs.readFileSync('arohi.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `  🍒ᗩᖇYᗩᑎ IᑎᖴO🍒  \n
🤖 Bot Name: ${botName}
🚀 Prefix: ${botPrefix}
👤 Owner: ${authorName}
🔆 Age: ${ownAge}
☢️ Team: ${teamName}
🍒 authorFb: ${authorFB}
📱 insta: ${authorInsta}
🏠 TikTok: ${tikTok}
🖊️ stutes: ${st}
⏱️ seconds: ${seconds}
🕰️ minutes: ${minutes}
🛸 hours: ${hours}
🌒 days: ${days}
🌧️ date: ${date}
☔ Time: ${time}
⏰ uptime: ${uptimeString}
 `,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
