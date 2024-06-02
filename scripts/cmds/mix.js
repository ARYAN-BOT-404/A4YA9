module.exports = {
  config: {
    name: "random",
    role: 0,
    author: "Romim",
    countDown: 5,
    longDescription: "Randomvideo",
    category: "randomvideo",
    guide:{
      en: "{pn} <video>"
    } 
  },
   onStart: async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var romim = ["https://rm-video-api.onrender.com/white01",
  "https://rm-video-api.onrender.com/sexy",
  "https://rm-video-api.onrender.com/football",
  "https://rm-video-api.onrender.com/messi",
  "https://rm-video-api.onrender.com/Neymar",
  "https://rm-video-api.onrender.com/ronaldo",
  "https://rm-video-api.onrender.com/editff",
  "https://nazrul-apis.onrender.com/video/anime",
  "https://rm-video-api.onrender.com/ffsad",
  "https://rm-video-api.onrender.com/sakib",
  "https://rm-video-api.onrender.com/hazy",
  "https://rm-video-api.onrender.com/islamic",
  "https://rm-video-api.onrender.com/adnan",
  "https://rm-video-api.onrender.com/love",
  "https://rm-video-api.onrender.com/m1nx"
  ]
  var romim1 = romim[Math.floor(Math.random() * romim.length)]
  axios.get(romim1).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let romim2 = res.data.romim;
  let callback = function () {
          api.sendMessage({
            body: `𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙰𝙿𝙸 𝚂𝙴𝙽𝙳 𝚅𝙸𝙳𝙴𝙾                           𝙰𝙿𝙸 𝙱𝚈 𝙰-6𝚈\n\n｢ 𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳 ｣`,
            attachment: fs.createReadStream(__dirname + `/cache/Romim.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/Romim.mp4`), event.messageID);
        }
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/Romim.mp4`)).on("close", callback);
      })
   } 
}
