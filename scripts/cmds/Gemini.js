const axios = require("axios");

module.exports = {
	config: {
		name: "gemini",
		version: "1.0",
		author: "Dipto",
		description:"gemeini ai",
		countDown: 5,
		role: 0,
		category: "google",
		guide: {
			en: "{pn} message | photo reply"
		}
	},
	onStart:async ({ api, args , event}) => {
  const prompt = args.join(' ');
  const apis =
["AIzaSyB0dAHTjS-1J7gG1om1GszmiHN8z2rlP20",
"AIzaSyAY9gYYYLVKEo5CdzLGE-qMwLc9sFiNYAI",
"AIzaSyDho4C6AH4hTVkmxSrrLYiH1XduArD42Ko",
"AIzaSyBgqgnSY2wizm3CJPe52kz_HFFfdFoMyuw",
"AIzaSyCpxY-PLdWnPlchnRalQgFwmxJ9G4blaFg",
"AIzaSyA1dXP05uWo6IOM8rays8pvVAXImWIjxgM"]
//,"AIzaSyDDUItpo6erFPebw_JBu9kMw8H4gNQk31A"];
  const apiKey = apis[Math.floor(Math.random() * apis.length)]
//---- Image Reply -----//
   if (event.type === "message_reply") {
      var t = event.messageReply.attachments[0].url;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${apiKey}`;
    try {
      const response = await axios.get(t, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data, "binary");
    const requestBody = {
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inline_data: {
                mime_type: 'image/jpeg',
                data: buffer.toString("base64"),
              }
            }
          ]
        }
      ]
    };
    const generationResponse = await axios.post(apiUrl, requestBody, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const gText = generationResponse.data.candidates[0].content;
const data2 = gText.parts[0].text;// || 'No text found in the response';
    console.log('Generated Text:', data2);
  api.sendMessage(data2, event.threadID, event.messageID);
  } catch (error) {
    console.error('Error:', error.message);
    api.sendMessage(error, event.threadID, event.messageID);
  }
  }
  //---------- Message Reply ---------//
else if(!prompt) {
   return api.sendMessage('Please provide a prompt or message reply', event.threadID, event.messageID);}
    else {
  try {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
    const prompt1 = prompt+' Give answer in Bangla';
  const data = {
    'contents': [
      {
        'parts': [
          {
            'text': prompt1
          }
        ]
      }
    ]
  };
  const headers = {
    'Content-Type': 'application/json'
  };
    const response = await axios.post(apiUrl , data, { headers });
    const data1 = response.data.candidates[0].content;
    const message = data1.parts[0].text;
  console.log(prompt1);
    api.sendMessage(message, event.threadID,event.messageID);
    } catch (error) {
      console.error('Error calling Gemini AI:', error);
      api.sendMessage(`Sorry, there was an error processing your request.${error}`, event.threadID, event.messageID);
  }
 }
}
};
