const fs = require("fs-extra");
const axios = require("axios");
const cheerio = require("cheerio");
const qs = require("qs");
const { getStreamFromURL, randomString } = global.utils;

function loadAutoLinkStates() {
  try {
    const data = fs.readFileSync("autolink.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}


function saveAutoLinkStates(states) {
  fs.writeFileSync("autolink.json", JSON.stringify(states, null, 2));
}


let autoLinkStates = loadAutoLinkStates();


async function shortenURL(url) {
  try {
    const response = await axios.get(`https://shortner-sepia.vercel.app/kshitiz?url=${encodeURIComponent(url)}`);
    return response.data.shortened;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to shorten URL");
  }
}

module.exports = {
  threadStates: {},
  config: {
    name: 'autolink',
    version: '5.0',
    author: 'Vex_Kshitiz',
    countDown: 5,
    role: 0,
    shortDescription: 'Auto video downloader for Instagram, Facebook, TikTok, Twitter, Pinterest, and YouTube',
    longDescription: '',
    category: 'media',
    guide: {
      en: '{p}{n}',
    }
  },
  onStart: async function ({ api, event }) {
    const threadID = event.threadID;

    if (!autoLinkStates[threadID]) {
      autoLinkStates[threadID] = 'on'; 
      saveAutoLinkStates(autoLinkStates);
    }

    if (!this.threadStates[threadID]) {
      this.threadStates[threadID] = {};
    }

    if (event.body.toLowerCase().includes('autolink off')) {
      autoLinkStates[threadID] = 'off';
      saveAutoLinkStates(autoLinkStates);
      api.sendMessage("AutoLink is now turned off for this chat.", event.threadID, event.messageID);
    } else if (event.body.toLowerCase().includes('autolink on')) {
      autoLinkStates[threadID] = 'on';
      saveAutoLinkStates(autoLinkStates);
      api.sendMessage("AutoLink is now turned on for this chat.", event.threadID, event.messageID);
    }
  },
  onChat: async function ({ api, event }) {
    const threadID = event.threadID;

    if (this.checkLink(event.body)) {
      const { url } = this.checkLink(event.body);
      console.log(`Attempting to download from URL: ${url}`);
      if (autoLinkStates[threadID] === 'on' || !autoLinkStates[threadID]) {
        this.downLoad(url, api, event);
      } else {
        api.sendMessage("", event.threadID, event.messageID);
      }
      api.setMessageReaction("🕐", event.messageID, (err) => {}, true);
    }
  },
  downLoad: function (url, api, event) {
    const time = Date.now();
    const path = __dirname + `/cache/${time}.mp4`;

    if (url.includes("instagram")) {
      this.downloadInstagram(url, api, event, path);
    } else if (url.includes("facebook") || url.includes("fb.watch")) {
      this.downloadFacebook(url, api, event, path);
    } else if (url.includes("tiktok")) {
      this.downloadTikTok(url, api, event, path);
    } else if (url.includes("x.com")) {
      this.downloadTwitter(url, api, event, path);
    } else if (url.includes("pin.it")) {
      this.downloadPinterest(url, api, event, path);
    } else if (url.includes("youtu.be")||url.includes("youtube")) {
