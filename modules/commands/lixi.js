/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
const fs = require("fs");
module.exports.config = {
    name: "lixi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie", //Sang Nguyễn edit mod, Code working của diện
    description: "Đầu xuân năm mới",
    commandCategory: "game",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "baolixi.png")) request("https://imgur.com/Y03gw5v.png").pipe(fs.createWriteStream(dirMaterial + "baolixi.png"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("𝐂𝐨́ 𝐥𝐢𝐞̂𝐦 𝐬𝐢̉ 𝐱𝐢́𝐮 𝐢𝐢𝐢 𝐭𝐫𝐨̛̀𝐢 𝐥𝐢̀ 𝐱𝐢̀ 𝐜𝐮̉𝐚 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐚 𝐦𝐚̀ 𝐥𝐚̂́𝐲 🎋", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 100) + 80; 
var b = Math.floor(Math.random() * 100) + 80; 
var c = Math.floor(Math.random() * 100) + 80; 
var x = Math.floor(Math.random() * 100) + 80; 
var y = Math.floor(Math.random() * 100) + 80; 
var f = Math.floor(Math.random() * 100) + 50; 

  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("February 1, 2023 00:00:00") - Date.parse(new Date()),
            m = Math.floor( (t/1000/60) % 60 ),
            h = Math.floor( (t/(1000*60*60)) % 24 ),
            d = Math.floor( t/(1000*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = `🧧𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 ${a}$ 𝐤𝐡𝐢 𝐦𝐨̛̉ 𝐩𝐡𝐨𝐧𝐠 𝐥𝐢̀ 𝐱𝐢̀ 𝐧𝐚̀𝐲🏮\n🌸𝐓𝐞̂́𝐭 𝐀̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧\n» ${d}𝐧𝐠𝐚̀𝐲 ${h}𝐠𝐢𝐨̛̀ ${m}𝐩𝐡𝐮́𝐭🎋` ;
                await Currencies.increaseMoney(e.senderID, parseInt(a)); 
                break;             
                case "2": msg = `🧧𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 ${b}$ 𝐤𝐡𝐢 𝐦𝐨̛̉ 𝐩𝐡𝐨𝐧𝐠 𝐥𝐢̀ 𝐱𝐢̀ 𝐧𝐚̀𝐲🎐\n🌸𝐓𝐞̂́𝐭 𝐀̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧\n» ${d}𝐧𝐠𝐚̀𝐲 ${h}𝐠𝐢𝐨̛̀ ${m}𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(b)); 
                break;
                case "3": msg = `🧧𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 ${c}$ 𝐤𝐡𝐢 𝐦𝐨̛̉ 𝐩𝐡𝐨𝐧𝐠 𝐥𝐢̀ 𝐱𝐢̀ 𝐧𝐚̀𝐲🎐\n🌸𝐓𝐞̂́𝐭 𝐀̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧\n» ${d}𝐧𝐠𝐚̀𝐲 ${h}𝐠𝐢𝐨̛̀ ${m}𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(c)); 
                break;
                case "4": msg = `🧧𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 ${x}$ 𝐤𝐡𝐢 𝐦𝐨̛̉ 𝐩𝐡𝐨𝐧𝐠 𝐥𝐢̀ 𝐱𝐢̀ 𝐧𝐚̀𝐲🎐\n🌸𝐓𝐞̂́𝐭 𝐀̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧\n» ${d}𝐧𝐠𝐚̀𝐲 ${h}𝐠𝐢𝐨̛̀ ${m}𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(x)); 
                break;
                case "5": msg = `🧧𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 ${y}$ 𝐤𝐡𝐢 𝐦𝐨̛̉ 𝐩𝐡𝐨𝐧𝐠 𝐥𝐢̀ 𝐱𝐢̀ 𝐧𝐚̀𝐲🎐\n🌸𝐓𝐞̂́𝐭 𝐀̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧\n» ${d}𝐧𝐠𝐚̀𝐲 ${h}𝐠𝐢𝐨̛̀ ${m}𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(y)); 
                break;
                case "6": msg = `🧧𝐂𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐛𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 ${f}$ 𝐤𝐡𝐢 𝐦𝐨̛̉ 𝐩𝐡𝐨𝐧𝐠 𝐥𝐢̀ 𝐱𝐢̀ 𝐧𝐚̀𝐲🎐\n🌸𝐓𝐞̂́𝐭 𝐀̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧\n» ${d}𝐧𝐠𝐚̀𝐲 ${h}𝐠𝐢𝐨̛̀ ${m}𝐩𝐡𝐮́𝐭🎋`; 
                await Currencies.increaseMoney(e.senderID, parseInt(f)); 
                break;
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("🎋Vui lòng nhập 1 con số", e.threadID, e.messageID);
            if (choose > 6 || choose < 1) 
            return api.sendMessage("🎋Lựa chọn không nằm trong danh sách.", e.threadID, e.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "🎋Chưa update...") {
                msg = "🎋Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("February 1, 2023") - Date.parse(new Date()),
    d = Math.floor( t/(1000*60*60*24) ),
    h = Math.floor( (t/(1000*60*60)) % 24 ),
    m = Math.floor( (t/1000/60) % 60 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (60000 * 60000 ))/24),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(`🧧𝐁𝐚̣𝐧 𝐯𝐮̛̀𝐚 𝐧𝐡𝐚̣̂𝐧 𝐥𝐢̀ 𝐱𝐢̀ 𝐫𝐨̂̀𝐢, 𝐯𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐪𝐮𝐚𝐲 𝐥𝐚̣𝐢 𝐯𝐚̀𝐨 𝐧𝐠𝐚̀𝐲 𝐦𝐚𝐢 🎋.\n🌸𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d}𝐧𝐠𝐚̀𝐲 ${h}𝐠𝐢𝐨̛̀ ${m}𝐩𝐡𝐮́𝐭🎋`, e.threadID, e.messageID); // Đoạn này ae có thể để quay lại sau ${housr}giờ ${minutes}phút ${seconds}giây
    }
    else {    
        var msg = {
            body: "ㅤㅤ 🏮=== 𝐋𝐈̀ 𝐗𝐈̀ ===🏮" +
                `\n🌸𝐓𝐞̂́𝐭 𝐚̂𝐦 𝐥𝐢̣𝐜𝐡 𝐜𝐨̀𝐧 » ${d}𝐧𝐠𝐚̀𝐲 ${h}𝐠𝐢𝐨̛̀ ${m}𝐩𝐡𝐮́𝐭🎋` +
                "\n\n𝟏. 𝐁𝐚𝐨 𝐥𝐢̀ 𝐱𝐢̀ 𝟏 🧧" +
                "\n𝟐. 𝐁𝐚𝐨 𝐥𝐢̀ 𝐱𝐢̀ 𝟐 🧧" +
                "\n𝟑. 𝐁𝐚𝐨 𝐥𝐢̀ 𝐱𝐢̀ 𝟑 🧧" +
                "\n𝟒. 𝐁𝐚𝐨 𝐥𝐢̀ 𝐱𝐢̀ 𝟒 🧧" +
                "\n𝟓. 𝐁𝐚𝐨 𝐥𝐢̀ 𝐱𝐢̀ 𝟓 🧧" +
                "\n𝟔. 𝐁𝐚𝐨 𝐥𝐢̀ 𝐱𝐢̀ 𝟔 🧧" +
                `\n\n🧨𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐡𝐨̣𝐧 𝐛𝐚𝐨 𝐥𝐢̀ 𝐱𝐢̀ 𝐦𝐮𝐨̂́𝐧 𝐧𝐡𝐚̣̂𝐧.`,
                attachment: fs.createReadStream(__dirname + `/cache/baolixi.png`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}