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


global.devs = "923349852285" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "92349852285";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923349852285,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_03_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQwLFxuICAgICAgICA2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICA2MixcbiAgICAgICAgNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYyLFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaT1A0dVRvZ2RZZmF5MUoxUW1ETjFIZzdEZUZPd28zSVZ4bC9PZHNteGk0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBbGpaTUxQWVFjS0c4WFljZ1dzN0N3XCIsXG4gIFwicGhvbmVJZFwiOiBcImE3YTQxNzA2LTczZmYtNDdmOS1hMDg1LTZhYTc4NDQ3NjVjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAzNSxcbiAgICAgIDcxLFxuICAgICAgMTc0LFxuICAgICAgMTQyLFxuICAgICAgMjI1LFxuICAgICAgMTEsXG4gICAgICAyMTksXG4gICAgICA1OCxcbiAgICAgIDI0NCxcbiAgICAgIDE3OCxcbiAgICAgIDEsXG4gICAgICAyNCxcbiAgICAgIDI0MixcbiAgICAgIDE3MCxcbiAgICAgIDE3NixcbiAgICAgIDIxLFxuICAgICAgMTAxLFxuICAgICAgODEsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMTg3LFxuICAgICAgMTcyLFxuICAgICAgMTg2LFxuICAgICAgMjUsXG4gICAgICAxOTksXG4gICAgICA3OCxcbiAgICAgIDg4LFxuICAgICAgNzksXG4gICAgICA5NSxcbiAgICAgIDExLFxuICAgICAgMTU3LFxuICAgICAgMTEsXG4gICAgICAyMDUsXG4gICAgICAxMzUsXG4gICAgICA5NixcbiAgICAgIDY2LFxuICAgICAgNzYsXG4gICAgICA5OSxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5OOTFSRFdMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDk4NTIyODU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJpbGFsXCIsXG4gICAgXCJsaWRcIjogXCIyMjg1MzU0NzgyOTI1Nzk6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYm0ybzRHRVArRzBiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhqYUN6VEpjOEdrK2pPanRjWHBSVC9Udy9wYTRRQmVXeXlRQ3cvT21BaG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRFp5R3NsdFVJT1JnUWxzMHBVTkhSS0M4WEMzRllEK1NmUjhKN3JDTTlOS0RoeHNLc2hROVQveUdYdTlnQ1VjR1BNSHRVaWcycjBWSy9YTVYveTNnQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0xZUkxFMllRcThBK0J5ZDNsS21Uc3dCc0ZKS1N0QVQ5TzBIaDRLUjUveW1hSnpFNlhOT2JnY1hSc0YxRlJKUHl0TzMvTDNNa3lxUzlwYmwxZ2taZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ5ODUyMjg1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDg5Nzk1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Bilal Ahmed",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
