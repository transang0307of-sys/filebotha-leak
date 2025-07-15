module.exports.config = {
  name: "duyet",
  version: "1.0.2",
  hasPermssion: 3,
  credits: "DungUwU",//Mod by H.Thanh
  description: "Duyệt người dùng hoặc nhóm sử dụng Bot",
  commandCategory: "ADMIN",
  cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const pendingPath = __dirname + "/cache/pendingThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
  if (!fs.existsSync(pendingPath)) fs.writeFileSync(pendingPath, JSON.stringify([]));
}

module.exports.run = async ({ event, api, args }) => {
  const { threadID, messageID, senderID } = event;
  let data = JSON.parse(fs.readFileSync(dataPath));
  let pending = JSON.parse(fs.readFileSync(pendingPath));
  
  
  let msg = "";
  let idBox = (args[0]) ? args[0] : threadID;
  if (args[0] == "list" || args[0] == "l") {
    msg = "[ 𝗠𝗢𝗗𝗘 ] - 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́𝗰 𝗻𝗵𝗼́𝗺 đ𝗮̃ 𝗱𝘂𝘆𝗲̣̂𝘁\n━━━━━━━━━━━━━━━━━━";
    let count = 0;
    for (e of data) {
       let name = (await api.getThreadInfo(e)).name || "Tên không tồn tại";
      msg += `\n\n(${count += 1}). ${name}\n🔰 𝗜𝗗: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  else if (args[0] == "del" || args[0] == "d") {
   let threadInfo = await api.getThreadInfo(event.threadID);
  let threadName = threadInfo.threadName;
    idBox = (args[1]) ? args[1] : event.threadID;
    if (isNaN(parseInt(idBox))) return api.sendMessage("[ 𝗗𝘂𝘆𝗲̣̂𝘁 𝗗𝗲𝗹 ] ➠  Không phải một con số", threadID, messageID);
    if (!data.includes(idBox)) return api.sendMessage("[ 𝗗𝘂𝘆𝗲̣̂𝘁 𝗗𝗲𝗹 ] ➠  Nhóm không được duyệt từ trước", threadID, messageID);
    api.sendMessage(`⚜️=== [ 𝗗𝘂𝘆𝗲̣̂𝘁 𝗗𝗲𝗹 ] ===⚜️\n👨‍👩‍👧‍👦 𝗻𝗵𝗼́𝗺 ${threadName}\n🔰 𝗜𝗗: ${idBox} \n🎶đ𝗮̃ 𝗯𝗶̣ 𝗴𝗼̛̃ 𝗸𝗵𝗼̉𝗶 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 đ𝘂̛𝗼̛̣𝗰 𝗽𝗵𝗲́𝗽 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗕𝗼𝘁 💞`, threadID, () => {
      if (!pending.includes(idBox)) pending.push(idBox);
      data.splice(data.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
    }, messageID)
  }
  else if (args[0] == "pending" || args[0] == "p") {
   
    msg = "[ 𝗠𝗢𝗗𝗘 ] - 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗻𝗵𝗼́𝗺 đ𝗮𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗽𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁\n━━━━━━━━━━━━━━━━━━";
    let count = 0;
    for (e of pending) {
      let name = (await api.getThreadInfo(e)).name || "Tên không tồn tại";
      msg += `\n\n(${count += 1}). ${name}\n🔰 𝗜𝗗: ${e}`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
  
  else if (isNaN(parseInt(idBox))) api.sendMessage("[ 𝗞𝗜𝗘̂̉𝗠 𝗗𝗨𝗬𝗘̣̂𝗧 ]\n[🔰] 𝗜𝗗 𝗯𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗽 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂", threadID, messageID);
  else if (data.includes(idBox)) api.sendMessage(`[ 𝗞𝗜𝗘̂̉𝗠 𝗗𝗨𝗬𝗘̣̂𝗧 ]\n[🔰] 𝗜𝗗: ${idBox} đ𝗮̃ đ𝘂̛𝗼̛̣𝗰 𝗽𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁 𝘁𝘂̛̀ 𝘁𝗿𝘂̛𝗼̛́𝗰`, threadID, messageID);
  else api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] ➠ 𝗡𝗵𝗼́𝗺 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̃ đ𝘂̛𝗼̛̣𝗰 𝗦𝗨𝗣𝗘𝗥 𝗔𝗗𝗠𝗜𝗡 𝗱𝘂𝘆𝗲̣̂𝘁 đ𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 💞", idBox, (error, info) => {
    if (error) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] ➠ đ𝗮̃ 𝗰𝗼́ 𝗹𝗼̂̃𝗶 𝘅𝗮̉𝘆 𝗿𝗮, đ𝗮̉𝗺 𝗯𝗮̉𝗼 𝗿𝗮̆̀𝗻𝗴 𝗜𝗗 𝗯𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗽 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂ 𝘃𝗮̀ 𝗕𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺", threadID, messageID);
    else {
      data.push(idBox);
      pending.splice(pending.indexOf(idBox), 1);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));
      api.sendMessage(`=== [ 𝗗𝘂𝘆𝗲̣̂𝘁 𝗕𝗼𝘅 ] ===\n🔰 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗻𝗵𝗼́𝗺 𝗰𝗼́ 𝗜𝗗: ${idBox} `, threadID, messageID);
    }
  });
}