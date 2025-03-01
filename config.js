const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Joel-Md&XmKVZzMJ",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
OWNER_IMG: process.env.OWNER_IMG || "https://i.ibb.co/99GF2n5y/b2f05b84c9f29bd4.jpg",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/99GF2n5y/b2f05b84c9f29bd4.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*𝐀𝐒𝐓𝐀𝐁𝐎𝐓*",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "",
AUTO_REACT: process.env.AUTO_REACT || "",
OWNER_REACT: process.env.OWNER_REACT || "",
BOT_NAME: process.env.BOT_NAME || "𝐀𝐒𝐓𝐀𝐁𝐎𝐓",
STATUS_REPLY: process.env.STATUS_REPLY || "",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
