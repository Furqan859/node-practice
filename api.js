const dbConnect = require('./database')
const express = require('express')
const app = express();
require('dotenv').config();


app.use(express.json());

app.get('/', async (req, res)=>{
    let data = await dbConnect();
     data = await data.find().toArray()
     res.send(data);
})


app.post('/',async (req, res)=>{
    let data = await dbConnect();
    let result = await data.insert(req.body);
    res.send(result);
})


app.listen(process.env.PORT)