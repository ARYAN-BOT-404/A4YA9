const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "\n♕︎════════♔︎═════════♕︎\n𝙷𝙴𝙻𝙿 𝙻𝙸𝚂𝚃 𝙱𝚈 𝙰-6𝚈𓇽"; // changing this wont change the goatbot V2 of list cmd it is just a decoyy

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "A6y", 
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += ``; // replace with your name 

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += `\n✈︎⌨︎\n  ${category.toUpperCase()}
\n𖨆ꕥ\n`;


          const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 2).map((item) => `⭔${item}`);
            msg += `\n│${cmds.join(" ".repeat(Math.max(1, 5 - cmds.join("").length)))}`;
          }

          msg += `\n╰──────────────➣`;
        }
      });

      const totalCommands = commands.size;
      msg += `\n\n╭──────────────➣\n\n𝙸 𝙷𝙰𝚅𝙴  ${totalCommands} 𝙲𝙼𝙳𝚂\n𝚃𝚈𝙿𝙴 ☞︎︎︎${prefix}𝙷𝙴𝙻𝙿 𝚃𝙾 𝚅𝙸𝙴𝚆 𝙰-6𝚈 𝙰𝙻𝙻 𝙲𝙼𝙳\n𝙰𝙽𝙳 𝙻𝙴𝙰𝚁𝙽 𝙷𝙾𝚆 𝚃𝙾 𝚄𝚂𝙴 𝙰-6𝚈 𝙲𝙼𝙳\n➪☁︎╰──────────────➣`;
      msg += ``;
      msg += `\n╭──────────────➣\n𝙰-6𝚈 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙾𝚃 𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳 ❄︎\n
╰──────────────➣`; 

      const imageUrl = "https://i.imgur.com/YQ3crgK.jpeg"; 

      await message.reply({
        body: msg,
        attachment: await axios({
          url: imageUrl,
          method: "GET",
          responseType: "stream",
        }).then((response) => response.data),
      });
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `♕︎════════♔︎═════════♕︎
 ♕︎═══════𝙽𝙰𝙼𝙴════════♕︎

☕︎${configCommand.name}

  ☞︎︎︎𝙰-6𝚈 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 ☞︎︎︎${longDescription}
  ☞︎︎︎ 𝙾𝚃𝙷𝙴𝚁 𝙽𝙰𝙼𝙴 ☞︎︎︎${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"}

  ☞︎︎︎𝙰𝚄𝚃𝙷𝙾𝚁 ☞︎︎︎${author}
  ☞︎︎︎𝚅𝙴𝚁𝚂𝙸𝙾𝙽 ☞︎︎︎${configCommand.version || "1.0"}
  ☞︎︎︎𝚁𝙾𝙻𝙴 ☞︎︎︎ ${roleText}
  ☞︎︎︎𝚄𝚂𝙰𝙶𝙴 ☞︎︎︎ ${usage}
♕︎════════♔︎═════════♕︎`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
}

/*const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "🇧🇩|𝚁𝙾𝙼𝙸𝙼 𝙰-6𝚈|♕︎|𝙼𝙾𝙳𝙸𝙵𝚈 𝙱𝚈 𝚁𝙾𝙼𝙸𝙼"; 

const photoUrl = "https://i.imgur.com/YQ3crgK.jpeg";
const photoPath = path.resolve(__dirname, "photo.jpeg");

module.exports = {
    config: {
        name: "help",
        version: "1.17",
        author: "𝚁𝙾𝙼𝙸𝙼",
        countDown: 5,
        role: 0,
        shortDescription: {
            en: "View command usage"
        },
        longDescription: {
            en: "View command usage"
        },
        category: "info",
        guide: {
            en: "{pn} [empty | <page number> | <command name>]"
                + "\n   {pn} <command name> [-u | usage | -g | guide]: only show command usage"
                + "\n   {pn} <command name> [-i | info]: only show command info"
                + "\n   {pn} <command name> [-r | role]: only show command role"
                + "\n   {pn} <command name> [-a | alias]: only show command alias"
        },
        priority: 1
    },

    langs: {
        vi: {
            help: "╭─────────────♕︎\n『%1』\n├─────𖣘\n│ Trang [ %2/%3 ]\n│ Hiện tại bot có %4 lệnh có thể sử dụng\n│ » Gõ %5help <số trang> để xem danh sách các lệnh\n│ » Gõ %5help để xem chi tiết cách sử dụng lệnh đó\n├────────✵\n│ %6\n╰─────────────♕︎",
            help2: "%1├───────✵\n│ » Hiện tại bot có %2 lệnh có thể sử dụng\n│ » Gõ %3help <tên lệnh> để xem chi tiết cách sử dụng lệnh đó\n│ %4\n╰─────────────♕︎",
            commandNotFound: "Lệnh \"%1\" không tồn tại",
            getInfoCommand: "╭── 𝙽𝙰𝙼𝙴 ────♕︎\n│ %1\n├── 𝙸𝙽𝙵𝙾\n│ Mô tả: %2\n│ Các tên gọi khác: %3\n│ Các tên gọi khác trong nhóm bạn: %4\n│𝚅𝙴𝚁𝚂𝙸𝙾𝙽: %5\n│ Role: %6\n│ Thời gian mỗi lần dùng lệnh: %7s\n│ 𝙰𝚄𝚃𝙷𝙾𝚁: %8\n├── 𝚄𝚂𝙰𝙶𝙴\n│%9\n├── 𝙽𝙾𝚃𝙴𝚂\n│ Nội dung bên trong <XXXXX> là có thể thay đổi\n│ Nội dung bên trong [a|b|c] là a hoặc b hoặc c\n╰──────✵",
            onlyInfo: "╭── 𝙸𝙽𝙵𝙾 ────♕︎\n│ Tên lệnh: %1\n│ Mô tả: %2\n│ Các tên gọi khác: %3\n│ Các tên gọi khác trong nhóm bạn: %4\n│ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽: %5\n│ Role: %6\n│ Thời gian mỗi lần dùng lệnh: %7s\n│ 𝙰𝚄𝚃𝙷𝙾𝚁: %8\n╰─────────────♕︎",
            onlyUsage: "╭── 𝚄𝚂𝙰𝙶𝙴 ────♕︎\n│%1\n╰─────────────♕︎",
            onlyAlias: "╭── 𝙰𝙻𝙸𝙰𝚂 ────♕︎\n│ Các tên gọi khác: %1\n│ Các tên gọi khác trong nhóm bạn: %2\n╰─────────────♕︎",
            onlyRole: "╭── 𝚁𝙾𝙻𝙴 ────♕︎\n│%1\n╰─────────────☢︎︎",
            doNotHave: "Không có",
            roleText0: "0 (Tất cả người dùng)",
            roleText1: "1 (Quản trị viên nhóm)",
            roleText2: "2 (Admin bot)",
            roleText0setRole: "0 (set role, tất cả người dùng)",
            roleText1setRole: "1 (set role, quản trị viên nhóm)",
            pageNotFound: "Trang %1 không tồn tại"
        },
        en: {
            help: "☞︎︎︎𝙰-6𝚈 𝙲𝙼𝙳 𝙻𝙸𝚂𝚃 ♕︎⚤︎\n\n%1\n✈︎⊶⊷⊶⊷♧︎︎︎\n 𝙿𝙰𝙶𝙴 [ %2/%3 ]\n☞︎︎︎𖤍 𝙸 𝙷𝙰𝚅𝙴 𝙰𝙲𝚃𝚄𝙰𝙻𝙻𝚈 𝙸「 %4 」𝙲𝙼𝙳𝚂 \n☞︎︎︎𖤍 𝚃𝚈𝙿𝙴: %5𝙷𝙴𝙻𝙿 <𝙿𝙰𝙶𝙴>  𝚃𝙾 𝚃𝙷𝙴 𝚅𝙸𝙴𝚆 𝙻𝙸𝚂𝚃 𝙾𝙵 𝙰-6𝚈 𝙲𝙼𝙳𝚂\n☞︎︎𖤍 » 𝚃𝚈𝙿𝙴: %5 𝙷𝙴𝙻𝙿 𝚃𝙾 𝚃𝙷𝙴 𝙳𝙴𝚃𝙰𝙸𝙻𝚂 𝙾𝙵 𝙷𝙾𝚆 𝚃𝙾 𝚄𝚂𝙴 𝙰-6𝚈 \n๑☁︎☕︎☘︎♧︎︎︎⌨︎➪\n│ %6\n☃︎⊶⊷𓇽⊶⊷🂱",
            help2: "%1☘︎⊶⊷⊶⊷♲︎︎︎⊶⊷⊶⊷✈︎\n》✿︎𝚃𝙷𝙴 𝙱𝙾𝚃 𝙷𝙰𝚂 〚%2〛 𝙲𝙼𝙳𝚂 𝚃𝙷𝙰𝚃 𝚈𝙾𝚄 𝙲𝙰𝙽 𝚄𝚂𝙴 ♔︎\n☞︎︎︎☮︎⊰⊹ 𝚃𝚈𝙿𝙴: %3𝙷𝙴𝙻𝙿 ⊹ 𝚃𝙾 𝚅𝙸𝙴𝚆 𝙳𝙴𝚃𝙰𝙸𝙻𝚂 𝙾𝙵 𝙷𝙾𝚆 𝚃𝙾 𝚄𝚂𝙴 𝙰-6𝚈 𝙲𝙼𝙳𝚂 \n➪𝙽𝙾𝚃𝙴: ⊰⊹\n│ %4\n☘︎⊶⊷✿⊶⊷𓇽𓇽",
            commandNotFound: "Command \"%1\" does not exist",
            getInfoCommand: "⚕︎ ━─┄𝗡𝗔𝗠𝗘┄✧︎✿\n✈︎✵︎ %1\n✵︎✿ ━┄𝙸𝙽𝙵𝙾━✧︎✿\n☁︎︎︎✵︎ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽: %2\n✵︎✿ 𝙾𝚃𝙷𝙴𝚁 𝙽𝙰𝙼𝙴𝚂: %3\n✵︎✿ 𝙰𝙻𝙸𝙰𝚂: %4\n✵︎✿ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽: %5\n✵︎✿ 𝚁𝙾𝙻𝙴: %6\n✵︎✿ 𝚃𝙸𝙼𝙴 𝙴𝙰𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳: %7s\n✵︎✿ 𝙰𝚄𝚃𝙷𝙾𝚁: %8\n✵︎✿ 𝚄𝚂𝙰𝙶𝙴:\n✈︎✵︎ %9\n✵︎✿ ━┄𝙽𝙾𝚃𝙴𝚂━✧︎✿\n✈︎✵︎ 𝚃𝙷𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝚃 𝙸𝙽𝚂𝙸𝙳𝙴<XXXXX> are 𝙲𝙷𝙰𝙽𝙶𝙴𝙰𝙱𝙻𝙴\n✈︎✵︎ 𝚃𝙷𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝚃 𝙸𝙽𝚂𝙸𝙳𝙴T [a|b|c] 𝙼𝙴𝙰𝙽 𝙰 𝙾𝚁 𝙱 𝙾𝚁 𝙲 \n✵︎✿✧︎✵︎✿✧︎✵︎✿✧︎✵︎✿",
            onlyInfo: "⚕︎ ━─┄𝙸𝙽𝙵𝙾━✧︎✿\n✈︎✵︎ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙽𝙰𝙼𝙴: %1\n✵︎✿ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽: %2\n✵︎✿ 𝙾𝚃𝙷𝙴𝚁 𝙽𝙰𝙼𝙴𝚂: %3\n✵︎✿ 𝙰𝙻𝙸𝙰𝚂: %4\n✵︎✿𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : %5\n✵︎✿ 𝚁𝙾𝙻𝙴: %6\n✵︎✿ 𝚃𝙸𝙼𝙴 𝙴𝙰𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳: %7s\n✵︎✿ 𝙰𝚄𝚃𝙷𝙾𝚁: %8\n✵︎✿✧︎✵︎✿✧︎✵︎✿✧︎✵︎✿",
            onlyUsage: "⚕︎ ━─┄𝚄𝚂𝙰𝙶𝙴━✧︎✿\n✈︎✵︎ %1\n✵︎✿✧︎✵︎✿✧︎✵︎✿✧︎✵︎✿",
            onlyAlias: "⚕︎ ━─┄𝙰𝙻𝙸𝙰𝚂━✧︎✿\n✈︎✵︎ Other names: %1\n✵︎✿ Alias: %2\n✵︎✿✧︎✵︎✿✧︎✵︎✿✧︎✵︎✿",
            onlyRole: "⚕︎ ━─┄𝚁𝙾𝙻𝙴━✧︎✿\n✈︎✵︎ %1\n✵︎✿✧︎✵︎✿✧︎✵︎✿✧︎✵︎✿",
            doNotHave: "Don't have",
            roleText0: "0 (All users)",
            roleText1: "1 (Group administrators)",
            roleText2: "2 (Bot admin)",
            roleText0setRole: "0 (set role, all users)",
            roleText1setRole: "1 (set role, group administrators)",
            pageNotFound: "Page %1 does not exist"
        }
    },

    onStart: async function ({ args, message, event, threadsData, getLang, prefix }) {
        if (!await fs.pathExists(photoPath)) {
            const response = await axios.get(photoUrl, { responseType: 'arraybuffer' });
            await fs.writeFile(photoPath, Buffer.from(response.data, 'binary'), 'binary');
        }

        const attachment = fs.createReadStream(photoPath);

        const { threadID } = event;
        const command = (args[0] || "").toLowerCase();
        const threadData = await threadsData.get(threadID);
        const listAdmin = global.GoatBot.config.adminBot;
        const listCmd = [...commands.values()];
        const listPrefix = listCmd.map\n(cmd => cmd.config.name)\n.join(", ");
        const lang = threadData.language;

        const helpText = getLang("help", \nlistPrefix,\n 1, \n1, listCmd.length,\n prefix, doNotDelete);

        message.reply({
            body: helpText,
            attachment
        });
    }
};*/
