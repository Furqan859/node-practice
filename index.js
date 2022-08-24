const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    name: 'root',
    password:'',
    database: 'test'
});

con.connect((err)=>{
    if(err){
        console.log("error");
    }else{
        console.log("Connect")
    }
})