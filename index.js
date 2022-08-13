const express = require('express')
const path = require('path')

const app = express()
const dirpath = path.join(__dirname, 'public');
// app.use(express.static(dirpath));

app.set('view engine', 'ejs');



app.get('/profile', (req, res) =>{
    const user = {
        name:"furqan",
        city:"lahore",
        email:"furqan@gmail.com",
    }
    res.render('profile',{user})
})


app.get('', (req, res) =>{
    res.sendFile(`${dirpath}/index.html`)
})

app.get('/about', (req, res) =>{
    res.sendFile(`${dirpath}/about.html`)
})

app.get('/help', (req, res) =>{
    res.sendFile(`${dirpath}/help.html`)
})

app.get('*', (req, res) =>{
    res.sendFile(`${dirpath}/nopage.html`)
})

app.listen(5000);












// const express = require('express');
// const app = express();

// app.get('',(req, res)=>{
    
//     res.send(`<h1>this is home page</h1>
//     <a href="/about">About</a>
//     <a href="/help">help</a>
//     `)
// })

// app.get('/about',(req, res)=>{
//     res.send(`<input type="text placeholder="username value="${req.query.name}" />
//     <button>My Button</button>
//     <a href="/">home</a>
//     `)
// })

// app.get('/help',(req,res)=>{
//     res.send(  `Hello this is help page
//     <a href="/">home</a>
//     `
//     )
// })


// app.listen(5000);