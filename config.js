const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_31_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgMTAzLFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDY3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICA3NixcbiAgICAgICAgODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI4LFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhhTSs1aTRab1pZZXJmbU5YUllRUTlDdnFXaWd0TU0wQlVqZEl1bHZIaFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZlVVpiaFc3UXZPWVZkdEJuWjlZeWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDJiNzZmY2QtMmI4ZC00YTdiLTljYWQtNDAwMGJhZTVlMzMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDE1NSxcbiAgICAgIDE4LFxuICAgICAgMTUxLFxuICAgICAgNTYsXG4gICAgICAxMzksXG4gICAgICAyOCxcbiAgICAgIDIyMSxcbiAgICAgIDEwNyxcbiAgICAgIDI1NSxcbiAgICAgIDgxLFxuICAgICAgOTIsXG4gICAgICAzNSxcbiAgICAgIDE1MyxcbiAgICAgIDYsXG4gICAgICAyMzMsXG4gICAgICAyNDgsXG4gICAgICAxNjEsXG4gICAgICAzOCxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDY1LFxuICAgICAgMTMsXG4gICAgICAzNixcbiAgICAgIDE4MixcbiAgICAgIDE0MSxcbiAgICAgIDEyMixcbiAgICAgIDQ5LFxuICAgICAgMTMyLFxuICAgICAgMTE5LFxuICAgICAgMTU5LFxuICAgICAgMTE5LFxuICAgICAgMTY1LFxuICAgICAgMTAwLFxuICAgICAgMjIwLFxuICAgICAgMTM2LFxuICAgICAgMTIwLFxuICAgICAgMTE3LFxuICAgICAgMjEyLFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNFQkxMN1hNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDczMjM0MDY0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNzQ2NjU3NjI5ODIzNjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01hUG0vZ0ZFTWU3eXJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTFBQZHpSTUdvODVXaklCMVFXZXdpZHc0Ym5NQXNEVE95MkwyUWs0QmxHYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmUWxGdVBOUkhmUmRPcVhnNnJudGl5TWN4cXVaRWJFc0VRbHBaaXdTSU9TTXRNQW9NWW1LRTJYdVRWWHpiSEpiVWxNQTZwZ2dTV2Q4MUE5dVBwSU9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2bnlxMXVHMWhCMTZmSjhzaXhIeHB1eFZCOGg1dE42dEIxQmIxTEJ4R05ubmVTUXpSenpkU09FNXl3UzgwZjAxS0wwczJsNmttK0RzMEZoRkd5ZEJCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDczMjM0MDY0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4ODQ2ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLWnNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtacy5qc29uIjogIntcImtleURhdGFcIjpcInJjWGZWVFpGTmdyU1dWK0JmN2tTeC9KeFNTVzI5OHhHbFpyN1hyN29Uc0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU5NDI3OTg3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4ODExNTY2NzU2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
