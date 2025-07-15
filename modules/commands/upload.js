module.exports.config = {
	name: "upload",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "",
	commandCategory: "Tiện ích",
	usages: "getLink",
	cooldowns: 5,
	dependencies: {
		"tinyurl": ""
	}
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios')
	let { messageReply, threadID } = event;
  const { API } = global.config
	if (event.type !== "message_reply") return api.sendMessage({body:"🌸 𝗖𝗮́𝗰𝗵 𝗗𝘂̀𝗻𝗴 🌸\n━━━━━━━━━━━━━━━━\n𝟭.𝘂𝗽𝗹𝗼𝗮𝗱 𝗿𝗲𝗽𝗹𝘆 𝗻𝗵𝗮̣𝗰\n𝟮.𝘂𝗽𝗹𝗼𝗮𝗱 𝗿𝗲𝗽𝗹𝘆 𝘃𝗶𝗱𝗲𝗼 \n𝟯.𝗩𝗱: \𝘂𝗽𝗹𝗼𝗮𝗱+𝗺𝗽𝟯",/*attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://Api-manh19Fc.manh10.repl.co/image/mp3chill')).data.url,
method: "GET",
responseType: "stream"
})).data*/
},event.threadID, event.messageID);  
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("→ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
	else {
            let num = 0
            let msg = ``
          for (var i = 0; i < messageReply.attachments.length; i++) {
			var _0xa038=["https://apivip.nguyenlienmanh.com/uploads","url","attachments","post"];var shortLink= await axios[_0xa038[3]](_0xa038[0],{url:messageReply[_0xa038[2]][i][_0xa038[1]]})
            //api.sendMessage(messageReply.attachments[i].url,threadID);
				num +=1;
        msg += `"${shortLink.data.url}",\n`;
    	}
        api.sendMessage(msg,threadID);
        }
}