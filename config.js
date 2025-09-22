const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExzdmhiaUpUcnFGVEhiYUVSc2xoZ0RaTTREaWU0ZjBCM0kraXR6cHprMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakhxTFJXTnFmaCtYZ0M3RzVSU0Mzd2RXMXZqUjAxOG12cTlkUzdCNmdoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRUwzS3JRRU5wWjRJVW00NE9YOFVHb0h6RHhFNjVyK0J3SHJ6anF2ekVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUDBLY2dabnJmRkVzZ2x2VW1IZ3FwaUJFQkdhSGtuNW02NTVTTzBwVVZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQY1RWMXRsSU54eS9McVVYTHp1NDk4bnBJSzdrSXhIazVKclJKSnhHbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVGM29KSXhOdjhPTDgxdjFiZHdGTk9XdjROeGJyTUtBRmRPalhjL2w3V1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME94Mk04ei8ydEZOaC9oc0lXeStDdnFXMlZTK2p2QTA5TG9zWmdnWERYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVdyQkl4eUhPcDhiQWdkck94L1EyUkJGcXU4ZnFnQnJaeFpoazdrNDdodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ4SGx2eEVwT0ZSNFdBbS9UVkZTeVFYTHNHMk41dlJTcjNDNWRocUdBN0F6aCtRQzlUYTQrM2lVZmhJUjBieDFPTVRTdHpFMFdRRlp0VGlPTlRMMGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJUQ2FZOUFMOUtZcjQrcGxEZ3F5c0hsZk1xUFJURCtGSmZBYlIvcXdFZWE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJNV1RQUTNTOSIsIm1lIjp7ImlkIjoiMjMzMjA4MjUwNTE4Ojc3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDk4NTIwNTQ1NTY3MDI6NzdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQam4vL29FRU1YcXc4WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0SVhPTHBFaWtTZ3FaNi9wK3k1dmgyV1JHK1BVTU5DcFVMcTZiWWFkZ3lJPSIsImFjY291bnRTaWduYXR1cmUiOiJ2Y1k2ajJKWTdxem9YcEw4eWVTWElCcnNGMm9vYnBmSkFyWHo3M1NtbzY5dHJJMElVak5hRlhvZ0ViWGRMY25YRit0Wjc3ZTFUSlZoektubFkyVFpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZVJ1TVhOSXVrTmhPc3VBd1p1c0NxYTVDZmhHOFIrSXVJVWFBMVNLbmZFYWJGYXQ4NStQY3QwaWxhaFBZbVZuVDJGUFk3clZGMEVZL25PaVFYWkRFaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyMDgyNTA1MTg6NzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlNGemk2UklwRW9LbWV2NmZzdWI0ZGxrUnZqMUREUXFWQzZ1bTJHbllNaSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4NTI0NzQ1LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYifQ==",
// SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExzdmhiaUpUcnFGVEhiYUVSc2xoZ0RaTTREaWU0ZjBCM0kraXR6cHprMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakhxTFJXTnFmaCtYZ0M3RzVSU0Mzd2RXMXZqUjAxOG12cTlkUzdCNmdoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRUwzS3JRRU5wWjRJVW00NE9YOFVHb0h6RHhFNjVyK0J3SHJ6anF2ekVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUDBLY2dabnJmRkVzZ2x2VW1IZ3FwaUJFQkdhSGtuNW02NTVTTzBwVVZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQY1RWMXRsSU54eS9McVVYTHp1NDk4bnBJSzdrSXhIazVKclJKSnhHbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVGM29KSXhOdjhPTDgxdjFiZHdGTk9XdjROeGJyTUtBRmRPalhjL2w3V1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME94Mk04ei8ydEZOaC9oc0lXeStDdnFXMlZTK2p2QTA5TG9zWmdnWERYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVdyQkl4eUhPcDhiQWdkck94L1EyUkJGcXU4ZnFnQnJaeFpoazdrNDdodz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ4SGx2eEVwT0ZSNFdBbS9UVkZTeVFYTHNHMk41dlJTcjNDNWRocUdBN0F6aCtRQzlUYTQrM2lVZmhJUjBieDFPTVRTdHpFMFdRRlp0VGlPTlRMMGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJUQ2FZOUFMOUtZcjQrcGxEZ3F5c0hsZk1xUFJURCtGSmZBYlIvcXdFZWE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJNV1RQUTNTOSIsIm1lIjp7ImlkIjoiMjMzMjA4MjUwNTE4Ojc3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDk4NTIwNTQ1NTY3MDI6NzdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQam4vL29FRU1YcXc4WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0SVhPTHBFaWtTZ3FaNi9wK3k1dmgyV1JHK1BVTU5DcFVMcTZiWWFkZ3lJPSIsImFjY291bnRTaWduYXR1cmUiOiJ2Y1k2ajJKWTdxem9YcEw4eWVTWElCcnNGMm9vYnBmSkFyWHo3M1NtbzY5dHJJMElVak5hRlhvZ0ViWGRMY25YRit0Wjc3ZTFUSlZoektubFkyVFpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZVJ1TVhOSXVrTmhPc3VBd1p1c0NxYTVDZmhHOFIrSXVJVWFBMVNLbmZFYWJGYXQ4NStQY3QwaWxhaFBZbVZuVDJGUFk3clZGMEVZL25PaVFYWkRFaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyMDgyNTA1MTg6NzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlNGemk2UklwRW9LbWV2NmZzdWI0ZGxrUnZqMUREUXFWQzZ1bTJHbllNaSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4NTI0NzQ1LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYifQ==add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mr🤐 No🔐bod🇬🇭y🤖",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "233208250518",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Mr🤐 No🔐bod🇬🇭y🤖",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "233208250518",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
