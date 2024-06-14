const axios = require("axios");
const path = require("path");
const fs = require("fs"); 

module.exports.config = {
    name: "gpt",
    version: "2.0.0",
    role: 0,
    authon: "Mostakim",
    description: "Ask OggyGPT",
    category: "AI",
    guide: "[ask]",
    cooldowns: 2,
};

module.exports.onStart = async function({ api, event, args }) {
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("ask me anything", tid, mid);

    try {
        const res = await axios.get(`https://sms-bomb.vercel.app/api/oggygptv2.php?ask=${content}`);
        const respond = res.data.answer;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("GPT is busy, please try again later.", tid, mid);
    }
};
