const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();

const reqFile = require('./middleware');

const route = express.Router();

route.use(reqFile)

app.get('/', (req, res) => {
    res.send("this is a home page")
})

app.get('/about',(req,res)=>{
    res.send("this is a about page")
})

app.get('/help',reqFile,(req,res)=>{
    res.send("this is a help page")
})

app.use('/',route);

const PORT = process.env.PORT  || 3000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is runing on ${PORT}`);
    });
}).catch((err)=>{
    console.log("error",err)    
})
