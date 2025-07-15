module.exports.config = {
	name: "fbavt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DuyVuong",
	description: "lấy avt người dùng bằng id",
	commandCategory: "tiện ích",
	cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
const request = require("request");
const fs = require("fs")
const axios = require("axios")
const prefix = global.config.PREFIX
if (!args[0]) return api.sendMessage(`=== 『 𝐅𝐁-𝐀𝐕𝐀𝐓𝐀𝐑 』===\n\n${prefix}𝗳𝗯𝗮𝘃𝘁 𝗶𝗱 [𝗶𝗱 𝗰𝗮̂̀𝗻 𝗴𝗲𝘁] => 𝗴𝗲𝘁 𝗮̉𝗻𝗵 𝘁𝗵𝗲𝗼 𝘂𝗶𝗱 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆\n\n${prefix}𝗳𝗯𝗮𝘃𝘁 𝗹𝗶𝗻𝗸 [𝗹𝗶𝗻𝗸 𝗰𝗮̂̀𝗻 𝗴𝗲𝘁] => 𝗴𝗲𝘁 𝘁𝗵𝗲𝗼 𝗹𝗶𝗻𝗸 𝗰𝘂̉𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆\n\n${prefix}𝗳𝗯𝗮𝘃𝘁 𝘂𝘀𝗲𝗿 => 𝗰𝗮́𝗰𝗵 𝘁𝗿𝗼̂́𝗻𝗴 𝗹𝗮̀ 𝗴𝗲𝘁 𝗮𝘃𝗮𝘁𝗮𝗿 𝗰𝘂̉𝗮 𝗰𝗵𝗶́𝗻𝗵 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵\n\n${prefix}𝗳𝗯𝗮𝘃𝘁 𝘂𝘀𝗲𝗿 [@𝗺𝗲𝗻𝘁𝗶𝗼𝗻𝘀] => 𝗴𝗲𝘁 𝗮𝘃𝗮𝘁𝗮𝗿 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘃𝘂̛̀𝗮 𝘁𝗮𝗴\n\n${prefix}𝗛𝗗𝗦𝗗 => 𝗸𝗵𝗼̂𝗻𝗴 𝗹𝗮̂́𝘆 ( 𝗮𝘃𝘁 ) 𝗰𝘂̉𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗸𝗵𝗮́𝗰 𝗸𝗵𝗶 𝗵𝗼̣ 𝗯𝗮̣̂𝘁 𝗸𝗵𝗶𝗲̂𝗻`,event.threadID,event.messageID);
else if (args[0] == "id") {
	try {
	var id = args[1];
  if (!id) return api.sendMessage(`Vui lòng nhập uid cần get avatar.`,event.threadID,event.messageID);
   var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
   return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 }
 catch (e) {
 	api.sendMessage(`Không thể lấy ảnh người dùng.`,event.threadID,event.messageID);
 }
}
else if (args[0] == "link") {
var link = args[1];
if (!link) return api.sendMessage(`Vui lòng nhập link cần get avatar.`,event.threadID,event.messageID);
var tool = require("fb-tools");
try {
var id = await tool.findUid(args[1] || event.messageReply.body);
var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}
catch(e){
    api.sendMessage("Người dùng không tồn tại.",event.threadID,event.messageID)
}
}
else if(args[0] == "user") {
	if (!args[1]) {
		var id = event.senderID;
		var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
	}
	else if (args.join().indexOf('@') !== -1) {
		var mentions = Object.keys(event.mentions)
		var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
	}
	else {
		api.sendMessage("Sai lệnh. Ghi `/fbavt` để xem các lệnh của module.",event.threadID,event.messageID);
	}
}
else {
	api.sendMessage("Sai lệnh. Ghi `.fbbavt` để xem các lệnh của module.",event.threadID,event.messageID);
}
}
