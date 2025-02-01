const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`┏> ɴᴀᴍᴇ  : 𝐀𝐒𝐓𝐀𝐁𝐎𝐓
> ᴏᴡɴᴇʀ : DAVE
> ʀᴇᴘᴏ https://github.com/Davemiracle01/Astabot
*follow my channel*
https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036329902932🐱322@newsletter',
      newsletterName: "𝐀𝐒𝐓𝐀𝐁𝐎𝐓",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝐀𝐒𝐓𝐀𝐁𝐎𝐓',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Davemiracle01/Astabot" ,
thumbnailUrl: "https://files.catbox.moe/5a2euh.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
