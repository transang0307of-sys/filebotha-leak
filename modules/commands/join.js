exports.config = {
  name: 'thamgia',
  version: '0.0.1',
  hasPermssion: 2,
  credits: 'DC-Nam',
  description: 'Tham gia nhóm mà bot đang ở!',
  commandCategory: 'Hệ thống support-bot',
  usages: 'thamgia',
  cooldowns: 3
};
exports.run = function(o) {
  let all_tid = global.data.allThreadID.filter($=>!Object.keys((global.data.threadInfo.get($) || {}).nicknames || {}).includes(o.event.senderID));
  let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);
  if (o.event.senderID != 100029891650673) return send(`[Donate] ➜ Bạn có thể dùng nếu donate qua momo cho admin 0396049649`)


  send(all_tid.map(($, i)=>`=== 『 LIST BOX 』 ===\n━━━━━━━━━━━━━━━━\n[📌] ➜ Nhóm số: ${i+1}\n[🔰] ➜ Tên nhóm: ${(global.data.threadInfo.get($) || {}).threadName}`).join('\n')+'\n━━━━━━━━━━━━━━━━\n[💬] ➜ Phản hồi tin nhắn theo số thứ tự nhóm mà bạn muốn bot thêm vào!', (err, res)=>(res.name = exports.config.name, res.event = o.event, res.all_tid = all_tid, global.client.handleReply.push(res)));
};
exports.handleReply = function(o) {
  let send = (msg, callback)=>o.api.sendMessage(msg, o.event.threadID, callback, o.event.messageID);

  if (o.event.senderID != o.handleReply.event.senderID)return;

  o.api.addUserToGroup(o.event.senderID, o.handleReply.all_tid[o.event.body-1], (err, res)=>err?send(`[⚜️] ➜ Đã xảy ra lỗi, hoặc bạn đã ở trong nhóm đó rồi!`): send(`[⚜️] ➜ Bot đã thêm bạn vào nhóm (nếu không thấy thì xem lại tin nhắn chờ, duyệt...)`));
};