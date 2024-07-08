const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');

const birthdayFilePath = path.join(__dirname, 'cache', 'birthdays.json');

function loadBirthdays() {
  try {
    if (!fs.existsSync(birthdayFilePath)) {
      fs.writeFileSync(birthdayFilePath, '{}');
    }
    const birthdaysData = fs.readFileSync(birthdayFilePath);
    return JSON.parse(birthdaysData);
  } catch (error) {
    console.error('Error loading birthdays:', error);
    return {};
  }
}

function saveBirthdays(birthdays) {
  try {
    fs.writeFileSync(birthdayFilePath, JSON.stringify(birthdays, null, 4));
  } catch (error) {
    console.error('Error saving birthdays:', error);
  }
}

function listBirthdays() {
  const birthdays = loadBirthdays();
  const birthdayList = Object.values(birthdays).map(user => `${user.userName}: ${user.birthday}`).join('\n');
  return birthdayList || 'No birthdays set.';
}

module.exports.config = {
  name: 'birthday',
  version: '1.1',
  author: 'Dipto',
  role: 0,
  usePrefix: true,
  description: 'set birthday ',
  category: 'birthday',
  guide: { en: '[mention] - [date date/month]' },
  cooldowns: 5
};

module.exports.onStart = async function ({ api, event, args, messageID, usersData }) {
  try {
    const birthdays = loadBirthdays();
    const { threadID, mentions } = event;

    if (args[0] === 'list') {
      const birthdayList = listBirthdays();
      return api.sendMessage(`List of birthdays:\n${birthdayList}`, threadID, messageID);
    }

    if (Object.keys(mentions).length > 0) {
      const userID = Object.keys(mentions)[0];
      const [day, month] = args.slice(args.indexOf('-') + 1).join('').split('/');
      const userTimezone = 'Asia/Dhaka';
      const userBirthday = moment.tz(`2024-${month}-${day}`, 'YYYY-MM-DD', userTimezone);

      if (!userID) {
        return api.sendMessage('You must mention a user to set their birthday.', threadID, messageID);
      } else if (!day || !month || isNaN(day) || isNaN(month)) {
        return api.sendMessage('You must specify a valid birthday in the format DD/MM.', threadID, messageID);
      } else if (userBirthday.isBefore(moment.tz('2024-01-01', 'YYYY-MM-DD', userTimezone))) {
        return api.sendMessage('You cannot set a birthday in the past.', threadID, messageID);
      } else if (birthdays[userID]) {
        return api.sendMessage('This user\'s birthday has already been set.', threadID, messageID);
      }

      const data = await usersData.get(userID);
      const name = data.name;
      birthdays[userID] = {
        userName: name,
        birthday: `${day}/${month}`,
        timezone: userTimezone,
        timestamp: userBirthday.valueOf(),
        threadID: threadID,
        uid: userID
      };

      saveBirthdays(birthdays);
      return api.sendMessage(`Birthday set for ${name} = ${day}/${month}`, threadID, messageID);
    }
  } catch (error) {
    console.error('Error setting birthday:', error);
  }
};

module.exports.onChat = async function ({ api, usersData }) {
  try {
    const today = moment.tz('Asia/Dhaka');
    const [day,month] = [ today.date() , today.month() + 1 ]

    const birthdays = loadBirthdays();
    for (const userID in birthdays) {
      const user = birthdays[userID];
   if (user.birthday === `${day}/${month}` && today.hours() === parseInt('0', 10) && today.minutes() === parseInt('0', 10)) {
        const uid = user.uid;
        const savedThreadID = user.threadID;

        const data = await usersData.get(uid);
        const userName = data.name;
        await api.sendMessage({
          body: `🥰💋 Happy Birthday  ${userName} Baby💋🥰\n Happy Download Day Baby🐥\nPicchi Happy Birthday 😺😺`,
          mentions: [{ id: uid, tag: userName }]
        }, savedThreadID);
        delete birthdays[userID];
        saveBirthdays(birthdays);
        break;
     }
    }
  } catch (error) {
    console.error('Error sending birthday message:', error);
  }
};
