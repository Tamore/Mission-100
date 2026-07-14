const fs = require('fs'); 
const txt = fs.readFileSync('C:/Users/NIMITI-PC/.gemini/antigravity/brain/1522e9ff-3151-4ef2-b97d-fbb7a4bd755d/.system_generated/logs/overview.txt', 'utf8'); 
const m = txt.match(/Hero\\\.tsx.*?CodeContent\\":\\"(.*?)\\",\\"Description/s); 
if (m) { 
  console.log(m[1].substring(0,6000).replace(/\\n/g, '\n').replace(/\\"/g, '"')); 
} else {
  console.log("Not found.");
}
