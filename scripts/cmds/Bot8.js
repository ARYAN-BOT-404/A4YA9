const fs = require("fs-extra");
module.exports = {
config: {
		name: "goibot",
    version: "1.0",
		author: "Samir",
		countDown: 5,
		role: 0,
		shortDescription: "no-prefix",
		longDescription: "Bot Will Reply You In Engish/Bangla Language",
		category: "no prefix",
		guide: {
      en: "{p}{n}",
    }
	},

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {
  
  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["Hey You, Yes You, You Are So Beautiful", "i Love You🙂", "Yes Dear, I Am Here...😗", "I Love you", "Miss YoU Beppy", "😁Smile I am Taking Selfy✌️🤳", "Block Your Babe And Purpose me 🙂💔", "Block Kardo Mujhe Warna Pyaar Hojayega💋", "I See You Inside Everyone", "That's Why I Love Everyone As More As You🤭", "Nope But, My Heart Is Falling For You My Preety Boyyy🙌✨", "Everybody Wanna Steal My Boyy😫", "আমি আপনাকে কিভাবে সাহায্য করতে পারি...? 🤔", "আদেশ করুন বস...🙂", "হুম শুনছি আমি আপনি বলুন 😐", "আমার সব কমান্ড দেখতে *help টাইপ করুন ✅", "Ji bolen ki korte pari ami apnar jonno...?", "আদেশ করুন যাহাপানা 😎", "আবার যদি আমারে বট কইয়া ডাক দেছ তাইলে তোর বিয়ে হবে না 🫤😏", "I am your personal assistant", "তুই বট তোর নানি বট 😤 তোর কত বড় সাহস তুই আমারে বট কস 😤 তোর টা খাই নাকি পড়ি যে তুই আমারে বট কস 😤", "আপনার কি চরিত্রে সমস্যা যে এতো বার আমাকে ডাকতেছেন 🤨", "ডাকছোত কেন ফাস্ট কো 😒", "তুমি কি আমাকে ডেকেছো...? 😇"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]
    
        if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
         return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
       };
       if ((event.body.toLowerCase() == "ummah") || (event.body.toLowerCase() == "bot ummah de")) {
         return api.sendMessage("astagfirullah ki kos agula 🙂", threadID);
       };

        if ((event.body.toLowerCase() == "i love you ") || (event.body.toLowerCase() == "bot loves you")) {
         return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
       };

       if ((event.body.toLowerCase() == "chagol bot") || (event.body.toLowerCase() == "dog bot")) {
         return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
       };

       if ((event.body.toLowerCase() == "@Aris E") || (event.body.toLowerCase() == "@tiny")) {
         return api.sendMessage("hum sunsi bolo 😒", threadID);
       };

       if ((event.body.toLowerCase() == "chummma") || (event.body.toLowerCase() == "undercover cmm")) {
         return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
       };
if            ((event.body.toLowerCase() == "@Ariyan") || (event.body.toLowerCase() == "Romim")) {
         return api.sendMessage("yo bolo ki bolba 😒", threadID);
       };
       if ((event.body.toLowerCase() == "Gorur bot") || (event.body.toLowerCase() == "gorur bot")) {
         return api.sendMessage("Tui goru tor nana goru tor 14 gusti goru", threadID);
       };
       if ((event.body.toLowerCase() == "pagol") || (event.body.toLowerCase() == "pagol bot")) {
         return api.sendMessage("tor mathay latthi dibo baddop 😾", threadID);
       };
       if ((event.body.toLowerCase() == "spam") || (event.body.toLowerCase() == "spam ditaso kn?")) {
         return api.sendMessage("ore akon e kick deu 😾", threadID);
       };
       if ((event.body.toLowerCase() == "bot koi") || (event.body.toLowerCase() == "baby tmi koi?")) {
         return api.sendMessage("aije aije 🙋 ami ai dike 😋hum bolo 😻", threadID);
       };
       if ((event.body.toLowerCase() == "romim") || (event.body.toLowerCase() == "Romim")) {
         return api.sendMessage("amr boss ar kase tumar ki kaj?😒", threadID);
       };
       if ((event.body.toLowerCase() == "baddop") || (event.body.toLowerCase() == "biyadopi")) {
         return api.sendMessage("ei molla tui kinto biyadopi kortasos.😾", threadID);
       };
       if ((event.body.toLowerCase() == "illiterate") || (event.body.toLowerCase() == "murkho ")) {
         return api.sendMessage("Ho oi akta illiterate", threadID);
       };
       if ((event.body.toLowerCase() == "কি করো") || (event.body.toLowerCase() == "Ki koro")) {
         return api.sendMessage("gumai tumi?", threadID);
       };
       if ((event.body.toLowerCase() == "dud night") || (event.body.toLowerCase() == "dud morning")) {
         return api.sendMessage("nau dud khau", threadID);
       };
       if ((event.body.toLowerCase() == "hehehhe") || (event.body.toLowerCase() == "hahahah")) {
         return api.sendMessage("tui ato hastasos ken 😾", threadID);
       };
      if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
         return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
       };

       if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
         return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
       };

       if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
         return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
       };

       if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
         return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
       };

       if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop")) {
         return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
       };

       if ((event.body.toLowerCase() == "clmm bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "bot  chi chi")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "cc bot")) {
         return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
       };

       if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
         return api.sendMessage("️ that's very commendable hihi :>", threadID);
       };

       if ((event.body.toLowerCase() == "dm bot")) {
         return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
       };

       if ((event.body.toLowerCase() == "nobody loves me")) {
         return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love the admin bot")) {
         return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
       };

       if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
         return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
       };

       if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
         return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
       };

       if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
         return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
       };

       if ((event.body.toLowerCase() == "is the bot sad")) {
         return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love you")) {
         return api.sendMessage("Yes I love you and everyone so much", threadID);
       };

       if ((event.body.toLowerCase() == "bot goes to sleep")) {
         return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
       };

       if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
         return api.sendMessage("I'm full when I see you eat <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love me")) {
         return api.sendMessage("Yes <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
         return api.sendMessage("Yes <3", threadID);
       };

    if ((event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "chup thak")) {
     return api.sendMessage("️Amr Mukh, Amr iccha, Amr Mon. Tor ki bal,,,shala abal...ja vaag... 😒🙄", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "khana khaya?") || (event.body.toLowerCase() == "khaiso")) {
     return api.sendMessage("️Nh...Tmk khabo.💖🥳", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "k") || (event.body.toLowerCase() == "k?")) {
     return api.sendMessage("️K na K😕", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "guyz") || (event.body.toLowerCase() == "guys")) {
     return api.sendMessage("️Don't Call Me Guys Bcz I AM Yours😊", threadID, messageID);
   };
	  if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "kiss me")) {
         return api.sendMessage("agula akon na biye r por 😋😻", threadID);
       };
    
  if ((event.body.toLowerCase() == "wife") || (event.body.toLowerCase() == "bou")) {
     return api.sendMessage("️Yes, My Husband🥰", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️Good Morningg!🌄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("️Good Night🌃, Take Care Babe🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bro")) {
     return api.sendMessage("️But I Am Girl, You Can Call Me Maya", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "boy")) {
     return api.sendMessage("️bbe, I Am Girl 😑", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "beb") || (event.body.toLowerCase() == "bebi")) {
     return api.sendMessage("️hm Beb😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bby")) {
     return api.sendMessage("️bolo Baby😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bebe")) {
     return api.sendMessage("hmm Babe😚🖤", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "fight") || (event.body.toLowerCase() == "fyt")) {
     return api.sendMessage("️Sorry, We Are Peace Lover ✌🏻🕊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("️Hello, How Are You 😗", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "heloo")) {
     return api.sendMessage("️Hi And Wassup Preety Stranger🙂", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
     return api.sendMessage("️I Am Romim ahmed, An AI Based Messenger Chatbot.", threadID, messageID);
   };
  
  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "baby") || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
