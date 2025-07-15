module.exports.config = {
    name: 'tiktok2',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam',
    description: 'tiktok',
    commandCategory: 'tiện ích',
    usages: '[]',
    cooldowns: 3
};
const {
    get
} = require('axios'),
{
    createReadStream,
    mkdirSync,
    rmdirSync,
    unlinkSync
} = require('fs-extra'),
{
    image
} = require('image-downloader'),
 roof = n => +n != +Math.floor(n) ? +Math.floor(n) + 1: +n,
streamURL = async a => (await get(a, {
    responseType: 'stream'
})).data;
module.exports.run = async function({
    api, event, args
}) {
    try {
        if (args[0] == 'post') return runListUserPost(api, event, (await get(`https://nguyenlienmanh.com/v2/tiktok/tikwm.json?user=${args[1]}`)).data.data.videos, 6, 1, true, event.senderID);
    }catch(err) {
        api.sendMessage(`${err}`, event.threadID, event.messageID);
    };
};
module.exports.handleReaction = function({
    handleReaction: $, api, event
}){
    if($.case == 'runListUserPost') return runListUserPost(api, event, $.data, 6,1,$.type?false:true,$.author);
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}){
    try{
    if($.case == 'runListUserPost') {
        if(['list'].includes(event.args[0])){
            if(event.args[1] > roof($.data.length/6) || event.args[1]<1 || isNaN(event.args[1])) return api.sendMessage(`Trang ${event.args[1]} không nằm trong danh sách!`, event.threadID, event.messageID); else return runListUserPost(api, event, $.data, 6,+event.args[1],$.type ,$.author);
        } else return api.sendMessage({body: $.type?infoVideoUserPost($.data[event.args[0]-1]):infoMusicUserPost($.data[event.args[0]-1].music_info),attachment: await downStreamURL($.data[event.args[0]-1][$.type?'play':'music'],__dirname+`/cache/${event.messageID}.${$.type?'mp4':'mp3'}`)}, event.threadID, () => unlinkSync(__dirname+`/cache/${event.messageID}.${$.type?'mp4':'mp3'}`), event.messageID);
    };
    }catch(err){
      api.sendMessage(`${err}`, event.threadID, event.messageID);  
    };
};
async function downStreamURL(a, b) {
    await image({
        url: a, dest: b
    });
    return createReadStream(b);
};
function infoMusicUserPost(a){
    return `[===[ MUSIC INFO ]===]\n\n- ID: ${a.id}\n- Tiêu Đề: ${a.title}\n- Thời Lượng Nhạc: ${a.duration}s\n- Nhạc Gốc: ${a.original}\n- Tác Giả: ${a.author}\n- Album: ${a.album}`;
};
 function infoVideoUserPost(a){
     return `[===[ VIDEO INFO ]===]\n\n- ID: ${a.video_id}\n- Tiêu Đề: ${a.title}\n- Lượt Thích: ${a.digg_count}\n- Lượt Bình Luận: ${a.comment_count}\n- Lượt Chia sẻ: ${a.share_count}\n- Lượt Tải: ${a.download_count}\n- Thời Lượng: ${a.duration}s\n- Tác Giả:\n • Tên: ${a.author.nickname}\n • UID: ${a.author.unique_id}`;
 };
 async function runListUserPost(a, b, c, d, e,g,h) {
     const dir = __dirname + '/cache/downStreamURL_'+b.messageID;
    mkdirSync(dir);
    var txt = '',
    atm = [],
    i = (d*e)-d,
    l = c.length;
    for (;i<d*e;i++){
        const j = g?c[i]:c[i].music_info;
        if(!j)break;
        txt += `${i+1}. ${j.title} (${j.duration}s)\n`;
        atm.push(await downStreamURL(g?j.origin_cover:j.cover, `${dir}/${g?j.video_id:j.id}.jpg`));
        };
        txt+=`\nTrang [${e}/${roof(c.length/d)}]\n\n[reply] + [STT] để tải ${g?'video':'music'}.\n[reply] + [list] + [STT] để chuyển tab.\n[reaction] để chuyển qua danh sách ${g?'music':'video'}`;
        a.sendMessage({body: txt, attachment: atm}, b.threadID, (err, data)=> {
            const opt = {
                name: 'tiktok2', messageID: data.messageID, author: h, type: g, 'case': 'runListUserPost', data: c
            };
            global.client.handleReaction.push(opt), global.client.handleReply.push(opt);
        rmdirSync(dir, {
            recursive: true
        })
        });
        };