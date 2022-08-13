const express = require('express');
const app = express();
const reqFile = require('./middleware');
const route = express.Router();

route.use(reqFile)

// app.use(reqFile);

app.get('/', (req, res) => {
    res.send("welcome on home page");
})

app.get('/users',(req,res)=>{
    res.send("welcome on user page")
})

route.get('/about', (req, res) => {
    res.send("welcome on About page");
})

app.use('/',route);

app.listen(5000)