const dbConnect = require('./database')


const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insert(
        {name:"ahmed",age:25,number:3055673859,}
        )

        if(result.acknowledged){
        console.log("data inserted");
        }
}


insert();