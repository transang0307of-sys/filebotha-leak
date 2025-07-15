module.exports.config = {
	name: "say",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Khiến bot trả về file âm thanh của chị google thông qua văn bản",
	commandCategory: "tiện ích",
	usages: "[ru/en/ko/ja] [Text]",
	cooldowns: 5,
	dependencies: {
		"path": "",
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, args }) {
	try {
	const moment = require("moment-timezone"); 
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
if (args.length == 0) return api.sendMessage(`=== 𝗩𝗢𝗜𝗖𝗘𝗦 ===\n━━━━━━━━━━━━━━━━━━\n→ 𝗖𝗮́𝗰𝗵 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴\n→ !𝘀𝗮𝘆: 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝘁𝗶𝗲̂́𝗻𝗴 𝗩𝗶𝗲̣̂𝘁 𝗡𝗮𝗺 🇻🇳\n→ !𝘀𝗮𝘆 𝗿𝘂: 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗻𝗴𝘂̛̃ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝗴𝗶𝗼̣𝗻𝗴 𝗻𝗼́𝗶 𝗰𝗵𝗶̣ 𝗚𝗼𝗼𝗴𝗹𝗲 𝗡𝘂̛𝗼̛́𝗰 𝗡𝗴𝗮 🇷🇺\n→ !𝘀𝗮𝘆 𝗷𝗮: 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗻𝗴𝘂̛̃ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝗴𝗶𝗼̣𝗻𝗴 𝗻𝗼́𝗶 𝗰𝗵𝗶̣ 𝗚𝗼𝗼𝗴𝗹𝗲 𝗡𝘂̛𝗼̛́𝗰 𝗡𝗵𝗮̣̂𝘁 𝗕𝗮̉𝗻 🇯🇵\n→ !𝘀𝗮𝘆 𝗸𝗼: 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗻𝗴𝘂̛̃ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗵𝗲𝗼 𝗡𝘂̛𝗼̛́𝗰 𝗛𝗮̀𝗻 𝗤𝘂𝗼̂́𝗰 🇰🇷\n=====「${timeNow} 」=====`, event.threadID, event.messageID);
		const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
		const { resolve } = global.nodemodule["path"];
		var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
		var languageToSay = (["ru","en","ko","ja"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : global.config.language;
		var msg = (languageToSay != global.config.language) ? content.slice(3, content.length) : content;
		const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
		await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`, path);
		return api.sendMessage({ attachment: createReadStream(path)}, event.threadID, () => unlinkSync(path));
	} catch (e) { return console.log(e) };
}