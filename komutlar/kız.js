const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has('YetkiliRolİD')) return message.reply('Bu Komut İçin <&@id> Rolüne Sahip Olman Lazım')

  let verilecek = "KızRolİd"//KızRolİd
  let alınıcak = "KayıtsızRolİd"//KayıtsızRolİD
  let isim = args[1]
  let yaş = args[2]
  let a = message.mentions.members.first()
  
  if (!a) return message.reply('Kişi Belirt')
  if (!isim || !yaş) return message.reply('**İsim** Ve **Yaş** Belirt')
  if  (isNaN(yaş)) return message.reply('Yaşı Nasıl Rakamlardan Oluşmadan Belirtmeyi Düşünüyosun')
    db.add(`erkek_${message.author.id}`, 1)

 a.setNickname(`${isim} | ${yaş}`)
  a.roles.add(verilecek)
  a.roles.remove(alınıcak)
  
  message.channel.send(`${a} Adlı Kullanıcı Başarıyla Kaydoldu`)
  
  
  
  
  
}
exports.conf = {
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "kız"
}