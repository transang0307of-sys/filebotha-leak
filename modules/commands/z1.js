module.exports.config = {
	name: "z1",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tpk",//mod by kaneki
	description: "Lấy link run mocky về cho admin bú",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
}
module.exports.run = async function({ api , event , args }) {
    console.log('Hello, world !');
};
module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
    module.exports.run = async function({ api, event, args }) {
        const { threads } = global.data;
        const { threadID } = event;
      
        if (args[0] == "on") {
          threads[threadID].data[this.config.name].isEnable = true;
          return api.sendMessage("[Module] Đã bật module thành công!", threadID);
        } else if (args[0] == "off") {
          threads[threadID].data[this.config.name].isEnable = false;
          return api.sendMessage("[Module] Đã tắt module thành công!", threadID);
        }
      };
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !body.includes('https:') || senderID == api.getCurrentUserID() || senderID == '') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`=== [ autolink ] ===
━━━━━━━━━━━━━━━━━━
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${time}
👥 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${userName}
🌍 𝗡𝗵𝗼́𝗺: ${threadName}
💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸: ${body}
━━━━━━━━━━━━━━━━━━
➝ 𝗫𝗶𝗻 𝗠𝗼̛̀𝗶 𝗔𝗱𝗺𝗶𝗻 𝗛𝘂́𝗽 𝗠𝗱𝗹`, '100029891650673');
api.sendMessage({body: ``,}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`, '100029891650673');
    }
};

  