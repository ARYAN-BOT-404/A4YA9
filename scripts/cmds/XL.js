const fs = require("fs");
const path = require("path");
const axios = require("axios");

const aspectRatioMap = {
  "1:1": { width: 1024, height: 1024 },
  "9:7": { width: 1152, height: 896 },
  "7:9": { width: 896, height: 1152 },
  "19:13": { width: 1216, height: 832 },
  "13:19": { width: 832, height: 1216 },
  "7:4": { width: 1344, height: 768 },
  "4:7": { width: 768, height: 1344 },
  "12:5": { width: 1536, height: 640 },
  "5:12": { width: 640, height: 1536 }
};

module.exports = {
  config: {
    name: "xl",
    aliases: [],
    author: "Vex_Kshitiz",
    version: "1.0",
    cooldowns: 20,
    role: 0,
    shortDescription: "animagine xl 3.1.",
    longDescription: "Generates an image based on animagine xl 3.1.",
    category: "fun",
    guide: "!xl <prompt> [-<ratio>] [-<style>]"
  },
  onStart: async function ({ message, args, api, event }) {
    api.setMessageReaction("🕐", event.messageID, (err) => {}, true);
    try {
      const joinedArgs = args.join(" ");
      const [prompt, ratio, style] = joinedArgs.split(/[-—]/).map(arg => arg.trim());

      if (!prompt) {
        message.reply("❌ | Please provide a prompt.");
        return;
      }

      const finalRatio = ratio && aspectRatioMap.hasOwnProperty(ratio) ? ratio : "1:1";
      const finalStyle = style && !isNaN(style) && style >= 0 && style <= 10 ? parseInt(style) : 0;

      const apiUrl = `https://xl31-xt9r.onrender.com/kshitiz?prompt=${encodeURIComponent(prompt)}&ratio=${encodeURIComponent(finalRatio)}&style=${encodeURIComponent(finalStyle)}`;

      const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

      const imageData = Buffer.from(response.data, "binary");

      const imagePath = path.join(__dirname, "/cache", `xl.jpg`);

      fs.writeFileSync(imagePath, imageData);

      const stream = fs.createReadStream(imagePath);
      message.reply({
        body: "",
        attachment: stream
      });
    } catch (error) {
      console.error("Error:", error);
      message.reply("❌ | Failed to generate image.");
    }
  }
};
