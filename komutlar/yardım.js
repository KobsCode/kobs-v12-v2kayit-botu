const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Kob's Bot`)
.setDescription(`


:white_small_square: **=**  \`!erkek\` : **Erkek Kayıt**
:white_small_square: **=**  \`!kız\`:  **Kız Kayıt**
:white_small_square: **=**  \`!istatistik\`:  **Bot İstatistiklerini Verir**

`)
.setImage("https://cdn.discordapp.com/attachments/729334114989375508/731237846173876294/OgunSert_Kobs.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};