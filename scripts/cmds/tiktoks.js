const axios = require('axios');
const fs = require('fs');
const path = require('path');
const os = require('os');

async function getStreamFromURL(url) {
  const response = await axios.get(url, { responseType: 'stream' });
  return response.data;
}

module.exports = {
  config: {
    name: "tiktok",
    aliases: [],
    author: "kshitiz",
    version: "1.0",
    shortDescription: {
      en: "Play TikTok video by number",
    },
    longDescription: {
      en: "Play a TikTok video by providing the video number.",
    },
    category: "Entertainment",
    guide: {
      en: "{p}{n} [keyword]",
    },
  },
  onStart: async function ({ api, event, args }) {
    const keyword = args.join(' ');

    if (!keyword) {
      api.sendMessage({ body: 'Please provide a keyword.\nExample: {p}tiktok dance' }, event.threadID);
      return;
    }

    
    const videos = await fetchTikTokVideos(keyword);

    if (!videos || videos.length === 0) {
      api.sendMessage({ body: `No TikTok videos found for the keyword: ${keyword}.` }, event.threadID, event.messageID);
      return;
    }

    const videoTitles = videos.map((video, index) => `${index + 1}. ${video.title}`);
    const message = `Choose a video by replying with its number:\n\n${videoTitles.join('\n')}`;
