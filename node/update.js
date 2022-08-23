const dbConnect = require('./database')

const update = async () =>{
    const data = await dbConnect();
    const result = await data.updateOne(

        {name:"furqan rasool"},
        {$set:{name:"furqan rasool",age:"25"}}
    );
    console.log(result);
}

update();