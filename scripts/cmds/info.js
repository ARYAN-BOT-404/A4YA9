const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "A-6y",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "𝙷𝚄𝚂𝚂𝙰𝙸𝙽 𝙸𝚂 𝙷𝙴𝚁𝙴";
		const botPrefix = "/";
		const authorName = "𝙷𝚄𝚂𝚂𝙰𝙸𝙽 𝙰𝙷𝙼𝙴𝙳";
		const ownAge = "++";
		const teamName = "Github team";
		const authorFB = "https://www.facebook.com/profile.php?id=100071009500533";
		const authorInsta = "https://www.instagram.com/aruu.babe";
		const tikTok = "https://www.tiktok.com/@mixxa_ff1";
		const urls = JSON.parse(fs.readFileSync('a6.json'));
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
			body: `===「 𝙱𝙾𝚃 & 𝙾𝚆𝙽𝙴𝚁 𝙸𝙽𝙵𝙾 」===
\❏ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴: ${botName}
\❏ 𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇: ${botPrefix}
\❏ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴: ${authorName}
\❏ 𝙾𝚆𝙽𝙴𝚁 𝙰𝙶𝙴 : ${ownAge}
\❏ 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺: ${authorFB}
\❏ 𝙳𝙰𝚃𝙴: ${date}
\❏ 𝚃𝙸𝙼𝙴: ${time}
\❏ 𝚃𝙴𝙰𝙼: ${teamName}
\❏ 𝚄𝙿𝚃𝙸𝙼𝙴: ${uptimeString}
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
