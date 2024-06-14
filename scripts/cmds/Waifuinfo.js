const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "waifuinfo",
    aliases: [],
    author: "Vex_Kshitiz",
    version: "1.0",
    cooldowns: 5,
    role: 0,
    shortDescription: "",
    longDescription: "Get information about a waifu you have got using waifudex.",
    category: "fun",
    guide: "{p}waifuinfo {name}",
  },

  onStart: async function ({ api, event, args, message }) {
    const userId = event.senderID;
    const waifuJsonPath = path.join(__dirname, "waifu.json");

    try {
      const waifuJson = JSON.parse(fs.readFileSync(waifuJsonPath, "utf8"));

      if (!(userId in waifuJson)) {
        return message.reply("please type {P} waifudex list\n to see your list of waifu");
      }

      const userWaifu = waifuJson[userId].find(waifu => waifu.toLowerCase() === args.join(" ").toLowerCase());

      if (!userWaifu) {
        return message.reply("please type {P} waifudex list\n to see your list of waifu");
      }

      const response = await axios.get(`https://waifu-info.vercel.app/kshitiz?name=${encodeURIComponent(userWaifu)}`);
      const { name, image, info } = response.data;

      const tempImagePath = path.join(__dirname, "cache", `${Date.now()}_${name}.jpg`);

      const writer = fs.createWriteStream(tempImagePath);
      const imageResponse = await axios.get(image, { responseType: "stream" });
      imageResponse.data.pipe(writer);

      writer.on("finish", () => {
        const stream = fs.createReadStream(tempImagePath);

        message.reply({
          body: info,
          attachment: stream,
        });
      });
    } catch (error) {
      console.error(error);
      message.reply("Sorry, an error occurred while processing your request.");
    }
  }
};
