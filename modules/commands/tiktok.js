module.exports.config = {
    name: "tiktok",
    version: "1.1.12",
    hasPermssion: 0,
    credits: "",
    description: "",
    commandCategory: "tiện ích",
    usages: "",
    cooldowns: 5,
    dependencies: {"axios": ""}
};
const axios = global.nodemodule["axios"];
fs = global.nodemodule["fs-extra"],
request = global.nodemodule["request"],
downloader = require('image-downloader')
	// khai báo trên đầu đi mấy cái dưới đỡ phải khái báo lại
module.exports.run = async function ({ event, api, args, Users, Threads }) {
  
try {
  
    const { threadID, messageID, senderID, body } = event;
    switch (!args[0] ?'':args[0].toLowerCase()) {
  case "video":
    case "v":{
    const link = args[1];
          if (!link) return api.sendMessage("link đâu", threadID);
const res = await axios.get(`https://apivip.nguyenlienmanh.com/v2/tiktok/tikwm.json?video=${link}`);
var url = res.data.data.play;
  const str = res.data.data.title,
 hastag = str.split(' ').filter(i => i.startsWith('#')).join(', ');  
       var callback = () => api.sendMessage({body:`--> hastag: ${hastag}\n-->ID: ${res.data.data.author.unique_id}\n--> Tên kênh: ${res.data.data.author.nickname}\n--> Tym: ${res.data.data.digg_count}\n--> Cmt:${res.data.data.comment_count}\n-->Khu vực: ${res.data.data.region}`,attachment: fs.createReadStream(__dirname + "/cache/tiktok/tikvd.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tikvd.mp4"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tiktok/tikvd.mp4')).on('close',() => callback());  
    }
      break;
        
  case "music":
   case "m":
   case "audio":
   case "a":{
    const link = args[1];
          if (!link) return api.sendMessage("link đâu", threadID);
const res = await axios.get(`https://apivip.nguyenlienmanh.com/v2/tiktok/tikwm.json?video=${link}`);
var url = res.data.data.music;
       var callback = () => api.sendMessage({body:`Nhạc dùng từ:\n-->ID: ${res.data.data.music_info.id}-->${res.data.data.music_info.author}\n-->${res.data.data.music_info.title}`,attachment: fs.createReadStream(__dirname + "/cache/tiktok/vd.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/vd.mp3"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tiktok/vd.mp3')).on('close',() => callback());  
    }
      break;
    
    case "info":
    case "i":{
   const username = args[1];
      if (!username) return api.sendMessage("con mẹ m info đâu", threadID);
       const res = await axios.get(`https://apivip.nguyenlienmanh.com/v2/tiktok/tikwm.json?info=${username}`);
      var url1 = res.data.data.user.avatarMedium;
  var callback = () => api.sendMessage({body:`Name: ${res.data.data.user.nickname}\nTiểu sử: ${res.data.data.user.signature}\nFL: ${res.data.data.stats.followerCount}\nĐang fl: ${res.data.data.stats.followingCount}\nThích: ${res.data.data.stats.heart}\nSố video: ${res.data.data.stats.videoCount}`,attachment: fs.createReadStream(__dirname + "/cache/tiktok/0.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tiktok/0.png"),event.messageID);
	 return request(encodeURI(`${url1}`)).pipe(fs.createWriteStream(__dirname+'/cache/tiktok/0.png')).on('close',() => callback());  
   }
  break; 

  case "search":
  case "s":{
      const search = args[1];
      if (!search) return api.sendMessage("Bạn chưa nhập từ khóa", threadID);
  const res = await axios.get(`https://apivip.nguyenlienmanh.com/v2/tiktok/tikwm.json?search=${encodeURI(search)}`);
   const BoK = res.data.data.videos;
    const image = [];
    var text = '';
    for ( var i = 0; i < 10; i++) {
      text += `\n${i+1}. Tiêu đề: ${BoK[i].title}\nTên: ${BoK[i].music_info.author}\nVới:\n=>${BoK[i].play_count} lượt xem\n=>${BoK[i].download_count}`;
    let path = __dirname + "/cache/tiktok/tt"+i+".jpg";
    let buffer = (await axios.get(`${BoK[i].origin_cover}`, {
                responseType: 'arraybuffer'
            })).data;
    fs.writeFileSync(path, buffer); 
      image.push(fs.createReadStream(path));
    }
    text += `\nreply 1 - 10 để chọn`;
    api.sendMessage({body: text, attachment: image }, event.threadID, (error, msg) => global.client.handleReply.push({
       name: this.config.name,
       messageID: msg.messageID,
       author: senderID, BoK
    }));
}; break;

      case "trending":
      case "tr":
        {
const res = await axios.get(`https://apivip.nguyenlienmanh.com/v2/tiktok/tikwm.json?trending=VN`),
  bok = res.data.data.videos,
  images = [];/////// chịu
          
        }
        break;
        case "anh":
        case "img":{
    const
    axios = require('axios'),//|
    fs = require('fs');      //| khai báo package

  const
    link_post = args[1];
    axios.get(`https://apivip.nguyenlienmanh.com/v2/tiktok/tikwm.json?video=${link_post}`)/* request đến api */
    .then(async resp=> { // .then kèm function, request thành công sẽ chạy function kèm data api
  const body = `\n-->${resp.data.data.title}\n-->ID: ${resp.data.data.author.unique_id}\n--> Tên kênh: ${resp.data.data.author.nickname}\n--> Tym: ${resp.data.data.digg_count}\n--> Cmt:${resp.data.data.comment_count}\n-->Khu vực: ${resp.data.data.region}`; 
  var attachment = [];
        for (var index in resp.data.data.images) {
  const url = resp.data.data.images[index],
        path = __dirname+`/cache/tiktok/${index}.png`,
        buffer = (await axios.get(url, {
                responseType: 'arraybuffer'
            })).data; 
            fs.writeFileSync(path, buffer),
            attachment.push(fs.createReadStream(path));
        };
        return api.sendMessage({
            attachment,
            body
        }, event.threadID);
    })
    .catch(error=>(console.log(error), api.sendMessage(error.message, event.threadID))); // gửi lỗi nếu request đến API thất bại
    };
        break;
default: api.sendMessage(`==> vd ( video/v)
==> music (music/audio/a/m)
==> info ( i/info)
==> search ( search/s)
==> trending ( trending/tr )`, threadID)
}
}catch(e){
    api.sendMessage(`${e}`,threadID);
}
}
        
module.exports.handleReply = async function({ handleReply, api, event }){
  const { threadID, messageID, senderID, body } = event;
  if (senderID != handleReply.author) return api.sendMessage(`Phá cái lol ne`, threadID);
   const {
       play, title, region
   } = handleReply.BoK[event.args[0]-1];
   const dest = __dirname + '/cache/search_vd.mp4'; 
   api.sendMessage({body:`-->tải video\n ờ: ${title}\nQuốc gia: ${region} \nhoàn tất-->`, attachment: await download(play, dest)}, threadID);
};
async function download(url, dest){
    await downloader.image({url, dest});
    return fs.createReadStream(dest);
};