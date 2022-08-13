const express = require('express');
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

route.get('/help',(req,res)=>{
    res.send("this is a help page")
})

app.use('/',route);

app.listen(5000);