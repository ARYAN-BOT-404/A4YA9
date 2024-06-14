const axios = require('axios');

const ArYAN = [
  'ai'
];

module.exports = {
  config: {
    name: 'ai',
    version: '1.0.1',
    author: 'OtinxSandip | ArYAN',
    role: 0,
    category: 'ai',
    longDescription: {
      en: 'Ai is a large language model trained by OpenAi.',
    },
    guide: {
      en: 'Ai <questions>\n\n🔎 𝗚𝘂𝗶𝗱𝗲\nAi who are you?\nAi what is Love?',
    },
  },

  langs: {
    en: {
      final: "",
      loading: 'Answering your question, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍........'
    }
  },

  onStart: async function () {},
  onChat: async function ({ api, event, args, getLang, message }) {
    try {
      const prefix = ArYAN.find((p) => event.body && event.body.toLowerCase().startsWith(p));

      if (!prefix) {
        return;
      }

      const prompt = event.body.substring(prefix.length).trim();

      const loadingMessage = getLang("loading");
      const loadingReply = await message.reply(loadingMessage);
      
      const response = await axios.get(`https://itsaryan.onrender.com/api/chatgpt?prompt=${encodeURIComponent(prompt)}`);

      if (response.status !== 200 || !response.data || !response.data.fullResponse) {
        throw new Error('Invalid or missing response from API');
      }

      const messageText = response.data.fullResponse; 

      const finalMsg = `${messageText}`;
      api.editMessage(finalMsg, loadingReply.messageID);

      console.log('Sent answer as a reply to user');
    } catch (error) {
      console.error(`Failed to get answer: ${error.message}`);
      api.sendMessage(
        `${error.message}.`,
        event.threadID
      );
    }
  }
};
