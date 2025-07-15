module.exports.config = {
  name: "txx",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DungUwU",
  description: "taixiu nhiều người có ảnh",
  commandCategory: "Trò chơi",
  usages: "[create/leave/start]\n[tài/xỉu]",
  cooldowns: 2
};

const axios = require('axios');

module.exports.languages = {
  "vi": {
        "missingInput": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐜𝐮̛𝐨̛̣𝐜 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐛𝐨̉ 𝐭𝐫𝐨̂́𝐧𝐠 𝐡𝐨𝐚̣̆𝐜 𝐥𝐚̀ 𝐬𝐨̂́ 𝐚̂𝐦",
        "wrongInput": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐍𝐡𝐚̣̂𝐩 𝐥𝐢𝐞̣̂𝐮 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂",
        "moneyBetNotEnough": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐛𝐚̣𝐧 𝐜𝐮̛𝐨̛̣𝐜 𝐥𝐨̛́𝐧 𝐡𝐨̛𝐧 𝐡𝐨𝐚̣̆𝐜 𝐛𝐚̆̀𝐧𝐠 𝐬𝐨̂́ 𝐝𝐮̛ 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧",
        "limitBet": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐜𝐮̛𝐨̛̣𝐜 𝐩𝐡𝐚̉𝐢 𝐥𝐨̛́𝐧 𝐡𝐨̛𝐧 𝐡𝐨𝐚̣̆𝐜 𝐛𝐚̆̀𝐧𝐠 𝟓𝟎$",
        "alreadyHave": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐇𝐢𝐞̣̂𝐧 𝐜𝐨́ 𝟏 𝐯𝐚́𝐧 𝐭𝐚̀𝐢 𝐱𝐢̉𝐮 𝐝𝐢𝐞̂̃𝐧 𝐫𝐚 𝐨̛̉ 𝐧𝐡𝐨́𝐦 𝐧𝐚̀𝐲",
        "alreadyBet": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐭𝐡𝐚𝐲 𝐦𝐮̛́𝐜 𝐜𝐮̛𝐨̛̣𝐜 𝐥𝐚̀ %1 đô 𝐯𝐚̀𝐨 %2.",
        "createSuccess": "🎲==== [ 𝐓𝐀𝐈𝐗𝐈𝐔 ] ====🎲\n\n𝐓𝐚̣𝐨 𝐛𝐚̀𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠\n𝐓𝐡𝐚𝐦 𝐠𝐢𝐚 𝐜𝐮̛𝐨̛̣𝐜 𝐛𝐚̆̀𝐧𝐠 𝐜𝐚́𝐜𝐡, 𝐝𝐮̀𝐧𝐠:\n%1%2 [ 𝐭𝐚̀𝐢/𝐱𝐢̉𝐮 ] [𝐭𝐢𝐞̂̀𝐧 𝐜𝐮̛𝐨̛̣𝐜]\n(𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐭𝐡𝐚𝐲 𝐦𝐮̛́𝐜 𝐜𝐮̛𝐨̛̣𝐜 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐜𝐨𝐧 𝐤𝐡𝐚́𝐜)",
        "noGame": "🎲==== [ 𝐓𝐀𝐈𝐗𝐈𝐔 ] ====🎲\n\n𝐍𝐡𝐨́𝐦 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐯𝐚́𝐧 𝐭𝐚̀𝐢 𝐱𝐢̉𝐮 𝐧𝐚̀𝐨 𝐡𝐢𝐞̣̂𝐧 𝐝𝐢𝐞̂̃𝐧 𝐫𝐚 𝐜𝐚̉ ",
        "betSuccess": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐂𝐮̛𝐨̛̣𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 %1 đô 𝐯𝐚̀𝐨 %2",
        "notJoined": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐭𝐡𝐚𝐦 𝐠𝐢𝐚 𝐭𝐚̀𝐢 𝐱𝐢̉𝐮 𝐨̛̉ 𝐧𝐡𝐨́𝐦 𝐧𝐚̀𝐲",
        "outSuccess": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐑𝐨̛̀𝐢 𝐯𝐚́𝐧 𝐭𝐚̀𝐢 𝐱𝐢̉𝐮 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠, 𝐁𝐨𝐭 𝐯𝐮̛̀𝐚 𝐡𝐨𝐚̀𝐧 𝐭𝐢𝐞̂̀𝐧 𝐥𝐚̣𝐢 𝐜𝐡𝐨 𝐛𝐚̣𝐧",
        "shaking": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̛̀ 𝐛𝐨𝐭 𝐥𝐚̆́𝐜 𝐬𝐚𝐮 𝐠𝐢𝐚̂𝐲 𝐥𝐚́𝐭 ⏳",
        "final": "====[💎 𝐊𝐄̂́𝐓 𝐐𝐔𝐀̉ 💎]====",
        "notAuthor": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐁𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐥𝐚̀ 𝐜𝐡𝐮̉ 𝐩𝐡𝐨̀𝐧𝐠",
        "unknown": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐂𝐚̂𝐮 𝐥𝐞̣̂𝐧𝐡 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂, 𝐗𝐞𝐦 𝐜𝐚́𝐜𝐡 𝐝𝐮̀𝐧𝐠 𝐡𝐚̃𝐲 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: %1help %2",
        "noPlayer": "[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝐇𝐢𝐞̣̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐡𝐨̛𝐢 𝐜𝐮̛𝐨̛̣𝐜",
        "info": "🎲==== [ 𝐓𝐀𝐈𝐗𝐈𝐔 ] ====🎲\n👤 𝐂𝐡𝐮̉ 𝐩𝐡𝐨̀𝐧𝐠: %1\n──────────────\n👥 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐚𝐦 𝐠𝐢𝐚: \n%2"
  }
}

const dice_images = [
  "https://i.ibb.co/1JGMF5Q/row-1-column-1.jpg",
  "https://i.ibb.co/tq3nykP/row-1-column-2.jpg",
  "https://i.ibb.co/bP4d8tR/row-2-column-1.jpg",
  "https://i.ibb.co/GdhsNG7/row-2-column-2.jpg",
  "https://i.ibb.co/884GLkx/row-3-column-1.jpg",
  "https://i.ibb.co/2N86jZ1/row-3-column-2.jpg"
];

module.exports.run = async function({ api, event, args, getText, Users, Threads, Currencies }) {
  
  if (!global.client.taixiu_ca) global.client.taixiu_ca = {};
  

  //DEFINE SOME STUFF HERE..
   const { senderID, messageID, threadID } = event;
 if (args.length == 0) return api.sendMessage(`===[ 🎲 𝐓𝐀̀𝐈 𝐗𝐈̉𝐔 🎲 ]===\n\n» 𝐜𝐫𝐞𝐚𝐭𝐞: 𝐓𝐚̣𝐨 𝐛𝐚̀𝐧 𝐜𝐡𝐨̛𝐢\n» 𝐥𝐞𝐚𝐯𝐞: 𝐑𝐨̛̀𝐢 𝐤𝐡𝐨̉𝐢 𝐛𝐚̀𝐧\n» 𝐬𝐭𝐚𝐫𝐭: 𝐒𝐨̂̉ 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉\n» 𝐞𝐧𝐝: 𝐊𝐞̂́𝐭 𝐭𝐡𝐮́𝐜 
`, event.threadID, event.messageID);
  
  const { increaseMoney, decreaseMoney, getData } = Currencies;
    const moneyUser = (await getData(senderID)).money;
  const sendC = (msg, callback) => api.sendMessage(msg, threadID, callback, messageID);
  const sendTC = async (msg, callback) => api.sendMessage(msg, threadID, callback);
  const sendT = (msg) => sendTC(msg, () => {});
  const send = (msg) => sendC(msg, () => {});
    const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

    //HERE COMES SWITCH CASE...
  switch(args[0]) {
    case "tạo": {
      if (threadID in global.client.taixiu_ca) send(getText("alreadyHave")); //SMALL CHECK
      else sendTC(getText("createSuccess", prefix, this.config.name), () => {
        global.client.taixiu_ca[threadID] = {
          players: 0,
          author: senderID,
          data: {},
          status: "pending",
          author: senderID
        };
      });
      return;
    };
    case "clear":{
      let dataThread = (await Threads.getData(event.threadID)).threadInfo;
      if (!global.client.taixiu_ca[threadID]) return send(getText("noGame"));
      if(!dataThread.adminIDs.find(item => item.id == senderID)  && !global.config.ADMINBOT.includes(senderID)){return api.sendMessage('[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝗖𝗵𝗶̉ 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁 𝘃𝗮̀ 𝗤𝗧𝗩 𝗺𝗼̛́𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗰𝗹𝗲𝗮𝗿 𝗯𝗮̀𝗻 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂 𝗼̛̉ 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆',threadID)}
      else {
        delete global.client.taixiu_ca[threadID]
        return api.sendMessage("[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝗗𝗼̣𝗻 𝗱𝗲̣𝗽 𝗯𝗮̀𝗻 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴", threadID)
      }
    }
    case "rời": {
      console.log(global.client.taixiu_ca[threadID].author)
      try {
      if (!global.client.taixiu_ca[threadID]){ return api.sendMessage('[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝗛𝗶𝗲̣̂𝗻 𝗧𝗮̣𝗶 𝗞𝗵𝗼̂𝗻𝗴 𝗖𝗼́ 𝗕𝗮̀𝗻 𝗧𝗮̀𝗶 𝗫𝗶̉𝘂 𝗡𝗮̀𝗼', threadID)}
      if (!global.client.taixiu_ca[threadID].data[senderID]) return send(getText("notJoined"));
      if(global.client.taixiu_ca[threadID].author == senderID){
        for(i in global.client.taixiu_ca[threadID].data){
           await increaseMoney(i, global.client.taixiu_ca[threadID].data[i].bet * 2);
        }
        delete global.client.taixiu_ca[threadID]
        return api.sendMessage('[ 𝐓𝐚̀𝐢 𝐗𝐢̉𝐮 ] - 𝗖𝗵𝘂̉ 𝘀𝗼̀𝗻𝗴 𝘃𝘂̛̀𝗮 𝗿𝗼̛̀𝗶 𝗯𝗮̀𝗻 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂 𝗻𝗲̂𝗻 𝗰𝗮̉ 𝘀𝗼̀𝗻𝗴 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻 𝗹𝗮̣𝗶 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰', threadID)
      }
      else {
        //REMOVING PLAYER
        global.client.taixiu_ca[threadID].players--;
        // global.client.taixiu_ca[threadID].data[senderID].forEach(async (e) => {
        //   console.log(e)
        //   await increaseMoney(senderID, e.bet);
        // })
        await increaseMoney(senderID, global.client.taixiu_ca[threadID].data[senderID].bet);
        delete global.client.taixiu_ca[threadID].data[senderID];
        send(getText("outSuccess"));
      }
      return;
    } catch(e){
      console.log(e)
    }
  }
    ;
    case "xổ": {
      //SMALL CHECK...
      if (!global.client.taixiu_ca[threadID]) return send(getText("noGame"));
      if (global.client.taixiu_ca[threadID].author != senderID) return send(getText("notAuthor"));
      if (global.client.taixiu_ca[threadID].players == 0) return send(getText("noPlayer"));

      //GET SHAKING DICES GIF AND SEND
      let shakingGif = (await axios.get('https://i.imgur.com/4xrrxVB.gif', { responseType: "stream"}).catch(e => console.log(e))).data;
      await api.sendMessage({
        body: getText("shaking"),
        attachment: shakingGif
      }, threadID, (err, info) => setTimeout(async () => await api.unsendMessage(info.messageID).then(async() => {
        await new Promise(resolve => setTimeout(resolve, 500)); //A LITTLE DELAY...

        //GET DICES
        let _1st = Math.ceil(Math.random() * 6);
        let _2nd = Math.ceil(Math.random() * 6);
        let _3rd = Math.ceil(Math.random() * 6);


        //MAKING MSG...
        let name = "";
        let msg = getText("final");

        //GET IMAGES
        let dice_one_img = (await axios.get(dice_images[_1st - 1], { responseType: "stream"}).catch(e => console.log(e))).data;
        let dice_two_img = (await axios.get(dice_images[_2nd - 1], { responseType: "stream"}).catch(e => console.log(e))).data;
        let dice_three_img = (await axios.get(dice_images[_3rd - 1], { responseType: "stream"}).catch(e => console.log(e))).data;
        let atms = [dice_one_img, dice_two_img, dice_three_img]; //ADD TO ARRAY

        //SPLIT 2 TYPE OF PLAYERS
        const rees = _1st + _2nd + _3rd;
        const uuu = _1st == _2nd == _3rd;
        let tai = [], xiu = [], result;
        for (i in global.client.taixiu_ca[threadID].data) {
          if(rees >= 4 && rees <= 10) { var dd = 'Xỉu' }
          else if(rees >= 11 && rees <= 17) { var dd = 'Tài'}
          name = await Users.getNameUser(i) || "Player"; //GET NAME
          console.log(rees)
          console.log()
      if (dd == "Xỉu") {
  if (["xỉu", "xiu"].includes(global.client.taixiu_ca[threadID].data[i].name)) {
    xiu.push(`${name}: +${global.client.taixiu_ca[threadID].data[i].bet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}$`)
    await increaseMoney(i, global.client.taixiu_ca[threadID].data[i].bet * 2);
  } else {
    tai.push(`${name}: -${global.client.taixiu_ca[threadID].data[i].bet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}$`);
    await decreaseMoney(i, global.client.taixiu_ca[threadID].data[i].bet);
  }
} else {
  if (["tài", "tài"].includes(global.client.taixiu_ca[threadID].data[i].name)) {
    tai.push(`${name}: +${global.client.taixiu_ca[threadID].data[i].bet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}$`)
    await increaseMoney(i, global.client.taixiu_ca[threadID].data[i].bet * 2);
  } else {
    xiu.push(`${name}: -${global.client.taixiu_ca[threadID].data[i].bet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}$`);
    await decreaseMoney(i, global.client.taixiu_ca[threadID].data[i].bet);
  }
}
        }
        msg += `\n\n---------[ 𝐓𝐀̀𝐈 ]---------\n${tai.join("\n")}\n\n---------[ 𝐗𝐈̉𝐔 ]---------\n${xiu.join("\n")}\n\n[ 𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉ 𝐍𝐡𝐚̀ 𝐂𝐚́𝐢 ] -「 ${dd} 」`;

        //FINAL SEND
        sendC({
          body: msg,
          attachment: atms
        }, () => delete global.client.taixiu_ca[threadID]);
        return;
      }), 2400));
    };
    case "info": {
      //SMALL CHECK
      if (!global.client.taixiu_ca[threadID]) return send(getText("noGame"));
      if (global.client.taixiu_ca[threadID].players == 0) return send(getText("noPlayer"));

      let name = "";
      let tempL = [];
      let nameAuthor = await Users.getNameUser(global.client.taixiu_ca[threadID].author) || "Player"; //GET NAME AUTHOR
      for (e in global.client.taixiu_ca[threadID].data) {
        name = await Users.getNameUser(e) || "Player"; //GET NAME PLAYER
        tempL.push(`${name}: ${global.client.taixiu_ca[threadID].data[e].name} - ${global.client.taixiu_ca[threadID].data[e].bet}$`);
      }
      send(getText("info", nameAuthor, tempL.join("\n")));
      return;
    }
    default: {
      //IF IF IF AND IF

      //LITTLE CHECK...
      if (!["tai","tài","xỉu","xiu"].includes(args[0])) return send(getText("unknown", prefix, this.config.name));
      if (!global.client.taixiu_ca[threadID]) return send(getText("noGame"));
      if (args.length < 2) return send(getText("wrongInput"));
      if(args[1] == "all" || args[1] == "allin") {
        var moneyyy = (await Currencies.getData(senderID)).money
      } else {
        var moneyyy = args[1]
      }
      moneyBet = parseInt(moneyyy);
        if (isNaN(moneyBet) || moneyBet <= 0) return send(getText("missingInput"));
      if (moneyBet > moneyUser) return send(getText("moneyBetNotEnough"));
      if (moneyBet < 50) return send(getText("limitBet"));

      if (threadID in global.client.taixiu_ca) {
        if (global.client.taixiu_ca[threadID].status == "pending") {
          let luachon = args[0];
          //CHECK INPUT
          if (["xiu","xỉu"].includes(luachon)) luachon = "xỉu";
          if (["tài","tai"].includes(luachon)) luachon = "tài";

          if (!global.client.taixiu_ca[threadID].data[senderID]) global.client.taixiu_ca[threadID].players++;
          if (global.client.taixiu_ca[threadID].data[senderID]) return sendC(getText("alreadyBet", moneyBet, luachon), async () => {
            await increaseMoney(senderID, global.client.taixiu_ca[threadID].data[senderID].bet);
            await decreaseMoney(senderID, moneyBet)
            global.client.taixiu_ca[threadID].data[senderID] = {
              name: luachon,
              bet: moneyBet
            }
          });
          sendC(getText("betSuccess", moneyBet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."), luachon), async () => {
            await decreaseMoney(senderID, moneyBet);
            global.client.taixiu_ca[threadID].data[senderID] = {
              name: luachon,
              bet: moneyBet
            }
          });
        }
      }
      return;
    }
  }
}