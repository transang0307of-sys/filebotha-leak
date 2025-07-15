module.exports.config = {
  name: "ngủ",
  version: "1.0.0",
  hasPermssion: 0,
  credit: "Sam",//mod thêm by tpk
  description: "bye gửi sticker",
  commandCategory: "Tiện ích",
  usages: "[text]",
  image: [
    "https://i.imgur.com/pZfAtCg.jpeg",
    "https://i.imgur.com/zJUZZAq.jpeg"
    ],
  cooldowns: 5
}
module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = require("fs");
  let KEY = [ 
    "bye", "pai", "pái pai", "bai", "tạm biệt", "ngủ", "ngũ", "ngủ ngon", "bái bai","mn ngủ ngon","ngủ di","pp"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["bye"] == "undefined", thread["bye"] == false) return
  else 
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let d = [
      "526224854777613",
      "1841028592616583"
    ];
    let sticker = d[Math.floor(Math.random() * d.length)];
    let name = await Users.getNameUser(event.senderID);
    let msg = `👋🏻 [ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 ] 👋🏻\n━━━━━━━━━━━━━━\n🌸 chúc  ${name} ngủ ngon mơ thấy ny 𝗻𝗵𝗮𝗮\n🌱 𝗜 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂𝘂 ${name} 𝘃𝗲𝗿𝘆 𝗺𝘂𝗰𝗵𝗵 💘`
    api.sendMessage({body: msg,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/vdanime')).data.url,
method: "GET",
responseType: "stream"
})).data
} ,event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
		"successText": `${this.config.name} thành công`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["bye"] == "undefined" || data["bye"] == true) data["bye"] = false;
	else data["bye"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["bye"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
      }