module.exports.config = {
	name: "refresh",
	version: "0.0.1",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Load lại toàn bộ thông tin của nhóm",
	commandCategory: "quản trị viên",
	cooldowns: 500
};

module.exports.run = async ({ event, api, Threads }) => {
    const threadInfo = await api.getThreadInfo(event.threadID);
	await Threads.setData(event.threadID, { name: threadInfo.name, threadInfo });
	global.data.threadInfo.set(parseInt(event.threadID), threadInfo);
    return api.sendMessage("Đ𝐚̃ 𝐥𝐚̀𝐦 𝐦𝐨̛́𝐢 𝐥𝐚̣𝐢 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠!", event.threadID, event.messageID);
}