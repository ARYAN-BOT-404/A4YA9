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
		const botName = "𝙰-6𝚈 𝙱𝙾𝚃";
		const botPrefix = "*";
		const authorName = "𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳";
		const ownAge = "++";
		const teamName = "𝙰-6𝚈 𝚃𝙴𝙰𝙼";
		const authorFB = "https://www.facebook.com/profile.php?id=61557377382818";
		const authorInsta = "https://www.instagram.com/aruu.babe";
		const tikTok = "https://www.tiktok.com/@mixxa_ff1";
		const st = "𝙰𝙲𝚃𝙸𝚅𝙴";
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
			body: `♕︎➪𝙰-6𝚈 𝙱𝙾𝚃  𝙸𝙽𝙵𝙾𖤍🂱
\☢ ︎︎𝙰-6𝚈 𝙽𝙰𝙼𝙴 ☞︎︎︎ ${botName} 🂱
\☢︎︎ 𝙰-6𝚈  𝙿𝚁𝙴𝙵𝙸𝚇 ☞︎︎︎ ${botPrefix} 𖤍
\☢ ︎︎𝙰-6𝚈 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 ☞︎︎︎ ${authorName} ⚠︎
\☢︎︎ 𝙰-6𝚈 𝙾𝚆𝙽𝙴𝚁 𝙰𝙶𝙴  ☞︎︎︎ ${ownAge} ⚠︎
\☢ ︎𝙾𝚆𝙽𝙴𝚁 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 ☞︎︎︎ ${authorFB} ♧︎︎︎
\☢ ︎︎𝙾𝚆𝙱𝙴𝚁 𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼 ☞︎︎︎ ${authorInsta} ♲︎︎︎
\☢︎︎ 𝚃𝙴𝙰𝙼 ☞︎︎︎ ${teamName} 𓀬
\♕︎════════♔︎═════════♕︎

 ♲︎︎︎ 𝙰-6𝚈 𝚄𝙿𝚃𝙸𝙼𝙴 𒊹︎︎︎
 \☢ ︎︎𝙰-6𝚈 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 𝚃𝙸𝙼𝙴 ☞︎︎︎ ${uptimeString} ❁
 \☢︎︎ 𝙳𝙰𝚃𝙴 ☞︎︎︎ ${date} ꕥ
 \☢ 𝙽︎︎𝙾𝚆 𝚃𝙸𝙼𝙴 ☞︎︎︎ ${time} ☔︎
 \☢︎︎ 𝚂𝚃𝙰𝚃𝚄𝚂 ☞︎︎︎ ${st}🔰
 \♕════════𖣘═════════♕︎
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
