let axios = require('axios');
let fs = require('fs');

if (!fs.existsSync(__dirname+'/bot'))fs.mkdirSync(__dirname+'/bot');

let streamURL = (url, type)=>axios.get(url, {
  responseType: 'arraybuffer'
}).then(res=> {
  let path = __dirname+'/bot/'+Date.now()+'.'+type;

  fs.writeFileSync(path, res.data);
  setTimeout(p=>fs.unlinkSync(p), 1000*60, path);

  return fs.createReadStream(path);
});
let data = {};
let path = __dirname+'/bot/autorep.json'
let save = ()=>fs.writeFileSync(path, JSON.stringify(data));
if (!fs.existsSync(path))save(); else data = require(path);

exports.config = {
  name: 'autorep',
  version: '0.0.1',
  hasPermssion: 1,
  credits: 'DC-Nam',
  description: 'Cài câu trả lời cho nhóm!',
  commandCategory: 'Hệ thống quản trị viên',
  usages: '.../câu hỏi | câu trả lời | link ảnh/video/gif',
  cooldowns: 3
};
exports.run = function(o) {
  let input = o.args.join(' ').split('|').filter($=>!!$).map($=>$.trim());
  let tid = o.event.threadID;
  let send = (msg, callback)=>o.api.sendMessage(msg, tid, callback, o.event.messageID);

  let[key, value, url] = input;

  if (o.args[0] == 'del')return send(`[⚜️] ➜ Phản hồi tin nhắn này kèm từ khóa muốn xóa!`, (err, res)=> {
    res.name = exports.config.name,
    res.type = '1',
    res.event = o.event,
    global.client.handleReply.push(res);
  });
  if (!/2|3/.test(input.length))return send(`=== 『 SUPPORT 』 ===\n━━━━━━━━━━━━━━━━\n[⚜️] ➜ Vui Lòng Nhập Như Sau: câu hỏi | câu trả lời | link ảnh/video/gif nếu cần gửi kèm câu trả lời\n\n[❗] ➜ Ví dụ:\n${global.config.PREFIX}${this.config.name} KFC | Hà \n\n${global.config.PREFIX}${this.config.name} KFC | Hà | https://i.imgur.com/MQTcbhp.mp4\n\n[❎] ➜ ${global.config.PREFIX}${this.config.name} del: để xóa autorep đã cài!`);
  if (typeof url == 'string' && !/^http(s|):\/\//.test(url))return send(`[⚜️] ➜ Invalid URl`);
  if (!data[tid])data[tid] = {};
  if (!data[tid][key]) {
    data[tid][key] = [{
      text: value,
      url,
      timestamp: Date.now()+25200000,
    }];
    send(`[⚜️] ➜ Đã thêm auto rep mới!`);
  } else {
    data[tid][key].push({
      text: value,
      url,
      timestamp: Date.now()+25200000,
    });
    send(`[⚜️] ➜ Đã thêm câu trả lời vào từ khóa "${key}"`);
  };
  save();
};
exports.handleEvent = async function(o) {
  let key = o.event.body || '';
  let tid = o.event.threadID;
  let send = (msg, callback)=>o.api.sendMessage(msg, tid, callback, o.event.messageID);
  
  if (!data[tid])data[tid] = {};
  if (!data[tid][key])return;

  let value = data[tid][key][Math.random()*data[tid][key].length<<0];
  let form_msg = {};
  form_msg.body = value.text;
  if (typeof value.url == 'string') {
    form_msg.attachment = [];
    for (let url of value.url.split(','))try {
      form_msg.attachment.push(await streamURL(url, url.split('.').pop()));
    }catch {
      continue
    };
  };
  send(form_msg);
};
exports.handleReply = function(o) {
  let _ = o.handleReply;
  let key = o.event.body;
  let tid = o.event.threadID;
  let send = (msg, callback)=>o.api.sendMessage(msg, tid, callback, o.event.messageID);

  if (_.event.senderID != o.event.senderID)return;

  switch (_.type) {
    case '1': {
      if (!data[tid][key])return send(`[⚜️] ➜ Từ khóa auto rep không có trong dữ liệu!`);
      send(`[⚜️] ➜ Từ khóa "${key}" có ${data[tid][key].length} câu trả lời\n\n${data[tid][key].map(($, i)=>`${i+1} » ${$.text}`).join('\n')}\n━━━━━━━━━━━━━━━━\n[💬] ➜ Phản hồi tin nhắn theo số thứ tự để xóa câu trả lời tương ứng hoặc "all"`, (err, res)=> {
        res.name = exports.config.name,
        res.type = '2',
        res.event = o.event,
        global.client.handleReply.push(res);
      });
    };
      break;
    case '2': {
      if (key.toLowerCase() == 'all') {
        delete data[tid][_.event.body];
      } else for(let i = o.event.args.length - 1; i >= 0; i--) {
        let index = o.event.args[i]-1;
        if (isFinite(index) && !!data[tid][_.event.body][index])data[tid][_.event.body].splice(index, 1);
      };
      save();
      send(`[❎] ➜ Xóa thành công!`); 
    };
      break;
  }
};