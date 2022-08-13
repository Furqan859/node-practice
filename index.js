const express = require('express');
const app = express();

app.get('',(req, res)=>{
    console.log("this is data send by browser",req.query.name)
    res.send("this is home page , welcome " + req.query.name)
})

app.get('/about',(req, res)=>{
    res.send("Hello this is about page")
})

app.get('/help',(req,res)=>{
    res.send("Hello this is help page")
})


app.listen(5000);