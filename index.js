const fs = require('fs');
const path = require('path');
const dirName = path.join(__dirname, 'crud');
const filePath = `${dirName}/furqan.txt`;
// fs.writeFileSync(filePath,"this is sample file")


// fs.readFile(filePath, "utf8" ,(err,item) => {
//    if(!err){ 
//     console.log(item)
//    }else{
//     console.log("Read file got error")
//    }
// });


// fs.appendFile(filePath," This file is append",(err)=>{
//     if(!err){
//         console.log("file is updated")
//     }
// })


// fs.rename(filePath,`${dirName}/fruit.txt`,(err)=>{
//     console.log("file is renamed")
// })


fs.unlinkSync(`${dirName}/.txt`)













// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filepath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filepath,"this is simple file")









// const fs = require('fs');
// const path = require('path');
// const dirName = path.join(__dirname, 'files');

// for(let i = 0; i <5;i++) {
//     fs.writeFileSync(dirName+"/Hello"+i+".txt","This is 2nd file")
// }

// fs.readdir(dirName,(err,file) => {
//     file.forEach((item)=>{
//      console.log(item)
//     })
//     console.log(file[0])
// })