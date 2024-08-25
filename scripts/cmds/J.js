const axios = require("axios");

module.exports.config = {
  name: "j",
  category: "88",
  author: "Romim"
}

module.exports.onStart = async function ({}) {}

module.exports.onChat = async ({ api, event }) => {
  const { threadID, messageID } = event;

 var Romim = event.body.toLowerCase():
  if (Romim.includes("🤣")||Romim.includes("😂")||Romim.includes("😁")||Romim.includes("😅")) {
    
   
    const img = ["https://i.imgur.com/arDsJ8g.mp4", "https://i.imgur.com/hDOJcA3.mp4", "https://i.imgur.com/hZ89cZI.mp4","https://i.imgur.com/VRjFSaP.mp4"];
    
    const randomImageUrl = img[Math.floor(Math.random() * img.length)];
    
    try {

      const response = await axios({
        url: randomImageUrl,
        method: "GET",
        responseType: "stream",
      });

     
      api.sendMessage({
        body: "🤍",
        attachment: response.data,
      }, threadID, messageID);

    } catch (error) {
      api.sendMessage("Error fetching the image.", threadID, messageID);
    }
  }
}
