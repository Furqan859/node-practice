
//there is how we can use promise to make Asynchronous to sychronous
//promise is function that stop the asynchronous and wait the function gut output then continue to next line 

let a = 20;
let b= 0;

let waitData = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(30)
    },2000)
})


waitData.then((data)=>{
    b=data
    console.log(a+b)
})



//Asynchronous and synchronous operations
// let a=20;
// let b=0;
// setTimeout(()=>{
//     b=20;
// })
// console.log(a+b)

//in this function Asynchrous way to get the output because of asynchronous he cant wait to load on some function its puts in api and continue to next line and perform other task.
// in this situation we use promises to make synchronous to load function then move on next line










// const fs = require('fs');
// const path = require('path');
// const dirName = path.join(__dirname, 'crud');
// const filePath = `${dirName}/furqan.txt`;
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


// fs.unlinkSync(`${dirName}/.txt`)













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