module.exports.config = {
    name: "tblenh",
    version: "1.0.4",
    hasPermssion: 3,
    credits: "Mirai mod by HĐGN",//Mod by H.Thanh, optimized by DungUwU 🐧
    description: "Gửi tin nhắn tới các nhóm ( reply vào ảnh/video cần gửi kèm) Phiên bản xịn hơn của sendnotiUwU",
    commandCategory: "ADMIN",
    usages: "sendnoti + lời nhắn",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs": "",
        "moment-timezone": ""
    }
};

module.exports.languages = {
    "vi": {
        "sendSuccess": "THÔNG BÁO - Đã gửi thánh chỉ tới %1 nhóm",
        "sendFail": "THÔNG BAO - Không thể gửi thánh chỉ tới %1 nhóm"
    },
    "en": {
        "sendSuccess": "Sent message to %1 thread!",
        "sendFail": "[!] Can't send message to %1 thread"
    }
}

const requiredPath = __dirname + "/cache/";
module.exports.onLoad = async ({ }) => {
    const fs = global.nodemodule["fs"];
    if (!fs.existsSync(requiredPath)) fs.mkdirSync(requiredPath, { recursive: true });
}

const permission = ["100000457759839","100037741424837"];

module.exports.handleReply = async ({ api, event, Users, handleReply }) => {
    const { senderID, messageID, threadID, body } = event;

    const moment = global.nodemodule["moment-timezone"];

    let senderName = await Users.getNameUser(senderID),
        gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s"),
        msg = {
            body: `TỪ NGƯỜI DÙNG • ${senderName}\nFB: www.facebook.com/${event.senderID}\n•\nNhóm: ${global.data.threadInfo.get(threadID)?.threadName || "Tên không tồn tại"}\n» 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${body}\n𝗧𝗶𝗺𝗲: ${gio} `
        }

    if (handleReply.from == 'user') {
        if (!permission.includes(senderID)) return
        msg.body = `𝗧𝗶𝗺𝗲: ${gio}\nTỪ ADMIN • ${senderName}\nFB: www.facebook.com/${event.senderID} \n\n» 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ` + body + `\n『 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐚𝐝𝐦𝐢𝐧 』`;
    }

    msg.mentions = [{
        tag: senderName,
        id: senderID
    }]

    const callback = () => {
        api.sendMessage(msg, handleReply.threadID, (err, info) => {
            if (err) console.log(err);
            else {
                const handleReplyObject = {
                    name: this.config.name,
                    from: 'user',
                    messageID: info.messageID,
                    authorMessageID: messageID,
                    threadID: threadID,
                    author: senderID
                }

                if (handleReply.from == 'user') {
                    handleReplyObject.from = 'admin';
                }
                global.client.handleReply.push(handleReplyObject);
            }
        }, handleReply.authorMessageID);
    }


    if (event.attachments[0]?.url) {
        const request = global.nodemodule["request"];
        const fs = global.nodemodule["fs"];

        let response = await request.get(event.attachments[0].url),
            pathname = response.uri.pathname,
            ext = event.attachments[0].type == 'audio' ? 'm4a' : pathname.substring(pathname.lastIndexOf(".") + 1),
            path = requiredPath + `snoti_${Date.now()}.${ext}`;

        response
            .pipe(fs.createWriteStream(path))
            .on("close", () => {
                msg.attachment = fs.createReadStream(path);
                callback();
            })
    } else callback();
}

module.exports.run = async ({ api, event, args, getText, Users }) => {
    if (!permission.includes(event.senderID))
        return api.sendMessage("nunu", event.threadID, event.messageID);
    // const moment = require("moment-timezone");
    const moment = global.nodemodule["moment-timezone"];


    let allThread = global.data.allThreadID || [],
        count = 1,
        cantSend = [],
        adminName = await Users.getNameUser(event.senderID),
        gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s"),
        msg = {
            body: `` + args.join(` `) + `\n『 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢 𝐚𝐝𝐦𝐢𝐧 』`,
            mentions: [{
                tag: adminName,
                id: event.senderID
            }]
        },
        hasAttach = false;


    const fs = global.nodemodule["fs"];
    let path;

    const callback = () => {
        let promises = []

        for (const idThread of allThread) {
            if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
            else {
                promises.push(new Promise(resolve => setTimeout(() => {
                    api.sendMessage(msg, idThread, (error, info) => {
                        if (error) cantSend.push(idThread);
                        else {
                            global.client.handleReply.push({
                                name: this.config.name,
                                from: 'admin',
                                messageID: info.messageID,
                                authorMessageID: event.messageID,
                                threadID: event.threadID,
                                author: event.senderID
                            })
                            count++;
                        }
                        resolve();
                    });
                }, 500)))
            }
        }

        Promise.all(promises).then(() => {
            if (hasAttach) fs.unlinkSync(path);
            return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);
        })
    }

    if (event.type == "message_reply" && event.messageReply.attachments[0]) {
        const request = global.nodemodule["request"];
        // const fs = require('fs')
        // const axios = require('axios')
        let response = await request.get(event.messageReply.attachments[0].url),
            pathname = response.uri.pathname,
            ext = event.messageReply.attachments[0].type == 'audio' ? 'm4a' : pathname.substring(pathname.lastIndexOf(".") + 1),
            path = requiredPath + `snoti_${Date.now()}.${ext}`;

        // var abc = event.messageReply.attachments[0].url;
        // let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

        response
            .pipe(fs.createWriteStream(path))
            .on("close", () => {
                msg.attachment = fs.createReadStream(path);
                hasAttach = true;
                callback()
            })
    } else callback()
  }