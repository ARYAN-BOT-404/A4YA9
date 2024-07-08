const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "download",
alias: ["down"],
  version: "1.0.0",
  role: 2,
  usePrefix: true,
  author: "dipto",
  description: "Download various file types from Facebook CDN links",
  category: "utility",
  cooldowns: 5
};
module.exports.onStart = async ({ api, event, args }) => {
  const link = args[0] || event.messageReply.body;
  if (!link) {
    return api.sendMessage('Please provide a valid Facebook CDN link.', event.threadID, event.messageID);
  }
  const supportedExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.raw', '.docx', '.txt', '.gif', '.wav', '.mp4', '.mp3','.webp'];//change as needed😒
  let extension;
  for (const supportedExt of supportedExtensions) {
    if (link.includes(supportedExt)) {
      extension = supportedExt;
      break;
    }//!tiny
  }
  const filePath = __dirname + `/cache/dl_${Date.now()}${extension}`;

  try {
    const response = await axios({
      method: 'get',
      url: link,
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);
    writer.on('finish', () => {
      api.sendMessage({ body: 'Download complete!', attachment: fs.createReadStream(filePath) }, event.threadID, () => {
        fs.unlinkSync(filePath);
      }, event.messageID);
    });
    writer.on('error', (error) => {
      fs.unlinkSync(filePath);
    console.log(`Error writing file: ${error.message}`);
    });
  } catch (error) {
    api.sendMessage(`Error downloading file: ${error.message}`, event.threadID, event.messageID);
  }
};
