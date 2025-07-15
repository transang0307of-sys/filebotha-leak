const axios = require('axios');
const moment = require('moment-timezone');
const tesseract = require('tesseract.js');

module.exports.config = {
  name: 'text',
  version: '2.0.0',
  hasPermssion: 0,
  credits: 'BraSL',
  description: 'subgiare',
  commandCategory: 'Tiện ích',
  usages: '[Script]',
  cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
  const { messageReply, threadID } = event;

  if (!messageReply || !messageReply.attachments || messageReply.attachments.length === 0 || messageReply.attachments[0].type !== 'photo') {
    return api.sendMessage('❌ Bạn phải reply một ảnh nào đó', threadID, event.messageID);
  }

  const imageUrl = messageReply.attachments[0].url;
  const shortUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${imageUrl}`).then(res => res.data);

  tesseract.recognize(imageUrl, { lang: 'eng' })
    .then(({ data: { text } }) => {
      const time = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY || HH:mm:ss');
      const message = `📗== [ 𝗧𝗘𝗫𝗧 𝗙𝗥𝗢𝗠 𝗣𝗛𝗢𝗧𝗢𝗦 ] ==📗

⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${time}
👍 𝗩𝘂̛̀𝗮 𝗹𝗮̂́𝘆 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝘁𝘂̛̀ 𝗮̉𝗻𝗵
🌸 𝗧𝗲𝘅𝘁: ${text}
🔗 Ảnh gốc: ${shortUrl}`;

      api.sendMessage(message, threadID);
    })
    .catch(() => {
      api.sendMessage('❌ Không thể nhận dạng được chữ trong ảnh', threadID);
    });
};
