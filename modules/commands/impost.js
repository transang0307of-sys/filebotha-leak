module.exports.config = {
  name: "import",
  version: "1.1.1",
  hasPermssion: 3,
  credits: "DC-Nam",
  description: " :))",
  commandCategory: "ADMIN",
  usages: "tên file + number + keys + link api",
  cooldowns: 0
};

/* start (0) khai báo mô-đun */
const axios = require("axios");
const folder = __dirname + "/cache/import/";
const fse = require("fs-extra");
/* end (0) */

module.exports.run = async ({ api, event, args }) => {
const { threadID: t, messageID: m, senderID: s } = event;
    var array = [], namefile = args[0], leng = args[1], keys = args[2], countS = 0, countE = 0, linkapi = args.splice(3).join("");
  /* start (0) check permssion */
  //if (!["100037741424837"].includes(s)) return api.sendMessage("?", t, m);
  /* end (0) */
  /* start (1) check, read, tạo folder, file */
  if (!fse.existsSync(folder)) {
    fse.mkdirSync(folder, { recursive: true });
  };
  if (!fse.existsSync(`${folder}${namefile}.json`)) {
    fse.writeFileSync(`${folder}${namefile}.json`, "[]");
  };
  let data = JSON.parse(fse.readFileSync(`${folder}${namefile}.json`), "utf-8");
  /* end (1) */
  return api.sendMessage(`» Đang xử lý file ${namefile} vui lòng đợi...`, t, () => {
    var promise = new Promise(async (rs, rj) => {
      /* start (2) xử lý api */
      for (var i = 0; i < leng; i++) {
        let es = (await axios.get(linkapi)).data;
        if (!data.includes(es[keys])) {
          ++countS
          data.push(es[keys])
          fse.writeFileSync(`${folder}${namefile}.json`, JSON.stringify(data, null, 4), "utf-8");
        } else ++countE
      };
      rs(`⚜ add: ${countS}\n♻️ Lặp: ${countE}\n✅ Tổng: ${data.length}\n» Reaction để send file vừa tạo`);
      rj();
      /* end (2) */
      /* start (3) gửi kết quả, add obj handle reaction */
      promise.then(async (rs) => api.sendMessage(rs, t, (e, i) => {
        return global.client.handleReaction.push({
          name: this.config.name,
          messageID: i.messageID,
          author: s,
          path: `${folder}${namefile}.json`,
          namefile
        });
      }, m)).catch(async (err) => api.sendMessage(err, t, m));
    });
    /* end (3) */
  });
};
module.exports.handleReaction = async ({ api, event, handleReaction: h }) => {
  const { threadID: tid, messageID: mid, senderID: sid, userID, reaction } = event;
  /* start (0) check permssion */
  if (userID != h.author) return;
  /* end (0) */
  /* start (1) gửi file vừa nhập khi nhận được lệnh reaction */
  switch (reaction) {
    case "👊": {
  api.sendMessage(`» Check tin nhắn đi`, tid, () => api.sendMessage({
    body: `» File ${h.namefile} của bạn đây`,
    attachment: fse.createReadStream(h.path)
  }, h.author));
  /* end (1) */
      break;
     };
    case "👌": {
      api.sendMessage(`» Tiến hành upload lên API`, tid, (e, i) => {
       const fromapi = "https://data.nguyenlienmanh.com/image/";///https://api-bok.bokdepzai.repl.co/images/
      let readdata = JSON.parse(fse.readFileSync(h.path));
      var promise = new Promise(async(rs, rj) => {
      let res = (await axios.get(encodeURI(`${fromapi}import/add?data=${readdata.join(",")}&file=${h.namefile}`))).data;
        rs(`» Hoàn tất upload:\n⚜ add: ${res.result.successful}\n♻️ Lặp: ${res.result.failure}\n✅ Tổng: ${res.result.total}`);
        rj();
      });       
        promise.then(async(r) => api.sendMessage(r, tid, mid)).catch(async(err) => api.sendMessage(err, tid, mid));
          });
  break;
      };
   };
};