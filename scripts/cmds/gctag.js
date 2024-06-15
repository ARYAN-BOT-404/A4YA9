module.exports = {
	config: {
		name: "tag",
		aliases: ["grtag"],
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Tag thành viên theo nhóm",
			en: "Tag members by group"
		},
		category: "info",
		guide: {
			vi: "   {pn} add <groupTagName> <@tags>: dùng để thêm nhóm tag mới hoặc thêm thành viên vào nhóm tag đã có"
				+ "\n   Ví dụ:"
				+ "\n    {pn} add TEAM1 @tag1 @tag2"
				+ "\n\n   {pn} del <groupTagName> <@tags>: dùng để xóa các thành viên được tag khỏi nhóm tag <groupTagName>"
				+ "\n   Ví dụ:"
				+ "\n    {pn} del TEAM1 @tag1 @tag2"
				+ "\n\n   {pn} remove <groupTagName>: dùng để xóa nhóm tag"
				+ "\n   Ví dụ:"
				+ "\n    {pn} remove TEAM1"
				+ "\n\n	 {pn} tag <groupTagName>: dùng để tag nhóm tag"
				+ "\n\n   {pn} rename <groupTagName> | <newGroupTagName>: dùng để đổi tên nhóm tag"
				+ "\n\n   {pn} [list | all]: dùng để xem danh sách các nhóm tag trong nhóm chat của bạn"
				+ "\n\n   {pn} info <groupTagName>: dùng để xem thông tin của nhóm tag",
			en: "   {pn} add <groupTagName> <@tags>: use to add new group tag or add members to group tag"
				+ "\n   Example:"
				+ "\n    {pn} add TEAM1 @tag1 @tag2"
				+ "\n\n   {pn} del <groupTagName> <@tags>: use to remove members from group tag"
				+ "\n   Example:"
				+ "\n    {pn} del TEAM1 @tag1 @tag2"
				+ "\n\n   {pn} remove <groupTagName>: use to remove group tag"
				+ "\n   Example:"
				+ "\n    {pn} remove TEAM1"
				+ "\n\n	 {pn} tag <groupTagName>: use to tag group tag"
				+ "\n\n   {pn} rename <groupTagName> | <newGroupTagName>: use to rename group tag"
				+ "\n\n   {pn} [list | all]: use to view list of group tag in your group chat"
				+ "\n\n   {pn} info <groupTagName>: use to view info of group tag"
		}
	},

	langs: {
		vi: {
			noGroupTagName: "Vui lòng nhập tên nhóm tag",
			noMention: "Bạn chưa tag thành viên nào để thêm vào nhóm tag",
			addedSuccess: "Đã thêm các thành viên sau vào nhóm tag \"%1\":\n%2",
			addedSuccess2: "Đã thêm nhóm tag \"%1\" với các thành viên sau:\n%2",
			existedInGroupTag: "Các thành viên sau:\n%1\nđã có trong nhóm tag \"%2\" từ trước",
			notExistedInGroupTag: "Các thành viên sau:\n%1\nkhông có trong nhóm tag \"%2\"",
			noExistedGroupTag: "Nhóm tag \"%1\" không tồn tại trong box chat của bạn",
			noExistedGroupTag2: "Box chat của bạn chưa thêm nhóm tag nào",
			noMentionDel: "Vui lòng tag thành viên muốn xóa khỏi nhóm tag \"%1\"",
			deletedSuccess: "Đã xóa các thành viên sau:\n%1\nkhỏi nhóm tag \"%2\"",
			deletedSuccess2: "Đã xóa nhóm tag \"%1\"",
			tagged: "Tag nhóm \"%1\":\n%2",
			noGroupTagName2: "Vui lòng nhập tên nhóm tag cũ và tên mới, cách nhau bằng dấu \"|\"",
			renamedSuccess: "Đã đổi tên nhóm tag \"%1\" thành \"%2\"",
			infoGroupTag: "📑 | Tên nhóm: %1\n👥 | Số thành viên: %2\n👨‍👩‍👧‍👦 | Danh sách thành viên:\n %3"
		},
		en: {
			noGroupTagName: "Please enter group tag name",
			noMention: "You haven't tagged any member to add to group tag",
			addedSuccess: "Added members to group tag \"%1\":\n%2",
			addedSuccess2: "Added group tag \"%1\" with members:\n%2",
			existedInGroupTag: "Members:\n%1\nalready existed in group tag \"%2\"",
			notExistedInGroupTag: "Members:\n%1\ndoesn't exist in group tag \"%2\"",
			noExistedGroupTag: "Group tag \"%1\" doesn't exist in your group chat",
			noExistedGroupTag2: "Your group chat hasn't added any group tag",
			noMentionDel: "Please tag members to remove from group tag \"%1\"",
			deletedSuccess: "Deleted members:\n%1\nfrom group tag \"%2\"",
			deletedSuccess2: "Deleted group tag \"%1\"",
			tagged: "Tag group \"%1\":\n%2",
			noGroupTagName2: "Please enter old group tag name and new group tag name, separated by \"|\"",
			renamedSuccess: "Renamed group tag \"%1\" to \"%2\"",
			infoGroupTag: "📑 | Group name: %1\n👥 | Number of members: %2\n👨‍👩‍👧‍👦 | List of members:\n %3"
		}
	},

	onStart: async function ({ message, event, args, threadsData, getLang }) {
		const { threadID, mentions } = event;
		for (const uid in mentions)
			mentions[uid] = mentions[uid].replace("@", "");
		const groupTags = await threadsData.get(threadID, "data.groupTags", []);

		switch (args[0]) {
			case "add": {
				const mentionsID = Object.keys(event.mentions);
				const content = (args.slice(1) || []).join(" ");
				const groupTagName = content.slice(0, content.indexOf(event.mentions[mentionsID[0]]) - 1).trim();
				if (!groupTagName)
					return message.reply(getLang("noGroupTagName"));
				if (mentionsID.length === 0)
					return message.reply(getLang("noMention"));

				const oldGroupTag = groupTags.find(tag => tag.name.toLowerCase() === groupTagName.toLowerCase());
				if (oldGroupTag) {
					const usersIDExist = [];
					const usersIDNotExist = [];
					for (const uid in mentions) {
						if (oldGroupTag.users.hasOwnProperty(uid)) {
							usersIDExist.push(uid);
						}
						else {
							oldGroupTag.users[uid] = mentions[uid];
							usersIDNotExist.push(uid);
						}
					}
					await
