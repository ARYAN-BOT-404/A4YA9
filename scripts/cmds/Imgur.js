const axios = require('axios');

module.exports = {
 config: {
 name: "imgur",
 version: "1.0",
 author: "ArYAN",
 countDown: 5,
 role: 0,
 shortDescription: {
 en: "Upload image to imbb"
 },
 longDescription: {
 en: "Upload image to imbb by replying to photo"
 },
 category: "IMAGE",
 guide: {
 en: ""
 }
 },

 onStart: async function ({ api, event }) {
 const linkanh = event.messageReply?.attachments[0]?.url;
 if (!linkanh) {
 return api.sendMessage('Please reply to an image.', event.threadID, event.messageID);
 }

 try {
 const res = await axios.get(`https://aryan-noobs-apis.onrender.com/imgur?link=${encodeURIComponent(linkanh)}`);
 const juswa = res.data.uploaded.image;
 return api.sendMessage(juswa, event.threadID, event.messageID);
 } catch (error) {
 console.log(error);
 return api.sendMessage('Failed to upload image to imbb.', event.threadID, event.messageID);
 }
 }
};
