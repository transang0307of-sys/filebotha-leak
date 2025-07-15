module.exports.config = {
	name: "12congiap",
  version: "1.2.8",
	hasPermssion: 0,
	credits: "TuanDzz", // mod by Nguyen
	description: "Xem thông tin về 12 con giáp",
	commandCategory: "Tiện Ích",
	usages: "reply số thứ tự",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
}

module.exports.onLoad = () => {
  let { mkdirSync, existsSync, createWriteStream } = require("fs-extra");
  let request = require("request");
  let dirMaterial = __dirname + `/noprefix/12congiap/`; 
  if (!existsSync(dirMaterial + "noprefix" + "12congiap")) mkdirSync(dirMaterial, { recursive: true });
  
  if (!existsSync(dirMaterial + "sửu.jpg")) request("https://i.imgur.com/11RFXQx.jpg").pipe(createWriteStream(dirMaterial + "sửu.jpg"))
  
  if (!existsSync(dirMaterial + "tý.jpg")) request("https://i.imgur.com/5HxGOz7.jpg").pipe(createWriteStream(dirMaterial + "tý.jpg"))
  
  if (!existsSync(dirMaterial + "dần.jpg")) request("https://i.imgur.com/gSzX7nL.jpg").pipe(createWriteStream(dirMaterial + "dần.jpg"))
  
  if (!existsSync(dirMaterial + "mão.jpg")) request("https://i.imgur.com/SVcdKJp.jpg").pipe(createWriteStream(dirMaterial + "mão.jpg"))
  
  if (!existsSync(dirMaterial + "thìn.jpg")) request("https://i.imgur.com/ANdQTeq.jpg").pipe(createWriteStream(dirMaterial + "thìn.jpg"))
  
  if (!existsSync(dirMaterial + "tỵ.jpg")) request("https://i.imgur.com/lnxS2Xr.jpg").pipe(createWriteStream(dirMaterial + "tỵ.jpg"))
  
  if (!existsSync(dirMaterial + "ngọ.jpg")) request("https://i.imgur.com/FnKVUKI.jpg").pipe(createWriteStream(dirMaterial + "ngọ.jpg"))
  
  if (!existsSync(dirMaterial + "mùi.jpg")) request("https://i.imgur.com/fOSI3wz.jpg").pipe(createWriteStream(dirMaterial + "mùi.jpg"))
  
  if (!existsSync(dirMaterial + "thân.jpg")) request("https://i.imgur.com/hPTcpV5.jpg").pipe(createWriteStream(dirMaterial + "thân.jpg"))
  
  if (!existsSync(dirMaterial + "dậu.jpg")) request("https://i.imgur.com/chW3Tc1.jpg").pipe(createWriteStream(dirMaterial + "dậu.jpg"))

  if (!existsSync(dirMaterial + "tuất.jpg")) request("https://i.imgur.com/7i7GU1t.jpg").pipe(createWriteStream(dirMaterial + "tuất.jpg"))

  if (!existsSync(dirMaterial + "hợi.jpg")) request("https://i.imgur.com/hJ5nfUa.jpg").pipe(createWriteStream(dirMaterial + "hợi.jpg"))
  
}

module.exports.handleReply = async ({ api, event, handleReply }) => {
  let { createReadStream } = require("fs-extra");
  let { threadID, messageID, senderID, body } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(body) {

					case "1":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "1. Tý ( Chuột 🐁 )\n\n(23-1 giờ): Lúc chuột đang hoạt động mạnh.\n\nChuột là con giáp đại diện cho một sự khởi đầu suôn sẻ, tốt đẹp. Người tuổi Tý thường có đặc điểm rất thu hút người khác phái, là một người duyên dáng, lanh lợi trong công việc. Người tuổi luôn mang trong mình một năng lượng tích cực, sáng tạo. Khi gặp khó luôn điềm tĩnh giải quyết khó khăn.\n\nTheo phong thủy, Chuột được xem như mang đến sự sung túc cho gia chủ. Trong các mẫu tượng 12 con giáp thì khi bày tượng linh vật Chuột thì gia chủ có thể được giúp đỡ giải quyết các tình huống, mang lại sự sung túc cho gia đình.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/tý.jpg`)
			}, threadID, messageID);
			break;
                
		case "2":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "\n2. Sửu ( Tru 🐃 )\n\n(1-3 giờ): Lúc trâu đang nhai lại, chuẩn bị đi cày.\n\nTrâu tượng trưng cho sự siêng năng và lòng kiên nhẫn. Năm này có tiến triển vững vàng nhưng chậm và một sức mạnh bền bỉ; Người mang tuổi Sửu thường có tính cách thích hợp để trở thành một nhà khoa học.\n\nTrâu biểu tượng cho mùa xuân và nông nghiệp vì gắn liền với cái cày và thích đầm mình trong bùn. Người mang tuổi này thường điềm tĩnh và rất kiên định nhưng rất bướng bỉnh.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/sửu.jpg`)
			},threadID, messageID);
			break;
                
		case "3":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "3. Dần ( Hổ 🐅 )\n\n(3-5 giờ): Lúc hổ hung hãn nhất.\n\nNhững người mang tuổi hổ thường rất dễ nổi giận, thiếu lập trường nhưng họ có thể rất mềm mỏng và xoay chuyển cá tính cho thích nghi với hoàn cảnh. Hổ là chúa tể rừng xanh, thường sống về đêm và gợi lên những hình ảnh về bóng đen và giông tố. Giờ Dần bắt đầu từ 3 giờ đến 5 giờ sáng khi cọp trở về hang sau khi đi rình mò trong đêm.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/dần.jpg`)
			}, threadID, messageID); 
			break;
                
		case "4":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "4. Mão ( Mèo 🐈 )\n\n(5-7 giờ): Việt Nam gọi mèo, nhưng Trung Quốc gọi là thỏ, lúc trăng (thỏ ngọc) vẫn còn chiếu sáng.\n\nMèo tượng trưng cho những người ăn nói nhẹ nhàng, nhiều tài năng, nhiều tham vọng và sẽ thành công trên con đường học vấn. Họ rất xung khắc với người tuổi Tí. Người tuổi Mão có tinh thần mềm dẻo, tính kiên nhẫn và biết chờ thời cơ trước khi hành động.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/mão.jpg`)
			}, threadID, messageID); 
			break;
                
		case "5":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "5. Thìn ( Rồng 🐉 )\n\n(7-9 giờ): Lúc đàn rồng quây mưa (Quần Long hành vũ).\n\nCon rồng trong huyền thoại của người phương Đông là tính Dương của vũ trụ, biểu tượng uy quyền hoàng gia. Theo đó, rồng hiện diện ở khắp mọi nơi, dưới nước, trên mặt đất và không trung. Rồng là biểu tượng của nước và là dấu hiệu thuận lợi cho nông nghiệp. Người tuổi Rồng rất trung thực, năng nổ nhưng rất nóng tính và bướng bỉnh. Họ là biểu tượng của quyền lực, sự giàu có, thịnh vượng và của hoàng tộc.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/thìn.jpg`)
			}, threadID, messageID); 
			break;
                
		case "6":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "6. Tỵ ( Rắn 🐍 )\n\n(9-11 giờ): Lúc rắn không hại người.\n\nNgười tuổi rắn nói ít nhưng rất thông thái. Họ thích hợp với vùng đất ẩm ướt. Rắn tượng trưng cho sự tiến hóa vĩnh cửu của tuổi tác và sự kế vị, sự phân hủy và sự nối tiếp các thế hệ của nhân loại. Người tuổi rắn rất điềm tĩnh, hiền lành, sâu sắc và cảm thông nhưng thỉnh thoảng cũng hay nổi giận. Họ rất kiên quyết và cố chấp.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/tỵ.jpg`)
			}, threadID, messageID); 
			break;
                
		case "7":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "7. Ngọ ( Ngựa 🦓 )\n\n(11-13 giờ): Ngựa có dương tính cao.\n\nNgười tuổi Ngọ thường ăn nói dịu dàng, thoải mái và rộng lượng. Do đó, họ dễ được nhiều người mến chuộng nhưng họ ít khi nghe lời khuyên can. Người tuổi này thường có tính khí rất nóng nảy. Tốc độ chạy của ngựa làm người ta liên tưởng đến mặt trời rọi đến trái đất hàng ngày. Trong thần thoại, mặt trời được cho là liên quan đến những con ngựa đang nổi cơn cuồng nộ. Tuổi này thường được cho là có tính thanh sạch, cao quý và thông thái. Người tuổi này thường được quý trọng do thông minh, mạnh mẽ và đầy thân ái tình người.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/ngọ.jpg`)
			}, threadID, messageID); 
			break;
                
		case "8":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "8. Mùi ( Dê 🐐 )\n\n(13-15 giờ): Lúc dê ăn cỏ không ảnh hưởng tới việc cây cỏ mọc lại.\n\nNgười mang tuổi Mùi thường rất điềm tĩnh nhưng nhút nhát, rất khiêm tốn nhưng không có lập trường. Họ ăn nói rất vụng về, vì thế họ không thể là người bán hàng giỏi nhưng họ rất cảm thương người hoạn nạn và thường hay giúp đỡ mọi người. Họ thường có lợi thế vì tính tốt bụng và nhút nhát tự nhiên của họ.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/mùi.jpg`)
			}, threadID, messageID); 
			break;
                
    case "9":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "9. Thân ( Khỉ 🐒 )\n\n(15-17 giờ): Lúc khỉ thích hú.Người tuổi Thân thường là một nhân tài có tính cách thất thường. Họ rất tài ba và khéo léo trong các vụ giao dịch tiền bạc. Người tuổi này thường rất vui vẻ, khéo tay, tò mò và nhiều sáng kiến, nhưng họ lại nói quá nhiều nên dễ bị người khác xem thường và khinh ghét. Khuyết điểm của họ nằm trong tính khí thất thường và không nhất quán.", attachment: createReadStream(__dirname + `/noprefix/12congiap/thân.jpg`)
			}, threadID, messageID); 
			break;
                
    case "10":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "10. Dậu ( Gà 🐓)\n\n(17-19 giờ): Lúc gà bắt đầu lên chuồng.\n\nNgười sinh năm Dậu có nhiều đặc điểm xuất sắc, chẳng hạn như trung thực, sáng sủa, thích giao tiếp và tham vọng. Hầu hết họ sinh ra đều khá hoặc đẹp trai và thích ăn diện. Trong cuộc sống hàng ngày, họ ít khi dựa dẫm vào người khác. Tuy nhiên, họ có thể nhiệt tình với một việc gì đó một cách nhanh chóng, nhưng lại nhanh chóng trở nên thiếu kiên nhẫn. Vì vậy, họ cần có đủ niềm tin và sự kiên nhẫn để kiên định một điều.\n\nNăm Dậu tượng trưng cho một giai đoạn hoạt động lao động cần cù siêng năng vì gà phải bận rộn từ sáng đến tối. Cái mào của nó là một dấu hiệu của sự cực kỳ thông minh và một trí tuệ bác học. Người sinh vào năm Dậu được xem là người có tư duy sâu sắc. Đồng thời, Gà được coi là sự bảo vệ chống lại lửa. Người sinh vào năm Dậu thường kiếm sống nhờ kinh doanh nhỏ, làm ăn cần cù như một chú gà bới đất tìm sâu.", attachment: createReadStream(__dirname + `/noprefix/12congiap/dậu.jpg`)
			}, threadID, messageID); 
						break;
                
      case "11":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "11. Tuất ( Chó 🐕 )\n\n(19-21 giờ): Lúc chó phải tỉnh táo để trông nhà.\n\nNăm Tuất cho biết một tương lai thịnh vượng. Trên khắp thế giới, chó được dùng để giữ nhà chống lại những kẻ xâm nhập. Những cặp chó đá thường được đặt hai bên cổng làng để bảo vệ. Năm Tuất được tin là năm rất an toàn.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/tuất.jpg`)
			}, threadID, messageID); 
			break;
                
      case "12":
                api.unsendMessage(handleReply.messageID);
			api.sendMessage({
				body: "12. Hợi ( Lợn 🐖 )\n\n(21-23 giờ): Lúc lợn ngủ say nhất.\n\nLợn tượng trưng cho sự giàu có vì loài lợn rừng thường làm hang trong những khu rừng. Người tuổi Hợi rất hào hiệp, tốt bụng và dũng cảm nhưng thường rất bướng bỉnh, nóng tính nhưng siêng năng và chịu lắng nghe.", 
				attachment: createReadStream(__dirname + `/noprefix/12congiap/hợi.jpg`)
			}, threadID, messageID); 
			      break;
                
					default:
				const choose = parseInt(body);
            	if (isNaN(body)) return api.sendMessage("💟 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", threadID, messageID);
            	if (choose > 12 || choose < 1) return api.sendMessage("🔰 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", threadID, messageID); 
		    
			}
		}
	}
}

module.exports.run = async ({ api, event, handleReply }) => {
	let fs = require("fs-extra");
	let { threadID, senderID } = event;
	return api.sendMessage({ body: "= 𝟏𝟐 𝐜𝐨𝐧 𝐠𝐢𝐚́𝐩 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚̂𝐧 𝐠𝐢𝐚𝐧 =\n\n𝟏. 𝐓𝐲́ 🐁\n𝟐. 𝐒𝐮̛̉𝐮 🐃\n𝟑. 𝐃𝐚̂̀𝐧 🐅\n𝟒. 𝐌𝐚̃𝐨 🐈\n𝟓. 𝐓𝐡𝐢̀𝐧 🐉\n𝟔. 𝐓𝐲̣ 🐍\n𝟕. 𝐍𝐠𝐨̣ 🦓\n𝟖. 𝐌𝐮̀𝐢 🐐\n𝟗. 𝐓𝐡𝐚̂𝐧 🐒\n𝟏𝟎. 𝐃𝐚̣̂𝐮 🐓\n𝟏𝟏. 𝐓𝐮𝐚̂́𝐭 🐕\n𝟏𝟐. 𝐇𝐨̛̣𝐢 🐷\n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐭𝐡𝐞̂𝐦 𝐯𝐞̂̀ 𝐭𝐮̛̀𝐧𝐠 𝐜𝐨𝐧 𝐠𝐢𝐚́𝐩 💞"
            }, threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        })  
    })
  }
