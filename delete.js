const dbConnect = require('./database')

const deleteData =async () => {
const data = await dbConnect();
const result = await data.deleteMany({name: 'ahmed'});
console.log(result);
}

deleteData();