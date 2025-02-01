
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "support",
    react: "🙂",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `❏━━━━━━━━━━━━━━━━━━━❐
❒sᴜᴘᴘᴏʀᴛ group❑
https://chat.whatsapp.com/D5mXDIRojDZFoU6iqMiLPJ

❒ᴡᴀ ᴄʜᴀɴɴᴇʟ❑
*https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v*

❐ʏᴏᴜ-ᴛᴜʙᴇ❏
*https://youtube.com/@davidmiracle-v1t?si=uEwNslgbVChPuzyR*

❐instagram❏
*https://www.instagram.com/davemiracle78?igsh=MTJwbmRlcGFxM2FwZg==*

❏ɢɪᴛ ʜᴜʙ❐
*https://github.com/Davemiracle01/Astabot*

⁠⁠⁠❏━━━━━━━━━━━━━━━━━━━❐`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`ғᴏʟʟᴏᴡ ᴍᴇ ᴘʟᴇᴀsᴇ 😞`)
}
})
