const axios = require("axios");

const APIKEY = "x-store-evfeh65-u6tgv-vttu-x";
const serverURL = "https://segxxxxx.onrender.com";
module.exports = {
  config: {
    name: "store",
    role: 2,
    shortDescription: {
      en: "View and manage items in GoatMart"
    },
    author: "ArYAN",
  },
  onStart: async ({ api, event, args }) => {
    try {
      if (!args[0]) {
        api.sendMessage(
          `📚 Store Command Help 📚\nUsage: ${event.body} [page | show | search | upload | delete]\nExamples:\n${event.body} page 1\n${event.body} show 123\n${event.body} search keyword\n${event.body} upload {"itemName": "Item Name", "description": "Item Description"}\n${event.body} delete 123`,
          event.threadID,
          event.messageID
        );
      } else if (args[0] === "page") {
        await handlePageCommand(api, event, args);
      } else if (args[0] === "show") {
        await handleShowCommand(api, event, args);
      } else if (args[0] === "search") {
        await handleSearchCommand(api, event, args);
      } else if (args[0] === "upload") {
        await handleUploadCommand(api, event, args);
      } else if (args[0] === "delete") {
        await handleDeleteCommand(api, event, args);
      }
    } catch (error) {
      console.error("Error:", error);
      api.sendMessage(
        `Request failed with status code: ${
          error.response.status
        }\n\n You are not authorized to access this command. Error 403: Access denied.`,
        event.threadID,
        event.messageID
      );
    }
  },
};

async function handlePageCommand(api, event, args) {
  const pageNumber = parseInt(args[1]);
  const response = await axios.get(`${serverURL}/api/items`, {
    headers: { "x-api-key": APIKEY },
  });
  const items = response.data;
  const totalPages = Math.ceil(items.length / 10);
  const offset = (pageNumber - 1) * 10;

  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    api.sendMessage(
      `📚 Store Command - Page Error 📚\nInvalid page number. Please provide a valid page number.`,
      event.threadID,
      event.messageID
    );
  } else {
    const pageItems = items.slice(offset, offset + 10);

    const itemDescriptions = pageItems.map(
      (item) =>
        `👑 Item Name: ${item.itemName}\n🆔 Item ID: ${item.itemID}\n⚙ Type: ${
          item.type || "Unknown"
        }\n📝 Description: ${item.description}\n💻 Author: ${item.authorName}\n📅 Time: ${new Date(
          item.timestamp
        ).toLocaleString()}\n\n━━━━━━━━━━━━━━━\n`
    );

    const itemInfo = itemDescriptions.join("\n");

    api.sendMessage(
      `📚 Store Command - Page Results 📚\nItems available in GoatMart\n\n${itemInfo}📝 Usage:\n ${event.body.split(" ")[0]} [ show | code | delete ] <item id> to view pastebin link, code, or delete item.\n\n👑 Pages: [ ${pageNumber} / ${totalPages} ]`,
      event.threadID,
      event.messageID
    );
  }
}

async function handleShowCommand(api, event, args) {
  const itemID = isNaN(args[1]) ? args[1] : parseInt(args[1]);
  const response = await axios.get(`${serverURL}/api/items/${itemID}`, {
    headers: { "x-api-key": APIKEY },
  });
  const item = response.data;

  if (item && itemID) {
    api.sendMessage(
      `📚 Store Command - Show Item 📚\n👑 Item Name: ${item.itemName}\n🆔 Item ID: ${item.itemID}\n📝 Description: ${item.description}\n📁 Pastebin Link: ${item.pastebinLink}`,
      event.threadID,
      event.messageID
    );
  } else {
    api.sendMessage(
      `📚 Store Command - Show Error 📚\nItem not found in GoatMart. Please check your input or try again.`,
      event.threadID,
      event.messageID
    );
  }
}

async function handleSearchCommand(api, event, args) {
  const searchTerm = args.slice(1).join(" ").toLowerCase();
  const response = await axios.get(`${serverURL}/api/items`, {
    headers: { "x-api-key": APIKEY },
  });
  const items = response.data;
  const matchingItems = items.filter(
    (item) =>
      item.itemName.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
  );

  if (matchingItems.length > 0) {
    const itemDescriptions = matchingItems.map(
      (item) =>
        `\n👑 Item Name: ${item.itemName}\n🆔 Item ID: ${item.itemID}\n⚙ Type: ${
          item.type || "Unknown"
        }\n📝 Description: ${item.description}\n💻 Author: ${item.authorName}\n📅 Time: ${new Date(
          item.timestamp
        ).toLocaleString()}\n━━━━━━━━━━━━━━━\n`
    );
    const itemInfo = itemDescriptions.join("\n");

    api.sendMessage(
      `📚 Store Command - Search Results 📚\nSearch results for ${searchTerm}\n\n${itemInfo}`,
      event.threadID,
      event.messageID
    );
  } else {
    api.sendMessage(
      `📚 Store Command - Search Error 📚\nNo matching items found in GoatMart.`,
      event.threadID,
      event.messageID
    );
  }
}

async function handleUploadCommand(api, event, args) {
  const itemDetails = JSON.parse(args.slice(1).join(" "));
  const response = await axios.post(`${serverURL}/api/items`, itemDetails, {
    headers: { "x-api-key": APIKEY },
  });
  api.sendMessage(
    `📚 Store Command - Upload Item 📚\n👑 Item Name: ${response.data.itemName}\n🆔 Item ID: ${response.data.itemID}\n⚙ Type: ${
      response.data.type || "Unknown"
    }`,
    event.threadID,
    event.messageID
  );
}

async function handleDeleteCommand(api, event, args) {
  const itemID = isNaN(args[1]) ? args[1] : parseInt(args[1]);
  const response = await axios.delete(`${serverURL}/api/items/${itemID}`, {
    headers: { "x-api-key": APIKEY },
  });

  if (response.status === 204) {
    api.sendMessage(
      `📚 Store Command - Delete Item 📚\nItem with ID ${itemID} deleted successfully.`,
      event.threadID,
      event.messageID
    );
  } else {
    api.sendMessage(
      `📚 Store Command - Delete Error 📚\nFailed to delete item with ID ${itemID}. Please try again.`,
      event.threadID,
      event.messageID
    );
  }
}
