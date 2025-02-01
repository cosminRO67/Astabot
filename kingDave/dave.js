const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    react: "⚔️",
    alias: ["panel","commands"],
    desc: "menu the bot",
    category: "main"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let desc = `
✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> ʜᴇʟʟᴏ  ${pushname} 𝐭𝐡𝐢𝐬 𝐢𝐬 
         *𝐀𝐒𝐓𝐀𝐁𝐎𝐓*
✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧

> ʀᴜɴᴛɪᴍᴇ :   ${runtime(process.uptime())}
> ʀᴀᴍ ᴜꜱᴀɢᴇ : 21/128 ɢʙ
> ᴍᴏᴅᴇ : ${config.MODE}
> ᴘʀᴇғɪx : ${config.PREFIX}

┏❒ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs❑
┃ᴜᴘᴅᴀᴛᴇᴄᴍs
┃sᴇᴛᴛɪɴɢs
┃ᴏᴡɴᴇʀ
┃ʀᴇᴘᴏ
┃sʏꜱᴛᴇᴍ
╽ꜱᴛᴀᴛᴜꜱ
┃ʙʟᴏᴄᴋ
┃ᴜɴʙʟᴏᴄᴋ
┃sʜᴜᴛᴅᴏᴡɴ
┃ᴄʟᴇᴀʀᴄʜᴀᴛs
┃sᴇᴛᴘᴘ
┃ʙʀᴏᴀᴅᴄᴀsᴛ
┃ᴊɪᴅ
┃ɢᴊɪᴅ
┃ʀᴇꜱᴛᴀʀᴛ
┗❑
┏❒ᴅᴏᴡɴʟᴏᴀᴅᴇʀ-ᴄᴍᴅ❑                
┃ғʙ
┃ɪɴꜱᴛᴀ
┃ᴠɪᴅᴇᴏ
┃ɢᴅʀɪᴠᴇ
┃ᴛᴡɪᴛᴛᴇʀ
┃ᴛᴛ
┃ᴍᴇᴅɪᴀғɪʀᴇ
┃sᴏɴɢ
┃ᴘʟᴀʏ
╽ᴠɪᴅᴇᴏ
┃ᴠɪᴅᴇᴏ2
┃ɪᴍɢ
┃ᴀᴘᴋ
┃ᴅᴀʀᴀᴍᴀ
┃ᴘʟᴀʏ2
┃ʙᴀɪsᴄᴏᴘᴇ
┃ɢɪɴɪsɪsɪʟᴀ
┗❒
┏❒ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs❑
┃ʀᴇᴍᴏᴠᴇ
┃ᴅᴇʟᴇᴛᴇ
╽ᴀᴅᴅ
┃ᴋɪᴄᴋ
┃ᴋɪᴄᴋᴀʟʟ
┃sᴇᴛɢᴏᴏᴅʙʏᴇ
┃sᴇᴛᴡᴇʟᴄᴏᴍᴇ
┃ᴘʀᴏᴍᴏᴛᴇ
╽ᴅᴇᴍᴏᴛᴇ
╽ᴛᴀɢᴀʟʟ
┃ɢᴇᴛᴘɪᴄ
┃ɪɴᴠɪᴛᴇ
┃ʀᴇᴠᴏᴋᴇ
┃ᴊᴏɪɴʀᴇᴏ̨ᴜᴇsᴛs
┃ᴀʟʟʀᴇᴏ̨
┃ᴍᴜᴛᴇ
┃ᴜɴᴍᴜᴛᴇ
┃ʟᴏᴄᴋɢᴄ
┃ᴜɴʟᴏᴄᴋɢᴄ
┃ʟᴇᴀᴠᴇ
┃ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ
╽ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ
┃ᴊᴏɪɴ
┃ʜɪᴅᴇᴛᴀɢ
┃ɢɪɴғᴏ
┃ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ
┃ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ
┃ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ
┃sᴇɴᴅᴅᴍ
┗❑
┏❒ɪɴғᴏ ᴄᴏᴍᴍᴀɴᴅs❑
┃sᴄʀɪᴘᴛ
┃ʀᴇᴘᴏ
┃ᴀʟɪᴠᴇ
┃ʙᴏᴛɪɴꜰᴏ
┃ꜱᴛᴀᴛᴜꜱ
┃ꜱᴜᴘᴘᴏʀᴛ
┃ᴘɪɴɢ
┃ꜱʏꜱᴛᴇᴍ
┗❑
┏❒ʀᴀɴᴅᴏᴍ-ᴄᴏᴍᴍᴀɴᴅs❑
┃ᴋɪɴɢ
┃ᴅᴏɢ
┃ᴀɴɪᴍᴇ
┃ᴀɴɪᴍᴇɢɪʀʟ
┃ᴀɴɪᴍᴇɢɪʀʟ1
┃ᴀɴɪᴍᴇɢɪʀʟ2
┃ᴀɴɪᴍᴇɢɪʀʟ3
┃ᴀɴɪᴍᴇɢɪʀʟ4
┃ᴀɴɪᴍᴇɢɪʀʟ5
┗❑
┏❒ᴄᴏɴᴠᴇᴛᴏʀ ᴄᴏᴍᴍᴀᴅs❑
┃sᴛɪᴄᴋᴇʀ
┃ᴛʀᴛ <ᴛᴇxᴛ>
┃ᴛᴛs <ᴛᴇxᴛ>
┗❒

┏❒ᴀɪ ᴄᴏᴍᴍᴀɴᴅs❑
┃ɢᴘᴛ <ᴛᴇxᴛ>
┃ᴀɪ <ᴛᴇxᴛ>
┃ʙᴏᴛ <ᴛᴇxᴛ>
┗❑
┏❒ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅs❒
┃ᴛʀᴛ
┃ᴊᴏᴋᴇ
┃ғᴀᴄᴛ
┃ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ
┃ɢᴘᴀꜱꜱ
┃ʜᴀᴄᴋ
┃ǫᴜᴏᴛᴇ
┃ꜱʀᴇᴘᴏ
┃ᴅᴇꜰɪɴᴇ
┗❑
 *©𝐃𝐚𝐯𝐞*`;

const vv = await conn.sendMessage(from, { 
  image: { url: config.ALIVE_IMG }, 
  caption: desc, 
  contextInfo: {
    mentionedJid: [''], 
    groupMentions: [],
    forwardingScore: 999, // برای فوروارد شدن
    isForwarded: true, // پیام به صورت فوروارد شده نشان داده می‌شود
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036329902932622@newsletter', 
      newsletterName: "𝐃𝐚𝐯𝐞", 
      serverMessageId: 999
    },
    externalAdReply: { 
      title: '𝐃𝐚𝐯𝐞', 
      body: `${pushname}`, 
      mediaType: 1, 
      sourceUrl: "https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v", 
      thumbnailUrl: "https://whatsapp.com/channel/0029VavpWUvGk1Fkbzz0vz0v" ,
      previewType: 'PHOTO',
      renderLargerThumbnail: true,
      showAdAttribution: true
    }
  }
}, { quoted: mek });
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let owner = `
*OWNER-CMD*
*╭┈───────────────•*
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.sᴇᴛᴛɪɴɢs*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*╰┈───────────────•*

> *©𝐃𝐚𝐯𝐞*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner }, { quoted: mek });                     
                        break;
                    case '2':               
                        let owner1 = `
*DOWNLOADER-CMD*                        
*╭┈───────────────•*
*┋* *.ғʙ*
*┋* *.ɪɴꜱᴛᴀ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ɢᴅʀɪᴠᴇ*
*┋* *.ᴛᴡɪᴛᴛᴇʀ*
*┋* *.ᴛᴛ*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ*
*┋* *.ꜱᴏɴɢ*
*┋* *.ᴘʟᴀʏ*
*┋* *.ᴠɪᴅᴇᴏ*
*┋* *.ᴠɪᴅᴇᴏ2*
*┋* *.ɪᴍɢ*
*┋* *.ᴀᴘᴋ*
*┋* *.ᴅᴀʀᴀᴍᴀ*
*┋* *.ᴘʟᴀʏ2*
*┋* *.ʙᴀɪsᴄᴏᴘᴇ*
*┋* *.ɢɪɴɪsɪsɪʟᴀ*
*╰┈───────────────•*

> *©𝐃𝐚𝐯𝐞*`;
                        
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner1 }, { quoted: mek });                     
                        break;
                    case '3':               
                        let owner2 = `
*GROUP-CMD*
*╭┈───────────────•*
*┋* *.ʀᴇᴍᴏᴠᴇ*
*┋* *.ᴅᴇʟᴇᴛᴇ*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.ᴋɪᴄᴋᴀʟʟ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*╰┈───────────────•*

> *©𝐃𝐚𝐯𝐞*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner2 }, { quoted: mek });                     
                        break;
                    case '4':               
                        let owner3 = `
*INFO-CMD*
*╭┈───────────────•*
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*╰┈───────────────•*

> *©𝐃𝐚𝐯𝐞*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner3 }, { quoted: mek });                     
                        break;
                    case '5':               
                        let owner4 = `
*RANDOM-CMD*
*╭┈───────────────•*
*┋* *.ᴋɪɴɢ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*╰┈───────────────•*

> *©𝐃𝐚𝐯𝐞*`;

await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner4 }, { quoted: mek });                     
                        break;
                    case '6':               
                        let owner5 = `
*CONVERTER-CMD*
*╭┈───────────────•*
*┋* *.sᴛɪᴄᴋᴇʀ*
*┋* *.ᴛʀᴛ <ᴛᴇxᴛ>*
*┋* *.ᴛᴛs <ᴛᴇxᴛ>*
*╰┈───────────────•*

> *©𝐃𝐚𝐯𝐞*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner5 }, { quoted: mek });                     
                        break;
                    case '7':               
                        let owner6 = `
*AI-CMD *
*╭┈───────────────•*
*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*┋* *.ʙᴏᴛ <ᴛᴇxᴛ>*
*╰┈───────────────•*

> *©𝐃𝐚𝐯𝐞*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner6 }, { quoted: mek });                     
                        break;
                    case '8':               
                        let owner7 = `
*WALLPAPERS-CMD*
*╭┈───────────────•*
*┋* *.ɪᴍɢ*
*╰┈───────────────•*

> *©𝐃𝐚𝐯𝐞*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner7 }, { quoted: mek });                     
                        break;
                    case '9':               
                        let owner8 = `
*OTHER-CMD*
*╭┈───────────────•*
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*╰┈───────────────•*`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner8 }, { quoted: mek });                     
                        break;
                    default:
                        reply("*ʀᴇᴘᴏʀᴛ ᴀɴʏ ᴇʀʀᴏʀ ᴛᴏ ᴍʏ ᴏᴡɴᴇʀ wa.me 254114127157*");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
