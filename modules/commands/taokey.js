const configCommand = {
    name: 'taokey',
    version: '1.1.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'beta',
    commandCategory: 'BOT VIP',
    usages: '[]',
    cooldowns: 3
},
Axios = require('axios');

async function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID);
    try {
        const configRequest = {
            url: `https://api-basil-2023-s.basil2k4.repl.co/apikey?type=register&name=${Math.random()*999999999}&apikey=BASIL`,
            method: 'get'
        };
        const response = await Axios(configRequest);
        out(Object.entries(response.data).map(d => `- ${d[0]}: ${d[1]}`).join('\n'));
    } catch (e) {
        out(e)}
};

module.exports = {
    config: configCommand,
    run: runCommand
}