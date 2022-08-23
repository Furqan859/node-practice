const dbConnect = require('./database');

const main = async () =>{
let data = await dbConnect();
 data = await data.find({}).toArray();
 console.log(data);
}

main();










// const dbConnect = require('./database');

// const main = async () =>{
// let data = await dbConnect();
// data = await data.find().toArray();
// console.log(data);
// }

//  main();


