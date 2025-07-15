module.exports.config = {

	name: "bantaixiu",

	version: "1.0.0",

	hasPermssion: 0,

	credits: "",

	description: "tài xỉu nhưng nó là nhiều người??",

	commandCategory: "Game",

	usages: "[create/join/leave/start/end]",

	cooldowns: 0

};

module.exports.handleEvent = async function({
	api,
	event,
	Currencies
}) {

	const fs = require("fs-extra")

	const axios = require("axios")

	const {
		threadID,
		messageID,
		body,
		senderID
	} = event;

	if (!body) return;

	async function checkMoney(senderID, maxMoney) {

		var i, w;

		i = (await Currencies.getData(senderID)) || {};

		w = i.money || 0

		if (w < parseInt(maxMoney)) return false;

		else return true;

	}



	const typ = ["tài", "xỉu"];

	const random = typ[Math.floor(Math.random() * typ.length)];

	const choosee = body.split(" ");

	if (typ.includes(choosee[0].toLowerCase())) {

		if (!global.txhuudan) return

		const gameThread = global.txhuudan.get(threadID) || {};

		if (!gameThread) return;

		if (gameThread.start != true) return;



		if (!choosee[1]) return api.sendMessage('⚠️Vui lòng nhập số tiền cược!', threadID, messageID);

		if (await checkMoney(senderID, choosee[1]) == false) return api.sendMessage(' ⚠️Bạn không đủ tiền cược!', threadID, messageID)

		else {

			var playerGame = gameThread.player.length;

			if (!gameThread.player.find(i => i.userID == senderID)) return;

			else {

				var s, q, dan;

				var s = gameThread.player.findIndex(i => i.userID == senderID);

				var q = gameThread.player[s];

				var dan = (await Currencies.getData(senderID)).money;

				if (q.choose.status == true) return api.sendMessage('⚠Bạn đã chọn rồi không thể chọn lại!', threadID, messageID);

				else {

					if (typ.includes(choosee[0].toLowerCase()) && !isNaN(choosee[1])) {

						gameThread.player.splice(s, 1);

						gameThread.player.push({

							name: q.name,

							userID: senderID,

							choose: {

								status: true,

								msg: choosee[0].toLowerCase(),

								money: parseInt(choosee[1])
							}

						});

						api.sendMessage(`👤 Người chơi ${q.name} đã chọn ${choosee[0].toLowerCase()} với mức đặt cược ${choosee[1]}$`, threadID, messageID);

					}
					else {

						if ((choosee[1] == "tất" && choosee[2] == "tay") || (choosee[1] == "tất")) {

							gameThread.player.splice(s, 1);

							gameThread.player.push({

								name: q.name,

								userID: senderID,

								choose: {

									status: true,

									msg: choosee[0].toLowerCase(),

									money: dan

								}

							});

							api.sendMessage(`👤 Người chơi ${q.name} đã chọn ${choosee[0].toLowerCase()} với mức đặt cược ${dan}$`, threadID, messageID);

						}
					}




					var vv = 0,

						vvv = gameThread.player.length;

					for (var c of gameThread.player) {

						if (c.choose.status == true) vv++;

					}



					if (vv == vvv) {

						api.sendMessage('🥳Đang lắc....', threadID, (err, data) => {

							if (err) return api.sendMessage(err, threadID, messageID);

							setTimeout(async function() {

								api.unsendMessage(data.messageID);

								var str = '-'.repeat(50);

								var ketqua = random

								var checkwin = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == true)

								var checklose = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == false)

								var msg;




								if (checkwin.length != 0) {

									msg = `${str}\nNHỮNG NGƯỜI THẮNG CUỘC\n${str}\n`

									for (let i of checkwin) {



										await Currencies.increaseMoney(i.userID, parseInt(i.choose.money) * 3);

										msg += `${i.name} đặt ${i.choose.msg} + ${parseInt(i.choose.money) * 3}$\n`

									}

								}

								if (checklose.length != 0) {

									msg += `\n${str}\nNHỮNG NGƯỜI THUA CUỘC\n${str}\n`

									for (let i of checklose) {

										await Currencies.decreaseMoney(i.userID, parseInt(i.choose.money));

										msg += `${i.name} đặt ${i.choose.msg} - ${i.choose.money}$\n`

									}

								}

								global.txhuudan.delete(threadID);

								return api.sendMessage(`Kết quả: ${ketqua.toUpperCase()}\n${msg}`, threadID);

							}, 5000);

						});

					}
					else return;

				}

			}

		}

	}

}

module.exports.run = async function({
	api,
	event,
	args,
	Threads,
	Users,
	Currencies,
	getText

}) {



	try {

		if (!global.txhuudan) global.txhuudan = new Map();

		const {
			threadID,
			messageID,
			senderID
		} = event;

		var prefix = global.config.PREFIX;

		var tx = this.config.name;

		var gameThread = global.txhuudan.get(threadID);

		switch (args[0]) {

			case "create":

			case "new":

			case "-c": {

				if (await checkMoney(senderID, 50) == false) return api.sendMessage('Yêu cầu có ít nhất 50$ để tham gia!', threadID, messageID)

				if (global.txhuudan.has(threadID)) return api.sendMessage('⚠ Nhóm này đã được mở bàn game!', threadID, messageID);

				var name = await Users.getNameUser(senderID);

				global.txhuudan.set(threadID, {

					box: threadID,

					start: false,

					author: senderID,

					player: [{

						name,

						userID: senderID,

						choose: {

							status: false,

							msg: null,

							money: null

						}

					}]

				});

				return api.sendMessage(`Tạo bàn chơi tài xỉu thành công!\n--------------------\n${prefix}${tx} join\n${prefix}${tx} start\n${prefix}${tx} leave\n${prefix}${tx} end`, threadID, messageID);

				break;

			}

			case "join":

			case "-j": {

				if (await checkMoney(senderID, 50) == false) return api.sendMessage('Yêu cầu có ít nhất 50$ để tham gia!', threadID, messageID)

				if (!global.txhuudan.has(threadID)) return api.sendMessage('Không có bàn bầu cua nào để tham gia!', threadID, messageID);

				if (gameThread.start == true) return api.sendMessage('Game đã bắt đầu trước đó!', threadID, messageID);

				if (gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('Bạn đã tham gia trước đó rồi!', threadID, messageID);

				var name = await Users.getNameUser(senderID);

				gameThread.player.push({

					name,

					userID: senderID,

					choose: {

						stats: false,

						msg: null,

						money: null

					}

				});

				global.txhuudan.set(threadID, gameThread);

				return api.sendMessage('Tham gia thành công!', threadID, messageID);

				break;

			}

			case "leave":

			case "-l'": {

				if (!global.txhuudan.has(threadID)) return api.sendMessage('Không có bàn bầu cua nào để rời khỏi!', threadID, messageID);

				if (!gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('Bạn chưa tham gia nên không thể rời!', threadID, messageID);

				if (gameThread.start == true) return api.sendMessage('Game đã bắt đầu rồi, hơi muộn nha!', threadID, messageID);

				if (gameThread.author == senderID) {

					global.txhuudan.delete(threadID);

					var name = await Users.getNameUser(senderID);

					return api.sendMessage('⚠ Bàn game đã được bắt đầu không thể rời!', threadID, messageID);

				}
				else {

					gameThread.player.splice(gameThread.player.findIndex(i => i.userID == senderID), 1);

					global.txhuudan.set(threadID, gameThread);

					var name = await Users.getNameUser(senderID);

					api.sendMessage('Rời thành công!', threadID, messageID);

					return api.sendMessage(`${name} đã rời khỏi, số lượng người chơi còn lại là ${gameThread.player.length}`, threadID);

				}

				break;

			}

			case "start":

			case "-s": {

				if (!gameThread) return api.sendMessage('Không có bàn bầu cua nào để bắt đầu!', threadID, messageID);

				if (gameThread.author != senderID) return api.sendMessage('Chỉ có người tạo mới có thể bắt đầu!', threadID, messageID);

				if (gameThread.player.length <= 1) return api.sendMessage('Số lượng người chơi phải từ 2 trở lên!', threadID, messageID);

				if (gameThread.start == true) return api.sendMessage('Game đã bắt đầu trước đó', threadID, messageID);

				gameThread.start = true;

				global.txhuudan.set(threadID, gameThread);

				return api.sendMessage(`Bắt đầu thành công, số lượng người chơi là ${gameThread.player.length}\nVui lòng nhập [tài/xỉu] [số tiền/tất tay]`, threadID);

				break;

			}

			case "end":

			case "-e": {

				if (!gameThread) return api.sendMessage('Không có bàn tài xỉu nào để kết thúc!', threadID, messageID);

				if (gameThread.author != senderID) return api.sendMessage('Chỉ có người tạo mới có thể kết thúc!', threadID, messageID);

				global.txhuudan.delete(threadID);

				return api.sendMessage(`Kết thúc thành công`, threadID, messageID);

				break;

			}

			default: {

				return api.sendMessage("⚠ BODY:\n- create/new/-c: Tạo bàn chơi tài xỉu \n- join/-j: Tham gia vào bàn tài xỉu\n- leave/-l: Rời khỏi bàn tai xỉu\n- start/-s: Bắt đầu bàn tài xỉu\n- end/-e: Kết thúc bàn tài xỉu", threadID, messageID);

			}

		}

	}
	catch (err) {

		return api.sendMessage(getText("error", err), event.threadID, event.messageID);

	}

	async function checkMoney(senderID, maxMoney) {

		var i, w;

		i = (await Currencies.getData(senderID)) || {};

		w = i.money || 0

		if (w < parseInt(maxMoney)) return false;

		else return true;

	}

}