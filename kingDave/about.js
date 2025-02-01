const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "joel",
    react: "🎓",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `*Hi ${pushname}*\n\n *im dave*\n\n *ASTATECH*\n\n *owner and developer of astabots*\n\n *Please Follow my channel*\n\n\n *https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v*
> *dave*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
