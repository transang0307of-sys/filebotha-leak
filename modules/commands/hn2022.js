module.exports.config = {
    name: "hn2022",
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
	  
    return api.sendMessage(`𝐕𝐮𝐢 𝐥ò𝐧𝐠 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡ắ𝐧 𝐧à𝐲 𝐧𝐡ậ𝐩 𝐤𝐢ể𝐮 𝐛ạ𝐧 𝐦𝐮ố𝐧 (𝟏 𝐨𝐫 𝟐).`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "create",
          name: 'hn2022',
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
        
        case "create": {
            var text1 = event.body;
            
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`🌸 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝗕𝗼𝘁 𝘁𝗮̣𝗼 𝗮̉𝗻𝗵 🌸`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`𝗔̉𝗻𝗵 𝗯𝗶̀𝗮 𝗰𝘂̉𝗮 ${nameSender} 𝗻𝗲̀ 🌸\n𝗨𝗜𝗗: ${event.senderID}\n𝙢𝙖̂̃𝙪 𝙗𝙖̣𝙣 𝙘𝙝𝙤̣𝙣:${text1}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://canvas.nguyenlienmanh.com/api/hn2022?apikey=DVB&name=${nameSender}&kieu=${text1}&uid=${event.senderID}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }}