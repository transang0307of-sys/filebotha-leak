module.exports.config = {
  name: "gentle",
  version: "0.2.7",
  hasPermssion: 0,
  credits: "Viet/Hoang",
  description: "Xem ảnh gái random trên gentle ∆",
  commandCategory: "random-img",
  usages: "gentle",
  cooldowns: 5
};
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api.nguyenlienmanh.com//image/vsbg').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸 𝗚𝗲𝗻𝘁𝗹𝗲 𝗦𝗲𝘅𝘆 ∆ 🌸\n𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗮̉𝗻𝗵: ${count}`,
            attachment: fs.createReadStream(__dirname + `/cache/gentle.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gentle.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/gentle.${ext}`)).on("close", callback);
      })
}