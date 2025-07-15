module.exports.config = {
  name: "checknude",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Phát hiện ảnh nude được gửi vào nhóm",
  commandCategory: "Box Chat",
  usages: "",
  cooldowns: 5
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
const axios = require('axios');
let data = (await Threads.getData(event.threadID)).data
if (event.isGroup == false) return;
if(!data.checkNude) return
if (typeof data.checkNude == "undefined" || data.checkNude == false) return;
else if( undefined !== event.attachments && data.checkNude == true  && event.attachments['length'] != 0) {
  var dataa = event.attachments[0]
  if(dataa['type'] !== 'photo') return
  const ress = await axios.get(`https://apivip.nguyenlienmanh.com/imgur?link=${encodeURIComponent(dataa.url)}`)
  const link = ress.data.uploaded.image
  var res = await axios.get(`https://apivip.nguyenlienmanh.com/tienich/checknudes?link=${link}`);
  var checkIMG = res.data.data
  if(checkIMG > 80) { return api.sendMessage(`⚠️=== [ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚 ] ===⚠️\n━━━━━━━━━━━━━\n\n𝗖𝗮̉𝗻𝗵 𝗯𝗮́𝗼 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶\n𝗴𝘂̛̉𝗶 𝗮̉𝗻𝗵 𝗻𝘂𝗱𝗲 𝘁𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻\n𝗧𝗶̉ 𝗹𝗲̣̂ 𝟭𝟴+ 𝗰𝘂̉𝗮 𝗮̉𝗻𝗵: ${res.data.NSFW_Prob || "0%"}\n𝗛𝗘̣̂ 𝗧𝗛𝗢̂́𝗡𝗚 𝗡𝗛𝗔̣̂𝗡 𝗗𝗜𝗘̣̂𝗡`, event.threadID, event.messageID) 
  }
  }
}
// api m đâu???
module.exports.run = async ({ api, event, Threads, args }) => {
const axios = require('axios');
if (event.type == "message_reply") {
if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return
if (event.messageReply.attachments.length > 1) return
const ress = await axios.get(`https://apivip.nguyenlienmanh.com/imgur?link=${encodeURIComponent(event.messageReply.attachments[0].url)}`)
  const link = ress.data.uploaded.image
  var res = await axios.get(`https://apivip.nguyenlienmanh.com/tienich/checknudes?link=${link}`);
  var checkIMG = res.data.data
  return api.sendMessage(`Mức độ 18+: ${res.data.NSFW_Prob || "0%"}`, event.threadID, event.messageID) 
}
else {
const data = (await Threads.getData(event.threadID)).data || {};
if (typeof data.checkNude == "undefined" || data.checkNude  == false) data.checkNude  = true;
    else data.checkNude  = false;
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(event.threadID, data);
    return api.sendMessage(`» Đã ${(data.checkNude == true) ? "bật" : "tắt"} thành công check ảnh nude!`, event.threadID, event.messageID);
}
}