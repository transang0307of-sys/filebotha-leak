module.exports.config = {
    name: "thoisu",
    version: "0.02.1",
    hasPermssion: 0,
    credits: "DuyVuong",
    description: "Random ảnh theo api - uptime",
    commandCategory: "tiện ích",
    cooldowns: 3
  };
  function byte2mb(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0, n = parseInt(bytes, 10) || 0;
    while (n >= 1024 && ++l) n = n / 1024;
    return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
  }
  module.exports.run = async ({ api, event, Threads }) => {
    const axios = require('axios');
    const fetch = global.nodemodule["node-fetch"];
    const request = require('request');
    const res = await axios.get(`https://manhict.tech/api/news?apikey=2rNF2liL`);
  var poem = res.data.result;
    const fs = require("fs");
    const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
    const pidusage = await global.nodemodule["pidusage"](process.pid);
    const { commands } = global.client;
    const admin = global.config.ADMINBOT.join('\n')
    const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
        const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    //getprefix
    return api.sendMessage(`⇒Bây giờ là : ${gio}\n ${poem.title} \n ${poem.description}\n ${poem.link}`, event.threadID, event.messageID);
}