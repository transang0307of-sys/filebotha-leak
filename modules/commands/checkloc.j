module.exports.config = {
    name: 'checkloc',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'Kiểm tra tương tác trong nhóm và lọc!',
    commandCategory: 'Nhóm',
    usages: 'day/week/all',
    cooldowns: 3
};
const {
    readFileSync,
    readdirSync,
    writeFileSync,
    existsSync,
    mkdirSync,
    createReadStream
} = require('fs-extra');
const axios = require('axios');
const sortCompare = (k, k2) => (a, b) => (a[k][k2] > b[k][k2] ? 1: a[k][k2] < b[k][k2] ? -1: 0)*-1;
const roof = n => +n != +Math.floor(n) ? +Math.floor(n) + 1: +n;
const localeNum = n => ((+n).toLocaleString()).replace(/,/g, '.');
const checkAdmin = (a, b) => global.data.threadInfo.get(a).adminIDs.some(i => i.id == b);
const fullTime = a =>  new Date(a).toLocaleString();
const textDWA = a => a == 'day' ? 'Hôm Nay': a == 'week' ? 'Tuần Này': a == 'all' ? 'tất cả': tue;
const dirMain = __dirname + '/count-JRT';
const newUser = (a, b) => new Object({
    userID: a, messenger: {
        day: 0, week: 0, all: 0
    }, timestamp: b
});
const convertTime =d=>`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
module.exports.onLoad = function ({api}) {
    global.botID = api.getCurrentUserID();
    if (!existsSync(dirMain)) mkdirSync(dirMain);
    if(!global.interval_checktt)global.interval_checktt = (()=>{
        var date = new Date(Date.now()+25200000).getDay();
    setInterval(function() {
        const dateNow = new Date(Date.now()+25200000).getDay();
        if (dateNow != date) {
            date = dateNow;
            const type = dateNow == 1 ? 'week': 'day';
            var directory = readdirSync(dirMain);
            directory = directory.filter(i => i.endsWith('.json'));
            for (const file of directory) try{
                const tid = file.replace('.json', '');
                const pathJ = `${dirMain}/${file}`;
               try{var data = JSON.parse(readFileSync(pathJ));}catch{var data = {user:[]}};
              if(data.user.length == 0)continue;
                data.user.sort(sortCompare('messenger', type));
                const length = data.user.length < 1000 ? data.user.length: 1000;
                var txt = `=== 『 Top ${length} Tương Tác ${type == 'day' ? 'hôm qua': 'tuần qua'} 』\n━━━━━━━━━━━━━━━\n`.toUpperCase();
                for (var i = 0; i < length; i++) try{
                    const {
                        userID = 0,
                        messenger = 0
                    } = data.user[i] || {};
                    txt += `[🏆] ➜ Top: ${i+1}\n[👤] ➜ Tên: ${global.data.userName.get(userID)}\n[💬] ➜ Tin Nhắn: ${messenger[type]}\n\n`;
                }catch{};
                data.user = (data.user||[]).map(i => {
          if(!i.messenger)i.messenger = {};
                    i.messenger[type] = 0;
                    return i;
                });
                writeFileSync(pathJ, JSON.stringify(data, null, 4));
                api.sendMessage(txt, tid);
            }catch{};
        };
    }, 100);
    })()
};
module.exports.handleEvent = function ({
    api, event
}) {
    if (!event.isGroup || event.senderID == global.botID) return;
    const pathJ = `${dirMain}/${event.threadID}.json`;
    if (!existsSync(pathJ)) writeFileSync(pathJ, '{}');
    const data = JSON.parse(readFileSync(pathJ));
    if (!data.user) data.user = [];
    const allIDMem = event.participantIDs.filter(i => i != global.botID);
    if (data.user.length != allIDMem.length) {
        for (const id of allIDMem) if (!data.user.find(i => i.userID == id)) data.user.push(newUser(id, Date.now()+25200000));
        data.user = data.user.filter(i => allIDMem.includes(i.userID));
    };
    const fin = data.user.find(i => i.userID == event.senderID);
    if (fin) ++fin.messenger.day,
    ++fin.messenger.week,
    ++fin.messenger.all;
    writeFileSync(pathJ, JSON.stringify(data, null, 4));
};
module.exports.run = function ({
    api, event, args
}) {
    const uid = event.type == 'message_reply' ? event.messageReply.senderID: !!Object.keys(event.mentions)[0] ? Object.keys(event.mentions)[0]: event.senderID;;
    const allIDMem = event.participantIDs.filter(i => i != global.botID);
    const pathJ = `${dirMain}/${event.threadID}.json`;
    const data = JSON.parse(readFileSync(pathJ));
    const allMem = data.user.filter(i => {
        if (allIDMem.includes(i.userID)) {
           i.userName = global.data.userName.get(i.userID);
           return i;
        };
        });
    const fini = allMem.find(i => i.userID == uid);
    const args0 = !args[0] ? '': args[0].toLowerCase();
    allMem.sort(sortCompare('messenger', args0||'all'));
    switch (args0) {
        case 'day': case 'week': case 'all': {
            var txt = '';
            for (var i = 0; i < allMem.length; i++) txt += `=== 『 Kiểm Tra Tương Tác Nhóm 』\n━━━━━━━━━━━━━━━━\n${i+1}.\n[👤] ➜ Tên: ${allMem[i].userName}\n[💬] ➜ Số tin nhắn: ${localeNum(allMem[i].messenger[args0])}\n\n`;
            txt += `\n[📝] ➜ Tổng tin nhắn: ${allMem.map(el=>el.messenger[args0]).reduce((a,b)=>a+b)}${checkAdmin(event.threadID, event.senderID) ?`\n━━━━━━━━━━━━━━━━\n[🗓️] ➜ Ngày check: ${convertTime(new Date(Date.now()+25200000))}\n\n[📌] ➜ Phản hồi tin nhắn này kèm [ Lọc </>/= ] hoặc phản hồi theo số thứ tự 1 2 3 để lọc thành viên!`: ''}`;
            api.sendMessage(txt, event.threadID, (err, msg) => global.client.handleReply.push({
              name: this.config.name, messageID: msg.messageID, author: event.senderID, data: {allMem, args0}
            }), event.messageID);
        };
            break;
        default: (async()=>api.sendMessage({body:`=== 『 Kiểm Tra Tương Tác Nhóm 』\n━━━━━━━━━━━━━━━━\n[🔰] ➜ Nhóm: ${global.data.threadInfo.get(event.threadID).threadName}\n[👤] ➜ Tên: ${fini.userName}\n[💬] ➜ Tổng tin nhắn\n[🌥️] ➜ Hôm nay: ${localeNum(fini.messenger.day)}\n[🗓️] ➜ Tuần này: ${localeNum(fini.messenger.week)}\n[📌] ➜ Tất cả: ${localeNum(fini.messenger.all)}\n[🏆] ➜ Xếp hạng thứ: ${allMem.findIndex(el=>el.userID==uid)+1}\n[⏱️] ➜ Thời gian bắt đầu tương tác: ${fullTime(fini.timestamp)}`,attachment: ((res, path = __dirname+'/cache/1.png')=>{writeFileSync(path, res.data);return createReadStream(path)})(await require('axios').get(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,{ responseType: 'arraybuffer'})) }, event.threadID, event.messageID))();
        break;
      };
    };
module.exports.handleReply = async function ({ handleReply: $, api, event
    }) {
        const {args} = event;
        if (event.senderID != $.author || !checkAdmin(event.threadID, event.senderID)) return;
        if (args[0].toLowerCase() == 'lọc') {
            var txt = '', adf = [], count = 0;
            for (const {userID, userName, messenger, timestamp} of $.data.allMem) {
                const msg = messenger[$.data.args0];
                const dk = args[1] == '<' ? msg < args[2]: args[1] == '>' ? msg > args[2]: args[1] == '=' ? msg == args[2]: msg == 0;
                if (dk) {
                    txt += `${++count}.\n[👤] ➜ Tên: ${userName}\n[💬] ➜ Tin nhắn ${textDWA($.data.args0)}: ${localeNum(msg)}\n[🌐] ➜ Linkfb: www.facebook.com/${userID}\n[⏱️] ➜ Thời gian tạo dữ liệu: ${fullTime(timestamp)}\n\n`;
                    adf.push(userID);
                };
            };
            txt += `━━━━━━━━━━━━━━━━\n[📌] ➜ Thả cảm xúc để tiến hành xóa ( ${adf.length} ) thành viên có số tin nhắn ${textDWA($.data.args0)} ${args[1] || '='} ${localeNum(args[2]) || 0}`;
            api.sendMessage(txt, event.threadID, (err, msg) => global.client.handleReaction.push({
                name: this.config.name, messageID: msg.messageID, author: event.senderID, adf
            }), event.messageID);
        } else {
          if (!checkAdmin(event.threadID, global.botID)) return api.sendMessage(`[📌] ➜ Vui lòng thêm bot làm quản trị viên nhóm rồi thử lại!`, event.threadID);
    for (const i of args) {
        try {
          let mem = $.data.allMem[i-1];
          if (isFinite(i) && !!mem) await api.removeUserFromGroup(mem.userID, event.threadID);
        }catch{}
    };
        }
    };
module.exports.handleReaction = async function ({ handleReaction: $, api, event }) {
    if (event.userID != $.author) return;
    if (!checkAdmin(event.threadID, global.botID)) return api.sendMessage(`[📌] ➜ Vui lòng thêm bot làm quản trị viên nhóm rồi thử lại!`, event.threadID);
    var count = 0
    for (const id of $.adf) {
        try {
           await api.removeUserFromGroup(id, event.threadID);
        }catch{++count}
    };
    api.sendMessage(`[✅] ➜ Lọc thành công ${$.adf.length-count} thành viên!\n[❌] ➜ Lọc thất bại ${count} thành viên!`, event.threadID, $.messageID);
};