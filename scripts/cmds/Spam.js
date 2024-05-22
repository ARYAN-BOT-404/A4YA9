module.exports = {
	config: {
			name: "spam",
			version: "1.0",
			author: "Jaychris Garcia",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "spam") return message.reply("kick deu akon e 😾");if (event.body && event.body.toLowerCase() == "Bot") return message.reply("Bot না বেবি বলো..😒");if (event.body && event.body.toLowerCase() == "baby") return message.reply("হুম বলো বেবি...🙄");if (event.body && event.body.toLowerCase() == "Romim") return message.reply("hea sunsi bolo.😒");if (event.body && event.body.toLowerCase() == "@Aris E") return message.reply("bolo ki bolba.🙄");if (event.body && event.body.toLowerCase() == "@Ariyan") return message.reply("hum bolo.😌");if (event.body && event.body.toLowerCase() == "@tiny") return message.reply("hea sunsi");if (event.body && event.body.toLowerCase() == "ummah") return message.reply("jah luccah ta virgin ta ses kore dilo 🥺");if (event.body && event.body.toLowerCase() == "kiss") return message.reply("husss🙂");if (event.body && event.body.toLowerCase() == "bot cumma de") return message.reply("chumma");
  }
};
