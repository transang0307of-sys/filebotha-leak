module.exports.config = {
    name: 'googleanh',
    version: '1.1.2',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Xem hình ảnh bằng từ khóa!',
    commandCategory: 'tiện ích',
    usages: '[từ khóa] | [số ảnh]',
    cooldowns: 3
};
const {
    get
} = require('axios')
module.exports.run = async function({
    api, event, args
}) {
    try {
        var out = a => api.sendMessage(a, event.threadID, event.messageID),
        arg = args.join(' ').split('|'),
        s = arg[0],
        l = !!arg[1]&&isFinite(arg[1])?((x=arg[1].trim(),x>50?50:x)||1): 1,
        atm = [],
        index = [],
        data = (await get(`https://apivip.nguyenlienmanh.com/v2/crawl/ggimg?s=${encodeURI(s)}&f=${l}&v=${this.config.version}`)).data;
        if (data.status != 200) return out(data.message);
        l = l > data.data.count?data.data.count: l;
        do {
            if (n = Math.floor(Math.random()*data.data.count), !index.includes(n)) index.push(n);
        } while (index.length != l);
        for (const i of index)try {
            atm.push((await get(data.data.url_image[i], {
                responseType: 'stream'
            })).data);
        }catch {
            continue
        };
        out({
            body: data.message, attachment: atm
        });
    }catch(err) {
        out(err.message)};
};
/** ({body: `=== [ 𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨 ] ===\n━━━━━━━━━━━━━━━━━━\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗮𝗱𝗱 ➞ 𝗧𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗮̀𝗺 𝗔𝗱𝗺𝗶𝗻\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗿𝗲𝗺𝗼𝘃𝗲 ➞ 𝗚𝗼̛̃ 𝘃𝗮𝗶 𝘁𝗿𝗼̀ 𝗮𝗱𝗺𝗶𝗻\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗮𝗱𝗱𝗻𝗱𝗵 ➞ 𝗧𝗵𝗲̂𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗮̀𝗺 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗛𝗼̂̃ 𝗧𝗿𝗼̛̣\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗿𝗲𝗺𝗼𝘃𝗲𝗻𝗱𝗵 ➞ 𝗚𝗼̛̃ 𝘃𝗮𝗶 𝘁𝗿𝗼̀ 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗹𝗶𝘀𝘁 ➞ 𝗫𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗾𝘁𝘃𝗼𝗻𝗹𝘆 ➞ 𝗕𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗻𝗱𝗵𝗼𝗻𝗹𝘆 ➞ 𝗕𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗵𝗼̂̃ 𝘁𝗿𝗼̛̣\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗼𝗻𝗹𝘆 ➞ 𝗕𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝘃𝗼̂ 𝗰𝘂̛̣𝗰\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗮𝗹𝗹𝗮𝗱𝗼𝗻𝗹𝘆 / 𝗮𝗱𝗺𝗼𝗻𝗹𝘆 ➞ 𝗕𝗮̣̂𝘁 - 𝗧𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗮𝗱𝗺𝗶𝗻 ( 𝗮𝗹𝗹𝗯𝗼𝘅 𝗵𝗼𝗮̣̆𝗰 1 𝗯𝗼𝘅 )\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗮𝗹𝗹𝗼𝗻𝗹𝘆 / 𝗼𝗻𝗹𝘆 ➞ 𝗕𝗮̣̂𝘁 - 𝗧𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝘃𝗼̂ 𝗰𝘂̛̣𝗰 ( 𝗮𝗹𝗹𝗯𝗼𝘅 / 1 𝗯𝗼𝘅 )\n→ 𝗠𝗢𝗗𝗘 - 𝗮𝗱𝗺𝗶𝗻 𝗶𝗯𝗿𝗶𝗲𝗻𝗴 ➞ 𝗕𝗮̣̂𝘁 𝘁𝗮̆́𝘁 𝗰𝗵𝗲̂́ đ𝗼̣̂ 𝗰𝗮̂́𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝘃𝗼̛́𝗶 𝗯𝗼𝘁\n━━━━━━━━━━━━━━━━━━\n𝗛𝗗𝗦𝗗 ➞ ${global.config.PREFIX}𝗔𝗗𝗠𝗜𝗡 𝗹𝗲̣̂𝗻𝗵 𝗰𝗮̂̀𝗻 𝗱𝘂̀𝗻𝗴 💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://No1-19Fc.manh10.repl.co/api/vdchill.php')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);  */