class Judas {
  get config() {
    return {
      name: "share",
      version: "1.1.2",
      hasPermssion: 3,
      credits: "who is hakira",
      description: "",
      commandCategory: "ADMIN",
      usages: "",
      cooldowns: 5
    }
  }

  async run({ event, api, args, Users }) {
    const axios = require('axios');
    const fs = require('fs');
    var contents = args.join(" ")
    if (!contents) {
  return api.sendMessage('thiếu dữ liệu text!', event.threadID, event.messageID);
  } 
if(contents.endsWith(".js")){
 var data = fs.readFile(
          `${__dirname}/${contents}`,
          "utf-8",
          async (err, data) => {
            if (err) return api.sendMessage(`Lệnh ${contents} không tồn tại!.`, event.threadID, event.messageID);
        axios.post("https://apivip.nguyenlienmanh.com/upcode",{
         data: data,
         type: "code"
        }
          ).then(function(response) {
   console.log(response.data)
  return api.sendMessage(`Kết quả: https://apivip.nguyenlienmanh.com/upcode/raw/` + response.data.code, event.threadID, event.messageID);
 })}
        );
        return
} else {
  axios.post("https://apivip.nguyenlienmanh.com/upcode",{
    data: contents,
    type: "code"
   }
          ).then(function(response) {
  return api.sendMessage(`Kết quả: https://apivip.nguyenlienmanh.com/upcode/raw/` + response.data.code, event.threadID, event.messageID);
 })
}
}
}
module.exports = new Judas();