const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/admin");


const productSehema = new mongoose.Schema({
    name:String,
    age:Number,
    number:Number
});

const main = async () =>{

   
    const Product = mongoose.model('datas',productSehema);
    let data = new Product({name:"update",age:5,number:3055673859});
    let result = await data.save();
    console.log(result)
}



const updateInDB = async () => {
    const Product = mongoose.model('datas',productSehema);
    let data = await Product.updateOne(
        {name:"update12345"},
        {$set: {name:"furqan",age:27}}
    )
    console.log(data)
}


const deleteInDb = async () => {
    const Product = mongoose.model('datas',productSehema)
    let data = await Product.deleteOne({name:"furqan"})
    console.log(data)
}

const findInDB = async () => {
    const Product = mongoose.model('datas',productSehema)
    let data = await Product.find()
    console.log(data)
}

findInDB();


