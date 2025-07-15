module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BLACK",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Thông tin admin",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/lqyaRGL.mp4",
  ];
  var callback = () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━\n🌸ADMIN🌸\n━━━━━━━━━━━━━━━━━━
🙈 𝐓𝐞̂𝐧: Trinh Hà
💮 𝐁𝐢𝐞̣̂𝐭 𝐃𝐚𝐧𝐡: Hà Đẹp Trai  🥀
🛸 𝐓𝐮𝐨̂̉𝐢: 37
👤 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: 𝐍𝐚𝐦
💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐂𝐚𝐨 𝐂𝐚̂𝐧 𝐍𝐚̣̆𝐧𝐠: 𝐂𝐡𝐮̛𝐚 𝐗𝐚́𝐜 Đ𝐢̣𝐧𝐡 
💘 𝐌𝐨̂́𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂: Độc Thân
🌎 𝐐𝐮𝐞̂ 𝐐𝐮𝐚́𝐧: Thanh hoá
👫 𝐆𝐮: 𝐃𝐞𝐭𝐭𝐡𝐰 , 𝐂𝐮𝐭𝐢𝐢 , 𝐓𝐡𝐚̣̂𝐭 𝐓𝐡𝐚̀ ,...
🌸 𝐓𝐢́𝐧𝐡 𝐂𝐚́𝐜𝐡: 𝐇𝐢𝐞̂̀𝐧, 𝐕𝐮𝐢 𝐓𝐢́𝐧𝐡 , 𝐇𝐨̀𝐚 Đ𝐨̂̀𝐧𝐠,𝐇𝐨̛𝐢 𝐇𝐨̛𝐢 𝐂𝐨̣𝐜 
🌀 𝐒𝐨̛̉ 𝐓𝐡𝐢́𝐜𝐡: 𝐍𝐡𝐨̃𝐧𝐠 𝐧𝐡𝐞̃𝐨 𝐕𝐬 𝐍𝐢, 𝐂𝐡𝐨̛𝐢 𝐆𝐚𝐦𝐞 , 𝐈𝐛 𝐕𝐨̛́𝐢 𝐍𝐢
💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
☎ 𝐒đ𝐭&𝐙𝐚𝐥𝐨: 0974405157
🌐𝐅𝐛: fb.me/100029891650673
✉️ 𝐄𝐦𝐚𝐢𝐥:
------hà------
🛸𝐃𝐨𝐧𝐚𝐭𝐞:
💳𝐕𝐂𝐁: 𝐂𝐡𝐮̛𝐚 𝐋𝐚̀𝐦:(
💳𝐌𝐁: 
📲𝐌𝐎𝐌𝐎: 0974405157`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.mp4")).on("close",() => callback());
   };
 