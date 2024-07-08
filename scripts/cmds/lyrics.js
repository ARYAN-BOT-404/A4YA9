const axios = require("axios");
module.exports.config = {
  name: "lyrics",
  author: "A6y",
  version: "1.0.0"
}
module.exports.onStart = async ({api,event,args}) => {
  try {
    const agrs = args.join(" ")
  if (!agrs){
    api.sendMessage("please put one lyrics name",event.threadID,event.messageID)
  }
  const response = await axios.get(` ${global.GoatBot.config.api}/lyrics2?songName=${agrs}`)
  const res = response.data
  const lyrics= res.lyrics
  const title = res.title
  const image = res.image
  const a6y = await axios.get({responseType: 'stream',url:image});
  const a6 = a6y.data
  api.sendMessage({body:`title:${title}\nlyrics:${lyrics}`,attachment:a6},event.threadID,event.messageID)
  } catch (error) {
api.sendMessage(`a6y${error.message}`,event.threadID,event.messageID);
  }
}
