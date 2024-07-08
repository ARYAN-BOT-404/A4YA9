const axios = require('axios');

module.exports = {
    config: {
        name: "pin",
        aliases: ["pin"],
        version: "1.0",
        author: "Dipto",
        countDown: 15,
        role: 0,
        shortDescription: "Pinterest Image Search",category: "download",
        guide: {
            en: "{pn} query"
        }
    },

    onStart: async function ({ api, event, args }) {
        const queryAndLength = args.join(" ").split(/\s*-\s*/);
        const q = queryAndLength[0].trim();
        const length = queryAndLength[1].trim() || 2;

        if (!q || !length) {
            return api.sendMessage("❌| Wrong Format", event.threadID, event.messageID);
        }

        try {
            const w = await api.sendMessage("Please wait...", event.threadID);
            const response = await axios.get(`${global.GoatBot.config.api}/pinterest?search=${encodeURIComponent(q)}&limit=${encodeURIComponent(length)}`);
            const data = response.data.data;

            if (!data || data.length === 0) {
                return api.sendMessage("Empty response or no images found.", event.threadID, event.messageID);
            }

            const totalImagesCount = Math.min(data.length, parseInt(length));
              const attachment = await Promise.all(data.map(async (imgURL) => {
                const imgStream = await global.utils.getStreamFromURL(imgURL);
                return imgStream;
              }));

            await api.unsendMessage(w.messageID);
            await api.sendMessage({
                body: `
✅ | Here's Your Query Based images
🐤 | Total Images Count: ${totalImagesCount}`,
                attachment
            }, event.threadID, event.messageID);
        } catch (error) {
            console.error(error);
            await api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
        }
    }
};
