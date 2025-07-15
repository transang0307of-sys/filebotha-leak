module.exports.config = {
    name: 'nganhang',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'banking',
    commandCategory: 'kiếm tiền',
    usages: '[]',
    cooldowns: 3,
    dependencies: {
        axios: ''
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bank.jpeg")) request("https://i.imgur.com/iFZ8261.jpeg").pipe(fs.createWriteStream(dirMaterial + "bank.jpeg"));
}
const {
    post
} = require('axios');
const CN = `https://data.nguyenlienmanh.com/v2/banking`;
const fs = require("fs-extra");
const locaStr = n=>(+n).toLocaleString().replace(/,/g, '.');
module.exports.run = async function({
    api, event, args, Currencies
}) {
    try {
        var id = event.type == 'message_reply' ? event.messageReply.senderID: Object.keys(event.mentions).length != 0 ? Object.keys(event.mentions)[0]: event.senderID;
        switch (args[0]) {
            case 'register': case 'r': case 'dk': api.sendMessage((await post(`${CN}/register`, {
                fb_id: event.senderID, stk: args[1], name_stk: args.splice(2).join(' ')})).data.message, event.threadID, event.messageID); break;
                case 'info': case 'i':
                    id = isFinite(args[1]) ? args[1]: id;
                    api.sendMessage((await post(`${CN}/check`, {
                        id
                    })).data.message, event.threadID, event.messageID); break;
                    case 'sendmoney': case 'send': case 'gửi': {
                        const {
                            money
                        } = await Currencies.getData(event.senderID);
                        if (!!args[1] && money < args[1]) return api.sendMessag(`Hiện tại bạn chỉ còn ${locaStr(money)}$ không đủ ${locaStr(args[1])}$ để gửi vào banking!`, event.threadID, event.messageID);
                        const res = await post(`${CN}/sendmoney`, {
                            id: event.senderID, money: args[1]});
                        api.sendMessage(res.data.message, event.threadID, () => res.data.status == 201 ? Currencies.decreaseMoney(event.senderID, +args[1]): '', event.messageID);
                    }; break;
                        case 'getmoney': case 'get': case 'rút':
                            const res = await post(`${CN}/getmoney`, {
                                id: event.senderID, money: args[1]});
                            api.sendMessage(res.data.message, event.threadID, () => res.data.status == 201 ? Currencies.increaseMoney(event.senderID, +args[1]): '', event.messageID);
                            break;
                            case 'paymoney': case 'pay': case 'p': {
                                id = isFinite(args[2]) ? args[2]: id;
                                const res = await post(`${CN}/paymoney`, {
                                    id: event.senderID, id_p: id, money_p: args[1]});
                                api.sendMessage(res.data.message, event.threadID, () => {
                                    if (res.data.status == 201) {
                                        api.sendMessage(res.data.author.logged, res.data.author.fb_id)
                                        return api.sendMessage(res.data.dest.logged, res.data.dest.fb_id);
                                    };
                                });
                            };
                                break;
                                case 'topmoney': case 'top': api.sendMessage((await post(`${CN}/topmoney`, {
                                    id: event.senderID
                                })).data.message,
                                    event.threadID); break;
                                    default: api.sendMessage({body:`[=======『 𝗠𝗜𝗥𝗔𝗜 𝗕𝗔𝗡𝗞 』=======]\n━━━━━━━━━━━━━━━━━━\n[👇] 𝗛𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗯𝗲̂𝗻 𝗱𝘂̛𝗼̛́𝗶\n\n→ ${global.data.threadData.get(event.threadID).PREFIX || global.config.PREFIX}𝗻𝗴𝗮𝗻𝗵𝗮𝗻𝗴 𝗿𝗲𝗴𝗶𝘀𝘁𝗲𝗿 (𝗱𝗸) : đ𝗮̆𝗻𝗴 𝗸𝗶́ 𝘃𝗮̀𝗼 𝗻𝗴𝗮̂𝗻 𝗵𝗮̀𝗻𝗴: 𝗻𝗴𝗮𝗻𝗵𝗮𝗻𝗴 𝗿𝗲𝗴𝗶𝘀𝘁𝗲𝗿 𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴 𝘀𝗲𝗻 ( 𝘁𝗿𝗼𝗻𝗴 đ𝗼́ 𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴 𝗹𝗮̀ 𝗦𝗧𝗞 𝗯𝗮̆́𝘁 𝗯𝘂𝗼̣̂𝗰 𝗹𝗮̀ 𝟴 𝘀𝗼̂́ 𝗻𝗴𝗮̂̃𝘂 𝗻𝗵𝗶𝗲̂𝗻 𝘃𝗮̀ 𝘀𝗲𝗻 𝗹𝗮̀ 𝘁𝗲̂𝗻 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 )\n→ ${global.data.threadData.get(event.threadID).PREFIX || global.config.PREFIX}𝗻𝗴𝗮𝗻𝗵𝗮𝗻𝗴 𝘀𝗲𝗻𝗱: ${global.data.threadData.get(event.threadID).PREFIX || global.config.PREFIX}𝗻𝗴𝗮𝗻𝗵𝗮𝗻𝗴 𝘀𝗲𝗻𝗱 𝟵𝟵𝟵 ( 𝘁𝗿𝗼𝗻𝗴 đ𝗼́ 𝟵𝟵𝟵 𝗹𝗮̀ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝗮̂̀𝗻 𝗴𝘂̛̉𝗶 𝘃𝗮̀𝗼 𝗻𝗴𝗮̂𝗻 𝗵𝗮̀𝗻𝗴 )\n→ ${global.data.threadData.get(event.threadID).PREFIX || global.config.PREFIX}𝗻𝗴𝗮𝗻𝗵𝗮𝗻𝗴 𝗿𝘂́𝘁: ${global.data.threadData.get(event.threadID).PREFIX || global.config.PREFIX}𝗻𝗴𝗮𝗻𝗵𝗮𝗻𝗴 𝗿𝘂́𝘁 𝟵𝟵𝟵 ( 𝘁𝗿𝗼𝗻𝗴 đ𝗼́ 𝟵𝟵𝟵 𝗹𝗮̀ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝗮̂̀𝗻 𝗿𝘂́𝘁 )\n→ ${global.data.threadData.get(event.threadID).PREFIX || global.config.PREFIX}𝗻𝗴𝗮𝗻𝗵𝗮𝗻𝗴 𝗶𝗻𝗳𝗼: 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗯𝗮̣𝗻 𝗯𝗲̀ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗰𝘂̉𝗮 𝗵𝗼̣\n→ ${global.data.threadData.get(event.threadID).PREFIX || global.config.PREFIX}𝗻𝗴𝗮𝗻𝗵𝗮𝗻𝗴 𝘁𝗼𝗽: 𝘅𝗲𝗺 𝘁𝗼𝗽 𝘁𝗶𝗲̂̀𝗻 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 💸`,
 attachment: fs.createReadStream(__dirname + `/noprefix/bank.jpeg`)}, event.threadID, event.messageID);
                                    };
                            } catch(e) {
                                api.sendMessage(`${e}`,
                                    event.threadID,
                                    event.messageID);
                        };
                    };