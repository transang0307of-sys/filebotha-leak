module.exports.config = {
    name: "timanh",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "WhoisHAKIRA ?",
    description: "CUN CAC",
    commandCategory: "tiện ích",
    usages: "",
    cooldowns: 0
};
const axios = require('axios')
module.exports.getJSONdataFromAPI = async function(link) {
    return new Promise(async (resolve, reject) => {
      const resp = await axios.get('https://cici.hanakuhshsjsjshejsna.repl.co/findimg?url=' + link);
      if(resp.status == 200){
        resolve(resp.data)
      } else {
        reject('err please try again')
      }
    })
}
module.exports.getimgurlink = async function(url) {
    return new Promise(async (resolve, reject) => {
  const resp = await axios({
        method: 'post',
        url: 'https://api.imgur.com/3/image',
        headers: {
            'Authorization': 'Client-ID fc9369e9aea767c'
        },
     data:{
       'image': url
     }})
  resolve ({
    status: true,
    link: resp.data.data.link
  })
})
  }
module.exports.run = async function ({ event, api, args }) {
   if (event.type == "message_reply") {
  var mx = event.messageReply.attachments[0].url
   } else {
  var mx = args[0]
   }
  const stt = await this.getimgurlink(mx)
  const result = await this.getJSONdataFromAPI(stt.link)
  var msg = '';
  for(let i = 0; i < 5; i++){
    msg += `${result[i].title}\n${result[i].link}\n\n`
  }
  return api.sendMessage(msg, event.threadID, event.messageID)
}