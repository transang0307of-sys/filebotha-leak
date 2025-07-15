module.exports.config = {
    name: "searchbt",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "D-Jukie",
    description: "Giải bài tập từ Dicamon",
    commandCategory: "Tiện Ích",
    usages: "[text]",
    cooldowns: 0
};

module.exports.run = async function({ api, event, args, utils }) {
const axios = require('axios')
const { threadID, messageID } = event;
const body = args.join(' ');
    axios.post('https://qa-honeycomb.giainhanh.io/api/search-text', {
            content: body
        })
        .then(res => {
            var data = [];
            var links = [];
            for(let i of res.data.data) {
                if(i.question.content != null && i.best_answer.content != null) {
                    var qs = i.question.content.replace(/<\/?[^>]+(>|$)/g, "").trimEnd()
                    var an = i.best_answer.content.replace(/<\/?[^>]+(>|$)/g, "").trimEnd()
                    data.push({
                        question: filterHTML(qs),
                        ans: filterHTML(an)
                    })
                }
            }
            for(let i of res.data.data) {
                if(i.question.content == null || i.best_answer.content == null) {
                    //các câu hỏi và trả lời dạng ảnh
                }
            }
            var msg = `=====𝐊𝐄̂́𝐓 𝐐𝐔𝐀̉ 𝐂𝐀̂𝐔 𝐇𝐎̉𝐈=====\n\n`        
            for(let i =0; i < 3; i++) {
                msg += `🎨 𝐂𝐚̂𝐮 𝐡𝐨̉𝐢: ${data[i].question}\n📈 𝐂𝐚̂𝐮 𝐭𝐫𝐚̉ 𝐥𝐨̛̀𝐢: ${data[i].ans}\n\n`
            }
            return api.sendMessage(msg.trim(), threadID, messageID);
        })
        .catch(error => {
            console.log(error)
        })
}
function filterHTML(i) {
    var data = i.trim()
            .replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n\n\n\n\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n\n\n\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n\n\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n\n', '\n')
            .replace('\n\n\n\n\n', '\n')
            .replace('\n\n\n\n', '\n')
            .replace('\n\n\n', '\n')
            .replace('\n\n', '\n')
            .replace('\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r\r\r\r\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r\r\r\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r\r\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r\r', '\r')
            .replace('\r\r\r\r\r', '\r')
            .replace('\r\r\r\r', '\r')
            .replace('\r\r\r', '\r')
            .replace('\r\r', '\r')
    return data
}
