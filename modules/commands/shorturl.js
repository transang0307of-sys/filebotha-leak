'user strict'
const configCommand = {
    name: 'shorturl',
    version: '10.02',
    hasPermssion: 02,
    credits: 'DC-Nam',
    description: 'short url',
    commandCategory: 'tiện ích',
    usages: '[]',
    cooldowns: 3
},
axios = require('axios');
async function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID),
    arr = arg.args.join(' ').split('\n'),
    data = [];
    try {
        for (const el of arr) {
            const res = (await axios.get(`\https://apivip.nguyenlienmanh.com/shortUrl/create?url=${el}`)).data;
            if (res.status) data.push(res.url);
        };
        out(data.join('\n'))
    } catch(e) {
        out(e)
    }
};

module.exports = {
    config: configCommand,
    run: runCommand
};