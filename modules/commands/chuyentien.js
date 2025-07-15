module.exports.config = {
    name: "chuyentien",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Chuyển tiền của bản thân cho ai đó",
    commandCategory: "kiếm tiền",
    usages: "pay @tag coins",
    cooldowns: 5,
     };

module.exports.run = async ({ event, api, Currencies, args, Users }) => {
let { threadID, messageID, senderID } = event;
if(event.type == "message_reply") { 
mention = event.messageReply.senderID
var name = (await Users.getData(mention)).name
if(!isNaN(args[0])) {
        const coins = parseInt(args[0]);
        let balance = (await Currencies.getData(senderID)).money;
        if (coins <= 0) return api.sendMessage('𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂',threadID,messageID);
        if (coins > balance) return api.sendMessage('𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐥𝐨̛́𝐧 𝐡𝐨̛𝐧 𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐛𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐜𝐨́!',threadID,messageID);
        else {
        return api.sendMessage({ body: `Đ𝐚̃ 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐜𝐡𝐨 ${name} ${args[0]} 𝐭𝐢𝐞̂̀𝐧`}, threadID, async () => {
            await Currencies.increaseMoney(mention, parseInt(coins));
                  Currencies.decreaseMoney(senderID, parseInt(coins));
            }, messageID);
        }
    } else return api.sendMessage('𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮𝐲𝐞̂̉𝐧',threadID,messageID); 
}
else {
const mention = Object.keys(event.mentions)[0];
let name = event.mentions[mention].split(" ").length
if(!mention) return api.sendMessage('𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐭𝐚𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐭𝐢𝐞̂̀𝐧 𝐜𝐡𝐨!',threadID,messageID);
else {
	if(!isNaN(args[0+ name])) {
		const coins = parseInt(args[0+ name]);
		let balance = (await Currencies.getData(senderID)).money;
        if (coins <= 0) return api.sendMessage('𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂',threadID,messageID);
		if (coins > balance) return api.sendMessage('𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐥𝐨̛́𝐧 𝐡𝐨̛𝐧 𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐛𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐜𝐨́!',threadID,messageID);
		else {
        return api.sendMessage({ body: 'Đ𝐚̃ 𝐜𝐡𝐮𝐲𝐞̂̉𝐧 𝐜𝐡𝐨 ' + event.mentions[mention].replace(/@/g, "") + ` ${args[0+ name]} 𝐜𝐨𝐢𝐧𝐬`}, threadID, async () => {
            await Currencies.increaseMoney(mention, parseInt(coins));
                  Currencies.decreaseMoney(senderID, parseInt(coins));
            }, messageID);
		}
	} else return api.sendMessage('𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐮𝐲𝐞̂̉𝐧',threadID,messageID);
}
}
}