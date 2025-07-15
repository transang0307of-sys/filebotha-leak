module.exports.config = {
    name: "leave",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "HĐGN",//Mod by H.Thanh
    description: "Thông báo Bot hoặc người dùng rời khỏi nhóm có random gif/ảnh/video",
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
};

const checkttPath = __dirname + '/../commands/_checktuongtac_nghia/'


module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "leaveGif");
    if (existsSync(path)) mkdirSync(path, { recursive: true });

    const path2 = join(__dirname, "cache", "leaveGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function ({ api, event, Users, Threads }) {
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
    const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
    const uid = (event.logMessageData.leftParticipantFbId);
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "vì không tán được e nào nên đã tự rời khỏi nhóm, xin là xin vĩnh biệt e nhé 🤣" : "vì không tán được e nào nên đã bị Quản trị viên đá khỏi nhóm, xin là xin vĩnh biệt e nhé 😋";
    const path = join(__dirname, "cache", "leaveGif");
    const gifPath = join(path, `${threadID}.gif`);
    var msg, formPush

    if (existsSync(checkttPath + threadID + '.json')) {
        const threadData = JSON.parse(readFileSync(checkttPath + threadID + '.json'));
        const userData_week_index = threadData.week.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        const userData_day_index = threadData.day.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        const userData_total_index = threadData.total.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        if (userData_total_index != -1) {
            threadData.total.splice(userData_total_index, 1);
        }
        if (userData_week_index != -1) {
            threadData.week.splice(userData_week_index, 1);
        }
        if (userData_day_index != -1) {
            threadData.day.splice(userData_day_index, 1);
        }

        writeFileSync(checkttPath + threadID + '.json', JSON.stringify(threadData, null, 4));
    }
    if (existsSync(path)) mkdirSync(path, { recursive: true });

    (typeof data.customLeave == "undefined") ? msg = "→ Con zợ {name} \n→URL:https://www.facebook.com/profile.php?id={uid}\n→ Thời gian: {time}\n " : msg = data.customLeave;
    msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{time}/g, time).replace(/\{uid}/g, uid);

    const randomPath = readdirSync(join(__dirname, "cache", "leaveGif"));

    if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
    else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "leaveGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom) }
    }
    else formPush = { body: msg }

    return api.sendMessage(formPush, threadID);
}