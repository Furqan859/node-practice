const fs = require('fs');
const path = require('path');
const dirName = path.join(__dirname, 'files');

for(let i = 0; i <5;i++) {
    fs.writeFileSync(dirName+"/Hello"+i+".txt","This is 2nd file")
}

fs.readdir(dirName,(err,file) => {
    file.forEach((item)=>{
     console.log(item)
    })
    console.log(file[0])
})