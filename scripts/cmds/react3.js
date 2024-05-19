module.exports = {
	config: {
		name: "autoreact | NOTCMD",
		version: "1.0",
		author: "jvb",
		countDown: 5,
		role: 0,
		shortDescription: "sarcasm",
		longDescription: "sarcasm",
		category: "reply",
	},
	onStart: async function () {},
	onChat: async function ({ api, event, client, __GLOBAL }) {
		var { threadID, messageID } = event;
		let react = event.body.toLowerCase();
		if (
			event.body.indexOf("kain") == 0 ||
			event.body.indexOf("Kain") == 0 ||
			event.body.indexOf("yie") == 0 ||
			event.body.indexOf("khaw") == 0 ||
			event.body.indexOf("dukaw") == 0 ||
			event.body.indexOf("chup") == 0 ||
			event.body.indexOf("chupa") == 0 ||
			event.body.indexOf("Chupa") == 0 ||
			event.body.indexOf("sex") == 0 ||
			event.body.indexOf("Sex") == 0 ||
			event.body.indexOf("isss") == 0 ||
			event.body.indexOf("pussy") == 0 ||
			event.body.indexOf("fuck") == 0 ||
			event.body.indexOf("poke") == 0 ||
			event.body.indexOf("Puke") == 0 ||
			event.body.indexOf("puke") == 0 ||
			event.body.indexOf("video") == 0 ||
			event.body.indexOf("porn") == 0 ||
			event.body.indexOf("xnx") == 0 ||
			event.body.indexOf("www") == 0 ||
			event.body.indexOf("nosto") == 0 ||
			event.body.indexOf("hehe") == 0 ||
			event.body.indexOf("Hehe") == 0 ||
			event.body.indexOf("bapy") == 0 ||
			event.body.indexOf("meaw") == 0 ||
			event.body.indexOf("tuda") == 0 ||
			event.body.indexOf("chuda") == 0 ||
			event.body.indexOf("chud") == 0 ||
			event.body.indexOf("baby") == 0 ||
			event.body.indexOf("bby") == 0 ||
			event.body.indexOf("bebe") == 0 ||
			event.body.indexOf("magi") == 0 ||
			event.body.indexOf("meye") == 0 ||
			event.body.indexOf("afternoon") == 0 ||
			event.body.indexOf("aftie") == 0 ||
			event.body.indexOf("Afternoon") == 0 ||
			event.body.indexOf("Aftie") == 0 ||
			event.body.indexOf("Morning") == 0 ||
			event.body.indexOf("morning") == 0 ||
			event.body.indexOf("mal") == 0 ||
			event.body.indexOf("cex") == 0 ||
			event.body.indexOf("segs") == 0 ||
			event.body.indexOf("chumma") == 0 ||
			event.body.indexOf("ummma") == 0 ||
			event.body.indexOf("ummah") == 0 ||
			event.body.indexOf("Romim") == 0 && !bot.includes(event.senderID)
		) {
			var msg = {
				body: "",
			};
			api.sendMessage(msg, threadID, messageID);
			api.setMessageReaction("🥵", event.messageID, (err) => {}, true);
		}
	},
};
      
