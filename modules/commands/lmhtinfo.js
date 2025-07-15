module.exports.config = {
    name: "lmhtinfo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DVB",
    description: "Xem Thông tin tướng Liên Minh",
    commandCategory: "imgur",
    usages: " <TÌM INFO NHÂN VẬT LIÊN MINH HUYỀN THOẠI>",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    let khongcotukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    if (!khongcotukhoa) return api.sendMessage("Không có từ khóa thì tìm kiếm bằng niềm tin à ?", event.threadID, event.messageID);
if(tukhoa == "list" ){
    const DS = (await axios.get(`https://api-ttk.herokuapp.com/lmht/list`)); 
  var LD = DS.data.champ_names
  api.sendMessage(`Danh sách có thể gây hoa mắt! \n${LD}`, event.threadID, event.messageID)
  console.log(LD);
};

  
    const data = (await axios.get(`https://api-ttk.herokuapp.com/lol?name=${tukhoa}`)).data;
  
  
  api.sendMessage(`🧾Thông Tin🧾\nTên: ${data.name}\nHP: ${data.hp}\nMáu tăng mỗi LV: ${data.hp_gain_per_lvl}\nTốc độ hồi máu: ${data.hp_regen}\nTốc độ hồi máu tăng mỗi  LV: ${data.hp_regen_gain_per_lvl}\nMana: ${data.mana}\nMana tăng mỗi LV: ${data.mana_gain_per_lvl}\nTốc độ hồi Mana: ${data.mana_regen}\nTốc độ hồi Mana mỗi tăng mỗi LV: ${data.mana_regen_gain_per_lvl}\nSát thương: ${data.attack_damage}\nSát thương tăng mỗi LV: ${data.attack_damage_gain_per_lvl}\nTốc độ đánh: ${data.attack_speed}\nGiáp: ${data.attack_speed_gain_per_lvl}\nGiáp tăng mỗi LV: ${data.armor}\nGiáp phép thuật: ${data.magic_resist}\nGiáp phép thuật tăng mỗi LV: ${data.magic_resist_gain_per_lvl}\nTốc chạy: ${data.movement_speed}\nTầm đánh: ${data.range}\nAbility Power: ${data.ability_power}\nAbility Haste: ${data.ability_haste}\nChí mạng: ${data.crit}`, event.threadID, event.messageID,);
    console.log(data)
};