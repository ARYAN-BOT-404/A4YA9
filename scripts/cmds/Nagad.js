const axios = require('axios');

module.exports = {
    config: {
        name: "nagad",
        aliases: ["nagad-info"],
        version: "1.0",
        author: "RUBISH",
        description: {
           vi: "Lấy thông tin tài khoản Nagad dựa trên số điện thoại.",
           en: "Get Nagad account half-information based on the phone number."
        },
        category: "Tools",
        guide: {
           vi: "{pn} <số điện thoại>",
           en: "{pn} <phone number>"
        }
    },

    onStart: async function ({ api, args, event }) {

        if (args.length === 0) {
     await api.sendMessage("Please enter a Nagad number.", event.threadID);
return;
        }

        const phoneNumber = args[0];

        try {
const response = await axios.get(`https://rubish-apihub.onrender.com/rubish/ngd-half?number=${phoneNumber}&apikey=rubish69`);
const data = response.data.data;
if (typeof data === 'string' && data.includes("PLEASE ENTER A VALID NAGAD NUMBER")) {
    await api.sendMessage("Please enter a valid Nagad number.", event.threadID);
    return;
}

const formattedResponse = `
╞        𝗡𝗔𝗚𝗔𝗗 𝗜𝗡𝗙𝗢       ╡
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

📞 Phone: ${data.number}

👤 Name: ${data.name}

🔢 User ID: ${data.userId}

🔋 Status: ${data.status}

🔒 Verification Status: ${data.verificationStatus}

🔑 User Type: ${data.userType}

🛡 RB Base: ${data.rbBase}

🔐 Authentication Token Info: ${data.authTokenInfo}

🔄 Execution Status: ${data.executionStatus}
`;



await api.sendMessage(formattedResponse, event.threadID);
        } catch (error) {
console.error('Error fetching Nagad account data:', error);
if (error.response && error.response.data && typeof error.response.data === 'string' && error.response.data.includes("PLEASE ENTER A VALID NAGAD NUMBER")) {
    await api.sendMessage("Please enter a valid Nagad number.", event.threadID);
} else {
    console.error("An error occurred while processing the request:", error);

    api.sendMessage("An error occurred while processing the request.", event.threadID);
}
        }
    }
};
