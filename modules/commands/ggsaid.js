module.exports.config = {
    name: "ggsaid",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Raiden Shogun",
    description: "Tạo ảnh chữ ký v2 bản xịn",// đừng đổi tên module nếu không muốn nó đứng càng không nên đổi credits nêu không muốn bị mất appstate và bay file <3
    commandCategory: "tạo ảnh",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
 
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
	  
    return api.sendMessage(`𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗽 𝗵𝗼̣, 𝘁𝗲̂𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 🌸`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "create",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        });
    }, event.messageID);
} 
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var nameSender = (await Users.getData(event.senderID)).name
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
          
       /* case "text1": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗵𝗼̣, 𝘁𝗲̂𝗻 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝘃𝗮̀𝗼 𝗻𝗮̆𝗺 𝘀𝗶𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'text2',
        	  	name: 'ggsaid',
        	  	author: senderID,
        	  	text1: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }*/
      /* case "text1": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗰𝗵𝗼̣𝗻 𝗻𝗮̆𝗺 𝘀𝗶𝗻𝗵 𝗹𝗮̀: ${event.body}\n(𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗵𝗮̣̂𝗽 𝗺𝗼̂ 𝘁𝗮̉ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻) 🌸`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'create',
        			name: 'ggsaid',
        			author: senderID,
        			text1: event.body,
        		//	text2: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }*/
        //xog rui ne pri
        
        case "create": {
            var text1 = event.body;
            //var text2 = handleReply.text2;
           // var text2 = event.body;
            
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`🌸 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗕𝗼𝘁 𝘁𝗮̣𝗼 𝗮̉𝗻𝗵 🌸`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`𝗔̉𝗻𝗵 𝗯𝗶̀𝗮 𝗰𝘂̉𝗮 ${nameSender} 𝗻𝗲̀ 🌸\n𝗨𝗜𝗗: ${event.senderID}\n𝗛𝗼̣ 𝘃𝗮̀ 𝘁𝗲̂𝗻: ${text1}\n𝗡𝗮̆𝗺 𝘀𝗶𝗻𝗵: \n𝗠𝗼̂ 𝘁𝗮̉:`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://canvas.nguyenlienmanh.com/api/ggsaid?apikey=DVB&name=${text1}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }}