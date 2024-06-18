const { getTime, drive } = global.utils;
if (!global.temp.welcomeEvent)
	global.temp.welcomeEvent = {};

module.exports = {
	config: {
		name: "welcome",
		version: "1.7",
		author: "NTKhang",
		category: "events"
	},

	langs: {
		vi: {
			session1: "sáng",
			session2: "trưa",
			session3: "chiều",
			session4: "tối",
			welcomeMessage: "Cảm ơn bạn đã mời tôi vào nhóm!\nPrefix bot: %1\nĐể xem danh sách lệnh hãy nhập: %1help",
			multiple1: "bạn",
			multiple2: "các bạn",
			defaultWelcomeMessage: "Xin chào {userName}.\nChào mừng bạn đến với {boxName}.\nChúc bạn có buổi {session} vui vẻ!"
		},
		en: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			welcomeMessage: "𝙷𝙴𝚈 𝙶𝚄𝚈 𝙰-6𝚈 𝙲𝙾𝙽𝙽𝙴𝙲𝚃 𝚈𝙾𝚄𝚁 𝙶𝚁𝙾𝚄𝙿\n𝙰-6𝚈 𝙿𝚁𝙴𝙵𝙸𝚇: %1\n 𝙰𝙽𝙳 𝚃𝙽𝚇 𝙵𝙾𝚁 𝙰𝙳𝙳𝙴𝙳 𝙰-6𝚈 𝚃𝚈𝙿𝙴☞︎︎︎%1𝙷𝙴𝙻𝙿☞︎︎\n𝙱𝙾𝚃 𝙲𝚁𝙴𝙳𝙸𝚃 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳 𖤍🂱",
			multiple1: "you",
			multiple2: "you guys",
			defaultWelcomeMessage: `𝙰𝚂𝚂𝙰𝙻𝙰𝙼𝚄𝚆𝙰𝙻𝙰𝙸𝙺𝚄𝙼 {userName} 𝙱𝚁𝙾𝚃𝙷𝙴𝚁  𝚆𝙴𝙻𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝙰-6𝚈 \n𝚆𝙴𝙻𝙻𝙲𝙾𝙼𝙴  {multiple} 𝚃𝙾 𝚃𝙷𝙴 𝙲𝙷𝙰𝚃 𝙱𝙾𝚇: {boxName}\n𝙷𝙰𝚅𝙴 𝙰 𝙽𝙸𝙲𝙴  {session}🐼♲︎︎︎`
		}
	},

	onStart: async ({ threadsData, message, event, api, getLang }) => {
		if (event.logMessageType == "log:subscribe")
			return async function () {
				const hours = getTime("HH");
				const { threadID } = event;
				const { nickNameBot } = global.GoatBot.config;
				const prefix = global.utils.getPrefix(threadID);
				const dataAddedParticipants = event.logMessageData.addedParticipants;
				// if new member is bot
				if (dataAddedParticipants.some((item) => item.userFbId == api.getCurrentUserID())) {
					if (nickNameBot)
						api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
					return message.send(getLang("welcomeMessage", prefix));
				}
				// if new member:
				if (!global.temp.welcomeEvent[threadID])
					global.temp.welcomeEvent[threadID] = {
						joinTimeout: null,
						dataAddedParticipants: []
					};

				// push new member to array
				global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...dataAddedParticipants);
				// if timeout is set, clear it
				clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);

				// set new timeout
				global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async function () {
					const threadData = await threadsData.get(threadID);
					if (threadData.settings.sendWelcomeMessage == false)
						return;
					const dataAddedParticipants = global.temp.welcomeEvent[threadID].dataAddedParticipants;
					const dataBanned = threadData.data.banned_ban || [];
					const threadName = threadData.threadName;
					const userName = [],
						mentions = [];
					let multiple = false;

					if (dataAddedParticipants.length > 1)
						multiple = true;

					for (const user of dataAddedParticipants) {
						if (dataBanned.some((item) => item.id == user.userFbId))
							continue;
						userName.push(user.fullName);
						mentions.push({
							tag: user.fullName,
							id: user.userFbId
						});
					}
					// {userName}:   name of new member
					// {multiple}:
					// {boxName}:    name of group
					// {threadName}: name of group
					// {session}:    session of day
					if (userName.length == 0) return;
					let { welcomeMessage = getLang("defaultWelcomeMessage") } =
						threadData.data;
					const form = {
						mentions: welcomeMessage.match(/\{userNameTag\}/g) ? mentions : null
					};
					welcomeMessage = welcomeMessage
						.replace(/\{userName\}|\{userNameTag\}/g, userName.join(", "))
						.replace(/\{boxName\}|\{threadName\}/g, threadName)
						.replace(
							/\{multiple\}/g,
							multiple ? getLang("multiple2") : getLang("multiple1")
						)
						.replace(
							/\{session\}/g,
							hours <= 10
								? getLang("session1")
								: hours <= 12
									? getLang("session2")
									: hours <= 18
										? getLang("session3")
										: getLang("session4")
						);

					form.body = welcomeMessage;

					if (threadData.data.welcomeAttachment) {
						const files = threadData.data.welcomeAttachment;
						const attachments = files.reduce((acc, file) => {
							acc.push(drive.getFile(file, "stream"));
							return acc;
						}, []);
						form.attachment = (await Promise.allSettled(attachments))
							.filter(({ status }) => status == "fulfilled")
							.map(({ value }) => value);
					}
					message.send(form);
					delete global.temp.welcomeEvent[threadID];
				}, 1500);
			};
	}
};
