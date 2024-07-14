const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "\n♕︎════════♔︎═════════♕︎\n𝙷𝙴𝙻𝙿 𝙻𝙸𝚂𝚃 𝙱𝚈 𝙰-6𝚈𓇽"; // changing this wont change the goatbot V2 of list cmd it is just a decoyy

module.exports = {
  config: {
    name: "help",
    version: "00000000000000000000/",
    author: "A6y", 
    role: 0,
    category: "info",
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += ``; //A6Y you change author then i fuck you

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += ``;


          const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 2).map((item) => `${item}`);
            msg += `\n│${cmds.join(" ".repeat(Math.max(1, 5 - cmds.join("").length)))}`;
          }

          msg += `\n╰──────────────➣`;
        }
      });

      const totalCommands = commands.size;
      msg += `\n\n╭────────────➣\n\n𝙸 𝙷𝙰𝚅𝙴  ${totalCommands} 𝙲𝙼𝙳𝚂\n𝚃𝚈𝙿𝙴 ☞︎︎︎${prefix} 𝙷𝙴𝙻𝙿 𝚃𝙾 𝚅𝙸𝙴𝚆 𝙰-6𝚈 𝙰𝙻𝙻 𝙲𝙼𝙳\n𝙰𝙽𝙳 𝙻𝙴𝙰𝚁𝙽 𝙷𝙾𝚆 𝚃𝙾 𝚄𝚂𝙴 𝙰-6𝚈 𝙲𝙼𝙳\n➪☁︎╰──────────────➣`;
      msg += ``;
      msg += `\n╭──────────────➣\n𝙰-6𝚈 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 ☞︎︎︎𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳 ❄︎\n
╰──────────────➣`; 

      const imageUrl = "https://i.imgur.com/x5S4mb4.mp4"; 
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
