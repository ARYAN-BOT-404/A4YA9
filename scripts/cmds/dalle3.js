const axios = require("axios");
module.exports.config = {
  name: "dalle3",
  version: "2.0",
  role: 2,
  author: "Dipto",
  description: "Dalle•E-3 Image Generator",
  category: "Dalle3",
  guide: "{pn} [prompt] --ratio 1024x1024\n{pn} [prompt]",
  countDown: 15,
};

module.exports.onStart = async ({ message, event, args, api }) => {
  try {
  const prompt = args.join(" ");
  let prompt2, ratio;
  if (prompt.includes("--ratio")) {
    const parts = prompt.split("--ratio");
    prompt2 = parts[0].trim();
    ratio = parts[1].trim();
  } else {
    prompt2 = prompt;
    ratio = "1024x1024";
  }
    api.setMessageReaction("⌛", event.messageID, (err) => {}, true);
    const { data } = await axios.get(
      `${global.GoatBot.config.api}/dalle3?prompt=${prompt2}&ratio=${ratio}`
    );
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);
    message.reply({
          body: `Better Prompt: ${data.betterPrompt}`, 
          attachment: await global.utils.getStreamFromURL(data.data) 
      });
  } catch (e) {
    console.log(e);
    message.reply("Error: " + e.message);
  }
};
