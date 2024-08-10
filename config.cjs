// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1XSnRqSFRPODlkcDFpOHhEQm91MTNQNjJMN25GRjZwaGo0QTRtY3kzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFhFdUlua2p5K0dUYjdnT3VXNkZzVHFkZWlUejdkR2VRaUFsdUNRTlJHMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRFJiZG5XdHhpakNMUlFmNm02MGxkanRpNnJMeTBkZnpCbEhNeVBFSDAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTko3WjhaUVJHR3JOQkptdnVsVmNDZEU4ODBSZHNSMDlXZXd5OXpXOURRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1NZ2d5YWlLczlteGZYdXpEV01oRk9EUm1QN1hYblhIS3VYcDhNcFQvbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd6NzZvL3czamFuTThoeVh3Q2pZY2MxMDRtTjM1TktDR3lsbUhYM0g1Unc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklOTGRlblVGZ3N6aWR3SzhhcW1PNFlIUkY2akFqWTBnblAvc0drOVYwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMndML3JMSGFCd0JialZzWFBMakM5bnh0Y2pMRDRic0dMOWhpRFJoTk5FWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpJTW9wNjljRHVMSUdiUmpwSkdkbFR2UnhnT2F3NTZBNENodlhrRHVMZlcxc1pBTDVPSXNkZTB4eTJmUmZIUU9XWm5ScHU3THkyYjFCTitvMW8wS2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJVdHVBQkxkaG1Gc1pMbER1Z3FFcmo2OVVnR3hVWC8rTEVUOVhTSHFGUE5JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1cEVlVm1lUFN1aThMNy1XVTBoS3Z3IiwicGhvbmVJZCI6ImY3ZjBmNDk1LTM2NTktNDg0OS1hNjE4LWYwODNjYWNmZjhiOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLelRnWGRiUjh5NmZrVTJCM2tMSGN5UEhCeUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXpBUjRUMHlTS25MQnFINHIyclVZazl0OTI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlMyWVlEN0tRIiwibWUiOnsiaWQiOiI5NDc2NDgxMDkwNzo3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJT083OElHRUxQVTNiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHa3RuWk1aTUxPRGUrRUQzR1hKOGRSWnpaN2owTEdZUUhVS2pJVlFYN1VZPSIsImFjY291bnRTaWduYXR1cmUiOiIyM0NGc1JYbTFtVUh5bG1Lb3poRUpvcXlDcHJ2enpiUzkyUDZjMU9PdUlCaTFmM3N4aXdDbVdIVklGRVB2czVHdHFvazNBZnBPTDBhK0FDV1h0cGREZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSkZJSXBodk9VNWN3UXlTYW5HdldMcmxSWW8zZWIwcEU5V0NBNThhUUI5WmhnQ3QxaS9PWkYwQW1xTmxNODc0eklCcGlzQXprNm9NakFvT3R1ZFZWZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDgxMDkwNzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJwTFoyVEdUQ3pnM3ZoQTl4bHlmSFVXYzJlNDlDeG1FQjFDb3lGVUYrMUcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMyOTYzMTl9",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "✪⏤͟͞★⃝ꪶ‎𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥𖥘✪͜͡➺",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94742274855",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;
