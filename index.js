const fs = require('fs');
const path = require('path');
const dirName = path.join(__dirname, 'files')
for(let i = 0; i <5;i++) {
fs.writeFileSync(dirName + "/hello"+i+".txt","this is a file")
}