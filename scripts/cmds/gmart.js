const axios = require("axios");
const APIKEY = "x-store-evfeh65-u6tgv-vttu-x";
const serverURL = "https://goatmart-apis.onrender.com";

module.exports = {
  config: {
    name: "gmart",
    aliases: ["gm"],
    role: 2,
    shortDescription: {
      en: "View items available in the GoatMart Store"
    },
    category: "store",
    author: "GoatMart Team",
  },
  onStart: async ({ api, event, args, message }) => {
    try {
      if (!args[0]) {
        api.sendMessage(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n➜ ${event.body} page <𝗽𝗮𝗴𝗲 𝗻𝘂𝗺𝗯𝗲𝗿>\n➜ ${event.body} show <𝗜𝘁𝗲𝗺 𝗜𝗗>\n➜ ${event.body} upload < 𝗦𝘁𝗼𝗿𝗲 𝗙𝗼𝗿𝗺𝗮𝘁>\n➜ ${event.body} code <𝗜𝘁𝗲𝗺 𝗜𝗗>\n➜ ${event.body} edit <𝗜𝘁𝗲𝗺 𝗜𝗗>\n\n📒 𝗡𝗼𝘁𝗲: if you don't know how to use upload, edit features can you ask form Aryan, if he is busy you can also ask from from GoatMart Team Mambers\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.`, event.threadID, event.messageID);
      } else if (args[0] === "code") {
        const itemID = isNaN(args[1]) ? args[1] : parseInt(args[1]);
        const response = await axios.get(`${serverURL}/api/items/${itemID}&apikey=${APIKEY}`);
        const codeX = await axios.get(response.data.pastebinLink);
        const codeExtracted = codeX.data;

        if (codeExtracted) {
          message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${response.data.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${response.data.itemID}\n⚙ 𝗜𝘁𝗲𝗺 𝗧𝘆𝗽𝗲: ${response.data.type || 'Unknown' }\n💻 𝗔𝘂𝘁𝗵𝗼𝗿: ${response.data.authorName}\n📅 𝗔𝗱𝗱𝗲𝗱 𝗼𝗻: ${new Date(response.data.timestamp).toLocaleString()}\n✅ 𝗜𝘁𝗲𝗺 𝗖𝗼𝗱𝗲\n━━━━━━━━━━━━\n${codeExtracted }`);
        } else {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\nThe item you are trying to access is currently not available in our Store you can also ask to make your request from Aryan or other staff members to make your request.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        }
      } else if (response.status === 404) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n❌ This service is currently not available in 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁. Please check your input or try again.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        } else if (response.status === 401) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\nInvalid or wrong API key. Please check your API key or contact the administrator.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        } else if (args[0] === "page") {
        const pageNumber = parseInt(args[1]);
        const response = await axios.get(`${serverURL}/api/items?apikey=${APIKEY}`);
        const items = response.data;

        if (response.status === 200) {
          const totalPages = Math.ceil(items.length / 6);
          const offset = (pageNumber - 1) * 6;

          if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
            api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\nInvalid page number, you are trying to access an unknown page. Please provide valid page numbers.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
          } else {
            const pageItems = items.slice(offset, offset + 6);

            const itemDescriptions = pageItems.map(
              (item) =>
                `👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${item.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${item.itemID}\n⚙ 𝗜𝘁𝗲𝗺 𝗧𝘆𝗽𝗲: ${item.type || "Unknown"}\n📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${item.description}\n💻 𝗔𝘂𝘁𝗵𝗼𝗿: ${item.authorName}\n📅 𝗧𝗶𝗺𝗲: ${new Date(item.timestamp).toLocaleString()}\n\n━━━━━━━━━━━━\n`
            );

            const itemInfo = itemDescriptions.join("\n");

            message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n✅ Here are some items currently available in 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n\n${itemInfo}📝 𝗨𝘀𝗮𝗴𝗲𝘀:\n ${event.body.split(" ")[0]} [ show ] <item id> to view command data.\n\n👑 𝗣𝗮𝗴𝗲𝘀: [ ${pageNumber} / ${totalPages} ]`);
          }
        } else if (response.status === 404) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n❌ This service is currently not available in 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁. Please check your input or try again.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        } else if (response.status === 401) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\nInvalid or wrong API key. Please check your API key or contact the administrator.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        }
      } else if (args[0] === "show") {
        const itemID = isNaN(args[1]) ? args[1] : parseInt(args[1]);
        const response = await axios.get(`${serverURL}/api/items/${itemID}?apikey=${APIKEY}`);
        const item = response.data;

        if (item && itemID) {
          message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${item.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${item.itemID}\n📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${item.description}\n📁 𝗜𝘁𝗲𝗺 𝗟𝗶𝗻𝗸: ${item.pastebinLink}`);
        } else if (response.status === 404) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n❌ This service is currently not available in 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁. Please check your input or try again.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        } else if (response.status === 401) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\nInvalid or wrong API key. Please check your API key or contact the administrator.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        }
      } else if (args[0] === "edit") {
        const itemID = isNaN(args[1]) ? args[1] : parseInt(args[1]); 
        const newItemDetails = JSON.parse(args.slice(2).join(" "));
        const response = await axios.put(`${serverURL}/api/items/${itemID}&apikey=${APIKEY}`, newItemDetails);
        message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n✅ Item edited successfully\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${response.data.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${response.data.itemID}`);
      } else if (response.status === 404) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n❌ This service is currently not available in 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁. Please check your input or try again.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        } else if (response.status === 401) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\nInvalid or wrong API key. Please check your API key or contact the administrator.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        } else if (args[0] === "upload") {
        const itemDetails = JSON.parse(args.slice(1).join(" "));
        const response = await axios.post(`${serverURL}/api/items?apikey=${APIKEY}`, itemDetails);

        if (response.status === 201) {
          const uploadedItem = response.data;
          message.reply(`📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━\n\nItem successfully uploaded to 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁.\n\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${uploadedItem.itemName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${uploadedItem.itemID}\n⚙ 𝗜𝘁𝗲𝗺 𝗧𝘆𝗽𝗲: ${uploadedItem.type || "Unknown"}\n📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${uploadedItem.description}\n📁 𝗜𝘁𝗲𝗺 𝗟𝗶𝗻𝗸: ${uploadedItem.pastebinLink}`);
        } else if (response.status === 404) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\n❌ This service is currently not available in 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁. Please check your input or try again.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        } else if (response.status === 401) {
          api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━\n\nInvalid or wrong API key. Please check your API key or contact the administrator.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
        }
      }
    } catch (err) {
      console.error(err);
      api.sendMessage("📚 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n━━━━━━━━━━━━\n\nAn error occurred while processing the command. Please try again later.\n\n- 𝖳𝖾𝖺𝗆 𝗚𝗼𝗮𝘁𝗠𝗮𝗿𝘁\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖦𝗈𝖺𝗍𝖬𝖺𝗋𝗍 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.", event.threadID, event.messageID);
    }
  },
};
