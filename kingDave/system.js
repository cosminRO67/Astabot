const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `

┃*𝐫𝐮𝐧𝐭𝐢𝐦𝐞* ${runtime(process.uptime())}
┃*𝐫𝐚𝐦 𝐮𝐬𝐚𝐠𝐞* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃*𝐡𝐨𝐬𝐭𝐧𝐚𝐦𝐞* ${os.hostname()}
┃𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦:
┃${process.env.DYNO ? "Heroku" : "Localhost"}
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
