const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: "dalle",
    aliases: ["bing","create","imagine"],
    version: "1.0",
    author: "Dipto",
    countDown: 15,
    role: 0,
    shortDescription: "Generate images powerby by Dalle3",
    longDescription: "Generate images by Unofficial Dalle3",
    category: "download",
    guide: {
      en: "{pn} prompt"
    }
  },

  onStart: async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
      const fff = ["10ak5WL7efdMYonhuVB4p83vcyctMnrfMpOjynWWj8sk9IQRFqxyd0g6-9n7zA_8FwCvBc28-YnxQFfkHvXqW4orkyCFrumtAibVt0L3ouoQUoIvf7HCnTRkKBilV_lt6LES9IlMCWTm37ykum-mqZLitRApulJVlt7MWYCOoGWlJdwG8IWZV4AzHgYuUZ7llEU5vUMQIfZ9eFD14HRZmkw", "1xgVSsm2aZ9kPnB4Na0LBlbnQ0EJXkjMerzso2AE_9Czco0edPuKPDfJCUwrW_H8yMIxghQXo_GHihHFbviXjG5HjalJkY08raCKEqOA4yaRRa53K1ZBibciMtBdcJGCc8haCyvA5-ecI-JVG3c32AmSBG_9NDUzeZanabgiz-vHR3ERc7szgkDqDqk-w0DDgdTBnaPRn3c5TQb3_pzta1w"]
        const col = fff[Math.floor(Math.random() * fff.length)]
      const w = await api.sendMessage("Wait koro baby < 😽", event.threadID);
  
const response = await axios.get(`${global.GoatBot.config.api}/dalle?prompt=${prompt}&key=dipto008&cookies=${col}`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'dvassests', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `✅ | Here's Your Generated Photo<😘`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    } finally {
      for (const imgPath of diptoo){
           fs.unlinkSync(imgPath);
      }
    }
  }
}
