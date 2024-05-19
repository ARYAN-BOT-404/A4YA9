module.exports = {
    config: {
        name: "noprefix",
		      version: "1.0",
	       	author: "Romim",
		      countDown: 5,
	       	role: 0,
		      shortDescription: "",
	       	longDescription: "",
		       category: "auto",
    },
	onStart: async function (){},
	onChat: async function ({ event ,api}) {
    if (event.body.toLowerCase().indexOf("baby") !== -1) return api.setMessage("hum bolo 🐼", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("ki koro") !== -1) return api.setMessage("bose asi tmi?", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("hello") !== -1) return api.setMessage("hi 🐼🤍", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("bot ummah deu") !== -1) return api.setMessage("ehh soytan jah ante 😾", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("ummah ") !== -1) return api.setMessage("allah go amr virgin ses hoye gelo 😭", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("chumma") !== -1) return api.setMessage("dibo na toke tui kharap", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("janu") !== -1) return api.setMessage("bolbi nki chole jabo", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("spam") !== -1) return api.setMessage("ore kick deu akon e 😾", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("Romim baby") !== -1) return api.setMessage("sunsi bolo", event.messageID,event.threadID)
    
    if (event.body.toLowerCase().indexOf("@tiny") !== -1) return api.setMessage("sunsi bolo", event.messageID,event.threadID)
    
    if (event.body.toLowerCase().indexOf("@Ariyan") !== -1) return api.setMessage("sunsi bolo", event.messageID,event.threadID)
    
    if (event.body.toLowerCase().indexOf("@Aris E") !== -1) return api.setMessageReaction("hum sunsi", event.messageID,event.threadID)
  },
};
