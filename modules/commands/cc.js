module.exports.config = {
  name: "api",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "pqc2304",
  description: "curl",
  commandCategory: "Tiện Ích",
  usages: "curl",
  cooldowns: 0
};
module.exports.run = async function ({ api, event , args}) {
  const axios = require('axios');
  if(args[0] == 'get'){
  const data = (await axios.get(args[1])).data
return api.sendMessage(JSON.stringify(data , 'utf-8',4),  event.threadID, event.messageID)
} else {
    api.sendMessage(`vui lòng nhập\n /` + this.config.name + ' get',event.threadID,event.messageID)
  }
}

