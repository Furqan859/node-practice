const dbConnect = require('./database')

const updateData = async () => {

    const data = await dbConnect();
    const result = await data.updateOne(
        {name: 'furqqan rasool'},
        { 
            $set:{name: 'furqan rasool', age : 28 }
        }
    );
    console.log(result)
}

updateData();