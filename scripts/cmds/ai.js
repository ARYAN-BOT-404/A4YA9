const axios = require("axios");
const fs = require("fs");

 // Step 1: Import the 'fs' module

        const Prefixes = [
          'ai','.ai','+ai'
        ];

        let promptData = []; // Step 2: Create an empty array

        module.exports = {
          config: {
            name: 'openai',
            aliases : ['ai'],
            version: '1.0',
            author: 'Aryan Chauhan & ADD YOUR NAME HERE', //don't Change my credit if you change it i will ban your IP so don't do it.
            role: 0,
            countDown: 0,
            category: 'Orochi Ai',
            shortDescription: {
              en: 'Asks an AI for an answer.',
            },
            longDescription: {
              en: 'Asks an AI for an answer based on the user prompt.',
            },
            guide: {
              en: '{pn} [prompt]',
            },
          },
          onStart: async function () {},
          onChat: async function ({ api, event, args, message }) {
            try {

              const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));

              if (!prefix) {
                return; 
              }

              const prompt =${event.body.substring(prefix.length).trim()};

              if (prompt === '') {
                await message.reply(
                  ""
                );
                return;
              }

              // Store the prompt and user ID in the array
              promptData.push({ prompt, uid: event.senderID }); // Step 3

              const response = await axios.get(`https://chatgayfeyti.archashura.repl.co?gpt=${encodeURIComponent(prompt)}`);

              if (response.status !== 200 || !response.data) {
                throw new Error('Invalid or missing response from API');
              }

              const messageText = response.data.content.trim();

              // Prepend "🤖 𝗢𝗿𝗼𝗰𝗵𝗶: " to the response
              await message.reply(`🔬𝗢𝗣𝗘𝗡𝗔𝗜 𝗧𝗨𝗕𝗥𝗢 𝗩2\n\n${messageText}\n\n𝗦𝗘𝗡𝗗𝗘𝗥 𝗨𝗜𝗗: ${event.senderID}\n𝗥𝗘𝗟𝗘𝗔𝗦𝗘 𝗗𝗔𝗧𝗘: 21-12-2023\n𝗧𝗛𝗥𝗘𝗔𝗗 𝗨𝗜𝗗: ${event.threadID}\n𝗖𝗥𝗘𝗔𝗧𝗢𝗥:\n【 Aryan 】`);

              console.log('Sent answer as a reply to user');

              // Step 4: Write the promptData array to a JSON file
              fs.writeFileSync('prompt.json', JSON.stringify(promptData, null, 2), 'utf8');
            } catch (error) {
              console.error(`Failed to get an answer: ${error.message}`);
              api.sendMessage(
                `${error.message}`,
                event.threadID
              );
            }
          },
        };
