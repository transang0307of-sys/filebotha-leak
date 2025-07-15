module.exports.config = {
    name: "convert",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "araxy",
    description: "Phản hồi video của bạn muốn chuyển từ dạng video sang mp4",
    commandCategory: "tiện ích",
    usages: "reply",
    cooldowns: 5
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  try{
 const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
var audioss = []
  var audio = args.join(" ") || event.messageReply.attachments[0].url;
    var { data } = await axios.get(audio ,{  method: 'GET',  responseType: 'arraybuffer' });
                fs.writeFileSync(__dirname + "/cache/vdtoau.m4a",Buffer.from(data, 'utf-8'));
  audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a")) ,(fs.unlinkSync(__dirname + "/cache/vdtoau.m4a")); 

    var msg = { body : "=== 𝗖𝗢𝗡𝗩𝗘𝗥 ===\n\n𝗻𝗵𝗮̣𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗱𝗮𝘆🌹", attachment: audioss}
  api.sendMessage(msg, event.threadID, event.messageID)
} catch(e){
    console.log(e)
}
}