this.config = {
    name: 'tds',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'Dương Công Nam',
    description: 'traodoisub.com',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3
}

let host = 'traodoisub.com';
let cheerio = require('cheerio');
let axios = require('axios').create({
    baseURL: `https://${host}`,
});

let _ = '₋'.repeat(15);
let listAcc = (['PHPSESSID=76e802934b490ebd4219ba6415ed528c', 'PHPSESSID=961e6c622a889e5f61f236fb74b7c159']);
let opt = {
    headers: {
        'X-Requested-With': 'Axios',
        Origin: `https://${host}`,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.98 Mobile Safari/537.36',
        Accept: 'application/json, text/javascript, */*; q=0.01',
    },
};

this.run = async(o)=> {
    let send = msg=>o.api.sendMessage(msg, o.event.threadID, o.event.messageID);

    if (!o.args[0]) {
        let data = [];
        for (let $ of listAcc)data.push((await axios.get('/view/setting/load.php', (opt.headers.cookie = $, opt)).catch(reject=>reject.response)).data);

        return send(data.map(($, i)=>`${i+1}. ${$.user} (${$.xu} 💰)\n${_}`).join('\n'));
    };

    if (/^ttt$/.test(o.args[0]))send(``)
};