module.exports.config = {
	name: "tod",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "tdunguwu mod by Orson :3",
	description: "",
	commandCategory: "game",
    cooldowns: 5
};
var dare = ["Vào FaceBook Của Admin Bão Like", "Nhắn Tỏ Tình Với Admin", "Ghi Âm Hát Một Bài Nhạc Bất Kì", "Ghi Âm Với Nội Dung Là Yêu Admin Nhất", "Để hình admin làm avt 1 days", "Voice Rên 10s", "Quay video và nói yêu admin rất nhiều", "Ăn một thìa cà phê gia vị bất kì trong bếp", "Gửi một tấm ảnh lúc bé của bạn", "Gửi một tấm ảnh dìm của bạn", "Quay video và nói một câu bất kì với cái lưỡi lè ra trong lúc nói", "Đăng một trạng thái dài dòng, vô nghĩa trên Facebook.", "Bắt chước một ngôi sao YouTube cho đến khi một người chơi khác đoán được bạn đang thể hiện vai diễn của ai.", "Gọi cho một người bạn, giả vờ đó là sinh nhật của họ và hát cho họ nghe Chúc mừng sinh nhật", "Quay video thè lưỡi và sủa 3 tiếng", "Chụp một tấm hình với gương mặt gợi cảm", "Voice một đoạn sau đây và gửi vào box: Dùng giọng văn hay nhất đọc câu sau: Hừ, do anh hết á! Cũng không dỗ người ta gì hết (｡•ˇ‸ˇ•｡) Người ta muốn khóc quá nè, đấm bể ngực mấy người, đồ xấu xa!! (￣^￣)ゞđấm bể ngực mấy người! Đáng ghét!! Muốn ôm ôm ~~~ huhuhu… hừm, đồ xấu xa, đánh chết mấy người luôn!!", "Gọi cho admin và một câu ngọt ngào", "Nhắn tin cho nyc bảo quay lại", "Tự vã vào mặt 3 cái", "Ghi âm một câu em nhớ anh cho admin", "Nhắn tin cho bạn thân và bảo là tao đang nứng uwu","Đặt ngôn ngữ điện thoại di động của bạn thành tiếng Trung","Đi bằng bốn chân và hành động như một con chó cho đến lượt tiếp theo của bạn","Hôn người bạn cùng giới ngồi cạnh, bất kể vị trí nào đều được.","Gởi tin nhắn cho người bạn bất kỳ: Đi ỉa chung hong? Tui đem giấy rồi nè.","Gửi cho người bạn cùng giới thân thiết nhất một tin nhắn: “Tôi thật sự thích cậu lâu lắm rồi, chờ đó tôi đến ngay! Thật! Không phải giỡn chơi đâu.”","Chat sex với một người bất kì trong list bạn bè 5 phút","Lấy quần đội lên đầu và chụp hình lại gửi vào đây"];//Câu hỏi thách <3
var truth = ["Có coi phim sex bao giờ chưa?","Hôm nay mặc quần xì màu gì?","Có thủ dâm bao giờ chưa ?","Có quan hệ tình dục bao giờ chưa?","Bị ăn sừng bao nhiêu lần rồi?","Bạn đã bao giờ đi tiểu trong bể bơi chưa?","Bạn đã bao giờ trốn học chưa?","Hôm nay mặc áo dzú màu gì?","Bạn đã ngửi quần lót của mình để kiểm tra xem chúng có bị bẩn không?","Nếu bạn có thể hôn ai đó ngay bây giờ bạn sẽ hôn ai?","Điều kinh tởm nhất mà bạn từng say là gì?", "Có cởi đồ khi đi ngủ không?","Có chụp ảnh nude hoặc quay video không", "Vị trí yêu thích của bạn trên giường là gì?","Bạn thích doggy hay cổ điển", "Thích được bắn vào trong hay lên mặt ?","Đã đi đá phò bao giờ chưa","Một tháng thủ dâm mấy lần","Thích cu dài hay ngắn ?","Khi thủ dâm trong đầu nghĩ đến ai ?","Có từng có suy nghĩ quan hệ 18+ với ny không ?","Có thích buscu không?","Thích cu to hay bé","Lông nách có nhiều không","Hay coi web sex nào ?","Thích mặt quần lọt khe hay ren ?","Có hay bị nốn lừng đêm khuya không?","Bạn muốn có bao nhiêu đứa trẻ?","Một sự thật đáng xấu hổ mà tôi nên biết về bạn là gì?","Nụ hôn đầu tiên của bạn như thế nào?","Thích cu dài hay ngắn","Số đo 3 vòng của bạn bao nhiêu","Thích kích thước hay kinh nghiệm trong chuyện xxxx","Ăn cứt mũi bao giờ chưa","Khi thủ dâm nghĩ về ai","Có ý định quan hệ với người yêu bao giờ chưa ?","Cháo lưỡi bao giờ chưa","Có thường xuyên thủ dâm hay không","Có nghiện sex hay không","Nơi yêu thích của bạn để được hôn?","Khoảng thời gian dài nhất khi quan hệ tình dục bạn từng đưa ra là bao nhiêu?","Bạn thích quan hệ tình dục thô bạo hay chậm rãi?","Bạn thích ở trên cùng hay dưới cùng khi quan hệ 18+","Diễn viên phim sex bạn ưa thích là ai?","Bạn thích bạn tình của mình im lặng, hay bạn thích rên rỉ?","Nhổ hoặc nuốt khi quan hệ 18+ ? (BJ)",""];//Câu hỏi thật <3
module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
const fs = require("fs");
   const { threadID, messageID, senderID } = event;
    
    
    
    if (!args[0]) {
     var msg = {body: `[ 𝐑𝐄𝐏𝐋𝐘 ] - 𝐓𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐚̣̂𝐭 𝐡𝐨𝐚̣̆𝐜 𝐭𝐡𝐚́𝐜𝐡 🎁\n🍑====================🍑\nㅤㅤㅤㅤㅤㅤ𝟏: 𝐓𝐡𝐚́𝐜𝐡 🐥\nㅤㅤㅤㅤㅤㅤ𝟐: 𝐓𝐡𝐚̣̂𝐭 🐰\n🍭====================🍭\n𝐂𝐨́ 𝐂𝐡𝐨̛𝐢 𝐂𝐨́ 𝐂𝐡𝐢̣𝐮 𝐁𝐮̀𝐧𝐠 𝐂𝐚́𝐢 𝐂𝐨𝐧 𝐂𝐚̣̆𝐜`}
        
        return api.sendMessage(msg, event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
}
    module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies
}) {
  const axios = require("axios");
    var { author } = handleReply;
    if (event.senderID != author) return api.sendMessage("===[ WARNING ]===\nĐéo phải thằng dùng lệnh thì cút, để thằng dùng lệnh nó chơi !!!", event.threadID, event.messageID); 
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
          api.unsendMessage(handleReply.messageID);
          
    return api.sendMessage(`Dare : ${dare[Math.floor(Math.random()*dare.length)]}`, event.threadID, event.messageID)

            }
            
        
        
        case "2": {
          api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`Truth : ${truth[Math.floor(Math.random()*truth.length)]}`, event.threadID, event.messageID)
            }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("Vui lòng nhập 1 con số", event.threadID, event.messageID);
            	if (choose > 2 || choose < 1) return api.sendMessage("Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); 
    }
    }
}
      }