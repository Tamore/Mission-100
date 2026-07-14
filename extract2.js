const fs = require('fs'); 
const txt = fs.readFileSync('C:/Users/NIMITI-PC/.gemini/antigravity/brain/1522e9ff-3151-4ef2-b97d-fbb7a4bd755d/.system_generated/logs/overview.txt', 'utf8'); 

const regex = /"TargetFile":"[^"]*Hero\.tsx"[^}]*"CodeContent":"(.*?)"/g;
let match;
while ((match = regex.exec(txt)) !== null) {
  console.log("Found Hero.tsx edit:");
  console.log(match[1].substring(0, 4000).replace(/\\n/g, '\n').replace(/\\"/g, '"'));
  console.log("----------------------");
}
