const axios = require("axios");
module.exports.config = {
  name: "nai",
  author: "a6",
  category: "jani na"
}
module.exports.onStart = async function ({}) {};
module.exports.onChat = async ({api,event}) => {
  const non = event.body.toLowerCase()
  if (non.includes("❤️‍🩹")||non.includes("🤍")||non.includes("❤️")||non.includes("🖤")) {
 try {
      const response = await axios.get(`https://a6-video-api-t0il.onrender.com/video/love`)
    const type = response.data
    const a6 = type.data
    const a6y = await axios.get(a6, {responseType: 'stream'})
    const a6y1 = a6y.data
    api.sendMessage({body:`- হঠাৎ করে মনে হলো জীবন থেকে কি যেন হারিয়ে গেছে? তাকিয়ে দেখি আমার ভিতরের সেই চঞ্চল। হাস্যজ্বল আমিটাই আর নেই!🥺🙂`,attachment: a6y1},event.threadID,event.messageID)
 
 } catch (error) {
   api.sensMessage(`error:${error.message}`,event.threadID,event.messageID)
 } }
}
