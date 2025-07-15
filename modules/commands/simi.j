let
r = require('axios').get,
api = 'http://de34.mwnodes.site:25957/v2/simi/';

class Module {
    constructor(a) {
        this.config = a;
    };
    run() {};
    handleEvent(o) {
        let
        msg = o.event.body,
        reply = [
            'nghe nè',
            'simi đây'
        ];

        if (!!msg)msg = msg.toLowerCase(); else return;
        if ([
            'hey simi',
            'simi ơi',
          'bot',
          'bot on không'
        ].includes(msg)) return o.api.sendMessage(reply[Math.random()*reply.length<<0], o.event.threadID, (err, data)=>(data.name = this.config.name, data.status = true, global.client.handleReply.push(data)), o.event.messageID);
    };
    handleReply = async(o)=> {
        let
        _ = o.handleReply,
        $ = o.api.sendMessage,
        msg = o.event.body,
        i;

        if (!!msg)msg = encodeURI(msg); else return;
        if (_.status)i = (await r(`${api}get?ask=${msg}`)).data; else i = (await r(`${api}add?ask=${_.ask}&answer=${msg}`)).data;

        $(i.msg, o.event.threadID, (err, data)=>(data.name = this.config.name, data.status = i.status, data.ask = msg, global.client.handleReply.push(data)), o.event.messageID);
    };
};

module.exports = new Module({
    name: 'simi',
    version: '1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: '.',
    commandCategory: 'người dùng',
    usages: '[.]',
    cooldowns: 0,
});