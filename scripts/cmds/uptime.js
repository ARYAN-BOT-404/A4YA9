const axios = require("axios")
const moment = require('moment-timezone');
const os = require('os');
const si = require('systeminformation');
const { performance } = require('perf_hooks');
module.exports.config = {
  name: "uptime",
  author: " Romim",
  version: "2.0.0",
	category: "running time"
}
module.exports.onStart = async ({api,event}) => {
  try {
    
  const response = await axios.get(`https://a6-video-api-t0il.onrender.com/video/love`)
  const uri = response.data.data
  const a6 = await axios.get(uri,{responseType: 'stream'});
  let a6y = a6.data
   const now = moment().tz('Asia/Dahka');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const upt = process.uptime();
		const sec = Math.floor(upt % 60);
		const mini = Math.floor((upt / 60) % 60);
		const h = Math.floor((upt / (60 * 60)) % 24);
		const d = Math.floor(upt / (60 * 60 * 24));
		const uptimeString = `${d} 𝙳𝙰𝚈𝚂\n ${h} 𝙷𝙾𝚄𝚁𝚂\n ${mini} 𝙼𝙸𝙽𝚄𝚃𝙴𝚂 \n${sec} 𝚂𝙴𝙲𝙾𝙽𝙳𝚂\n 𝙳𝙰𝚃𝙴 ${date} \n𝚃𝙸𝙼𝙴${time}`;
    const diskInfo = await si.fsSize();
        const totalDisk = (diskInfo[0].size / (1024 ** 3)).toFixed(2);
        const usedDisk = (diskInfo[0].used / (1024 ** 3)).toFixed(2);
        const freeDisk = (diskInfo[0].available / (1024 ** 3)).toFixed(2);
    const total = 
 `${totalDisk} 
  ${usedDisk}
    ${freeDisk} `;
   const networkInterfaces = os.networkInterfaces();
        const primaryInterface = Object.keys(networkInterfaces)[0];
        const ipAdd = networkInterfaces[primaryInterface][0].address;
  api.sendMessage({body:`𝙷𝙴𝚈 𝙼𝙰𝚂𝚃𝙴𝚁 𝙰-6𝚈 𝚄𝙿𝚃𝙸𝙼𝙴${uptimeString}\n𝙰-6𝚈 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 : 𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳 𝙳𝙾𝙽'𝚃 𝙵𝙾𝚁𝙶𝙴𝚃 𝚃𝙷𝙸𝚂 𝙽𝙰𝙼𝙴𖤍\n𝚃𝙾𝚃𝙰𝙻 𝙳𝙸𝚂𝙺\n\n${total}\n𝙽𝙴𝚃𝚆𝙾𝚁𝙺 𝙸𝙽𝙵𝙾\n@/n${ipAdd}`, attachment: a6y},event.threadID,event.messageID);
  } catch (error) {
    api.sendMessage(`a6y☞︎︎︎${error.message}`,event.threadID,event.messageID)
  }
}
