module.exports.config ={
  name: "album",
  version: "1.0.0",
  role: 0,
  author: "Romim",
  description: "Displays album options for selection.",
  category: "Media",
  countDown: 5,
  guide: {
      en: "{p}{n} or add [album]"
}
},onStart = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("    ♚═══ ∰𝙰𝙻𝙱𝚄𝙼 𝚂𝚃𝙰𝚁𝚃 ☚ ═══♚\n\n   ∰⇨𝙰𝙻𝙱𝚄𝙼 𝙲𝚁𝙴𝙳𝙸𝚃 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼ᬊᬁ \n                             👑 \n\n                    ♬ 𝙰𝙿𝙸 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼 ♪\n                      ★         👑        ★\n\n                      𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻 !\n\n                   ━━━━━━━━━━━━━━━━━━━━━\n\n ✇1 -  𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻   𝚅𝙸𝙳𝙴𝙾 !\n\n  ✇2 -  𝙼𝙴𝚂𝚂𝙸 1 !\n\n ✇3 -  𝙽𝙴𝚈𝙼𝙰𝚁  !\n\n  ✇4 -  𝚁𝙾𝙽𝙰𝙻𝙳𝙾 !\n\n   ━━━━━━━━━━━━━━━━━━━━━\n\n               ★        👑         ★\n                    𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 !\n\n    ━━━━━━━━━━━━━━━━━━━━━\n\n ✇5 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚅𝙸𝙳𝙴𝙾   !\n\n  ✇6 -  𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝙴𝙳𝙸𝚃𝚉 𝚂𝙰𝙳 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇7 -  𝚆𝙷𝙸𝚃𝙴 01 !\n\n  ✇8 -  𝙱𝙾𝙽𝙴𝚇4 𝙵𝙵 !\n\n ✇9 -  𝙼1𝙽𝚇 !\n\n       ━━━━━━━━━━━━━━━━━━━━━\n\n               ★          👑        ★\n\n                    𝙲𝚁𝙸𝙲𝙺𝙴𝚃 !\n\n   ━━━━━━━━━━━━━━━━━━━━━\n\n✇10 - 𝚂𝙰𝙺𝙸𝙱 𝙰𝙻 𝙷𝙰𝚂𝙰𝙽 !\n\n   ━━━━━━━━━━━━━━━━━━━━━\n\n               ★          👑        ★\n                         𝚂𝙸𝙶𝙼𝙰 !\n\n  ━━━━━━━━━━━━━━━━━━━━━\n ✇11 - 𝙷𝙰𝚉𝚈 𝙼𝙰𝙽 !\n\n   ━━━━━━━━━━━━━━━━━━━━━\n\n               ★          👑        ★\n                       𝙸𝚂𝙻𝙰𝙼𝙸𝙲 !\n\n ━━━━━━━━━━━━━━━━━━━━━\n\n ✇12 - 𝙸𝚂𝙻𝙰𝙼𝙸𝙲 𝚅𝙸𝙳𝙴𝙾 !\n\n ✇13 - 𝙰𝙳𝙽𝙰𝙽 𝙷𝚄𝙹𝙾𝚁 𝚅𝙸𝙳𝙴𝙾 !\n    ━━━━━━━━━━━━━━━━━━━━━\n\n               ★          👑        ★\n                         𝙻𝙾𝚅𝙴  !\n\n    ━━━━━━━━━━━━━━━━━━━━━\n ✇14  -  𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾 !\n\n✇15  - 𝚂𝚃𝙰𝚃𝚄𝚂 𝚅𝙸𝙳𝙴𝙾 \n\n  ★━━━━━━━━━━━━━━━━━━━★\n  ✇16  -  18+- 𝙷𝙾𝚁𝙽𝚈 𝚅𝙸𝙳𝙴𝙾 !\n\n   ☆━━━━━━━━━━━━━━━━━━━☆\n\n                 ⇩  𝙰𝙻𝙱𝚄𝙼 𝙴𝙽𝙳  ⚚\n\n   ⚚━━━━━━━━━━━━━━━━━━━⚚\n\n          ★❦𝙴𝙽𝙹𝙾𝚈 𝚁4𝙼1𝙼 𝙰𝙻𝙱𝚄𝙼༒\n\n             ", e.threadID, ((a, n) => {
		global.client.onReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
	}, module.exports.onReply = async ({
	api: e,
	event: a,
	client: n,
	onReply: t,
	Currencies: s,
	Users: i,
	Threads: o
	}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.data;
		const Romim = (await p.get(h)).data.shaon;
		const ls = (await p.get(h)).data.count;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: `𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙰𝙿𝙸 𝚂𝙴𝙽𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴.!`,
			attachment: t
		}, a.threadID, a.messageID)
	}

	function linkanh() {
				const p = require("axios");
				if ("1" == a.body)
						var h = "https://video-api-akug.onrender.com/football";
				else if ("2" == a.body)
				 var   h = "https://video-api-akug.onrender.com/messi";
				else if ("3" == a.body)
				 var   h = "https://video-api-akug.onrender.com/Neymar";
				else if ("4" == a.body)
					var  h = "https://video-api-akug.onrender.com/ronaldo";
				else if ("5" == a.body)
					var  h = "https://video-api-akug.onrender.com/editff";
				else if ("6" == a.body)
					var  h = "https://video-api-akug.onrender.com/ffsad";
				else if ("7" == a.body)
					var  h = "https://video-api-akug.onrender.com/white01";
				else if ("8" == a.body)
					var  h = "https://video-api-akug.onrender.com/bonex";
				else if ("9" == a.body)
				 var   h = "https://video-api-akug.onrender.com/m1nx";
				else if ("10" == a.body)
				 var  h = "https://video-api-akug.onrender.com/sakib";
					else if ("11" == a.body)
					 var  h = "https://video-api-akug.onrender.com/hazy";
					else if ("12" == a.body)
					var  h = "https://video-api-akug.onrender.com/islamic";
				 else if ("13" == a.body)
				 var  h = "https://video-api-akug.onrender.com/adnan";
				 else if ("14" == a.body)
				 var  h = "https://video-api-akug.onrender.com/love";
					 else if ("15" == a.body)
				 var  h = "https://video-api-akug.onrender.com/status";
		else if ("16" == a.body)
				 var  h =
"https://video-api-akug.onrender.com/sexy";
				return { p, h };
		}
};
