const fs = require('fs');
const ytdl = require('@distube/ytdl-core');
const { resolve } = require('path');
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiếu link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 128 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}
module.exports.config = {
    name: "sing2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "tiện ích",
    usages: "[searchMusic]",
    cooldowns: 0
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/1.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
    body: `\n━━━━━━━━━━━━━━━\n==== 『 𝙔𝙤𝙪𝙩𝙤𝙗𝙚  𝐋𝐢𝐦𝐢𝐭𝐞𝐝  』 ====\n━━━━━━━━━━━━━━━\n[ 🧾 ] ➣ 𝐍𝐨𝐭𝐢: ${data.title}\n━━━━━━━━━━━━━━━\n[ 🖥️ ] ➣ 𝐍𝐚𝐦𝐞 𝐊𝐞̂𝐧𝐡: ${data.author}\n━━━━━━━━━━━━━━━\n[ 🕦 ] ➣ 𝐓𝐢𝐦𝐞: ${this.convertHMS(data.dur)}\n━━━━━━━━━━━━━━━\n[ 📺 ] ➣ 𝐖𝐢𝐞𝐰: ${data.viewCount}\n━━━━━━━━━━━━━━━\n[ 👍 ] ➣ 𝐋𝐢𝐤𝐞: ${data.likes}\n━━━━━━━━━━━━━━━\n[ 🕑 ] ➣ 𝐓𝐢𝐦𝐞: ${Math.floor((Date.now()- data.timestart)/1000)} giây\n━━━━━━━━━━━━━━━\n💿==== 𝙔𝙤𝙪𝙩𝙤𝙗𝙚 𝐋𝐢𝐦𝐢𝐭𝐞𝐝 ====💿\n━━━━━━━━━━━━━━━`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)

    }
    catch (e) { return console.log(e) }
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.run = async function ({ api, event, args }) {
    if (args.length == 0 || !args) return api.sendMessage('» Phần tìm kiếm không được để trống!', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/1.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `\n━━━━━━━━━━━━━━━\n==== [ 𝙔𝙤𝙪𝙩𝙤𝙗𝙚 𝐋𝐢𝐦𝐢𝐭𝐞𝐝  ] ====\n━━━━━━━━━━━━━━━\n[ 🧾 ] ➣ 𝐍𝐨𝐭𝐢: ${data.title}\n━━━━━━━━━━━━━━━\n[ 🖥️ ] ➣ 𝐍𝐚𝐦𝐞 𝐊𝐞̂𝐧𝐡: ${data.author}\n━━━━━━━━━━━━━━━\n[ 🕦 ] ➣ 𝐓𝐢𝐦𝐞: ${this.convertHMS(data.dur)}\n━━━━━━━━━━━━━━━\n[ 📺 ] ➣ 𝐖𝐢𝐞𝐰: ${data.viewCount}\n━━━━━━━━━━━━━━━\n[ 👍 ] ➣ 𝐋𝐢𝐤𝐞: ${data.likes}\n━━━━━━━━━━━━━━━\n[ 🕑 ] ➣ 𝐓𝐢𝐦𝐞: ${Math.floor((Date.now()- data.timestart)/1000)} giây\n━━━━━━━━━━━━━━━\n💿==== 𝙔𝙤𝙪𝙩𝙤𝙗𝙚 𝐋𝐢𝐦𝐢𝐭𝐞𝐝 ====💿\n━━━━━━━━━━━━━━━`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)

        }
        catch (e) { return console.log(e) }
    } else {
          try {
            var link = [],
                msg = "",
                num = 0
            const Youtube = require('youtube-search-api');
            var data = (await Youtube.GetListByKeyword(keywordSearch, false,6)).items;
            for (let value of data) {
              link.push(value.id);
              num = num+=1
              msg += (`${num} - ${value.title} (${value.length.simpleText})\n\n`);
            }
            var body = `»🔎 𝐂𝐨́ ${link.length} 𝐊𝐞̂́𝐭 𝐐𝐮𝐚̉ 𝐓𝐢̀𝐦 𝐊𝐢𝐞̂́𝐦 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐌𝐨𝐚𝐡:\n\n${msg}» 𝐇𝐚̃𝐲 𝐑𝐞𝐩𝐥𝐲 𝐓𝐫𝐨𝐧𝐠 𝐍𝐡𝐮̛̃𝐧𝐠 𝐓𝐢̀𝐦 𝐊𝐢𝐞̂́𝐦 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧`
            return api.sendMessage({
              body: body
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('Đã xảy ra lỗi, vui lòng thử lại trong giây lát!!\n' + e, event.threadID, event.messageID);
        }
    }
      }