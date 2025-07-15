module.exports.config = {
    name: 'yahoo',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Xem hình ảnh từ yahoo search bằng từ khóa!',
    commandCategory: 'Hình ảnh',
    usages: '[số ảnh] + [từ khóa]',
    cooldowns: 3
};
const {
    get
} = require('axios')
module.exports.run = async function({
    api, event, args
}) {
    try {
        var l = isNaN(args[0])?1: (args[0] > 50?50: args[0]),
        s = args.join(' ');
        s = isNaN(args[0])?s: s.replace(l, '');
        const res = await get(`https://api.nguyenlienmanh.com/v2/crawl/yahoo-image?s=${encodeURI(s)}`);
        if (res.data.status != 200) return api.sendMessage(res.data.message, event.threadID, event.messageID);
        const attachment = [],
        index = [],
        u = res.data.data;
        l = l > u.count?u.count: l;
        do {
            const n = Math.floor(Math.random()*l);
            if (!index.includes(n)) index.push(n);
        } while (index.length != l);
        for (const i of index)try {
            const res_ = await get(u.url_image[i], {
                responseType: 'stream'
            });
            if (res_.status == 200) attachment.push(res_.data);
        }catch {
            continue;
        };
        api.sendMessage({
            body: res.data.message, attachment
        }, event.threadID, event.messageID);
    }catch(e) {
        api.sendMessage(`${e}`, event.threadID, event.messageID)};
};