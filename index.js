const express = require('express');
const app = express();

const reqFile = (req, res, next) => {
    if(!req.query.age){
        res.send("Pleaser provide age")
    }else if(req.query.age<18){
        res.send("you are under 18 years old")
    }
    else{
   next();
    }
}

// app.use(reqFile);

app.get('/', (req, res) => {
    res.send("welcome on home page");
})

app.get('/users',reqFile ,(req,res)=>{
    res.send("welcome on user page")
})

app.get('/about', (req, res) => {
    res.send("welcome on About page");
})

app.listen(5000)