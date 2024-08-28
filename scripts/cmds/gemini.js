const axios = require('axios');
 
module.exports = {
  config: {
    name: 'gemini',
    version: '1.0',
    author: 'Arfan',
    role: 0,
    category: 'Ai-Chat',
    shortDescription: { en: `gemini ai` },
    longDescription: { en: `gemini ai` },
    guide: { en: '{pn}gemini [query]' },
  },
 
  onStart: async function ({ api, event, args }) {
    try {
      const prompt = args.join(" ");
 
      if (prompt) {
        const processingMessage = await api.sendMessage(`Asking Gemini.please wait moment..⏳`, event.threadID);
        const response = await axios.get(`https://shuddho-ts-api.hf.space/api/geminiweb?prompt=${encodeURIComponent(prompt)}`);
 
        if (response.data && response.data.reply) {
          await api.sendMessage({ body: response.data.reply }, event.threadID, event.messageID);
          console.log(`Sent Gemini's response to the user`);
        } else {
          throw new Error(`Invalid or missing response from Gemini API`);
        }
 
        await api.unsendMessage(processingMessage.messageID);
      }
 
    } catch (error) {
      console.error(`❌ | Failed to get Gemini's response: ${error.message}`);
      api.sendMessage(`❌ | An error occured. You can try typing your query again or resending it. There might be an issue with the server that's causing the problem, and it might resolve on retrying.`, event.threadID);
    }
  },
};
