const fs = require("fs-extra");

module.exports = {
  config: {
    name: "re",
    version: "1.1",
    author: "NTKhang",
    countDown: 5,
    role: 2,
    description: {
      vi: "Khởi động lại bot",
      en: "Restart bot"
    },
    category: "Owner",
    guide: {
      vi: "   {pn}: Khởi động lại bot",
      en: "   {pn}: Restart bot"
    }
  },

  langs: {
    vi: {
      restartting: "🔄 | Đang khởi động lại bot..."
    },
    en: {
      restartting: "\n\n⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷.\n⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇\n⠀⢤⣀⣀⣀⠀⠀⢸⣷⡄⠀⣁⣀⣤⣴⣿⣿⣿⣆\n⠹⠏⠀⠀⠀⣿⣧⠀⠹⣿⣿⣿⣿⣿⡿⣿\n⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿\n⡟\n⠦⠴⢿⢿⣿⡿⠷⠀⣿\n⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃\n⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿/n⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⠙⠻⢿⣿⣿⣿⣿⠟⠁\n\n𝙾𝙺 𝙱𝙾𝚂𝚂"
    }
  },

  onLoad: function ({ api }) {
    const pathFile = `${__dirname}/tmp/restart.txt`;
    if (fs.existsSync(pathFile)) {
      const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
      api.sendMessage(`✅ | Bot restarted\n⏰ | Time: ${(Date.now() - time) / 1000}s`, tid);
      fs.unlinkSync(pathFile);
    }
  },

  onStart: async function ({ message, event, getLang }) {
    const pathFile = `${__dirname}/tmp/restart.txt`;
    fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
    await message.reply(getLang("restartting"));
    process.exit(2);
  }
};
