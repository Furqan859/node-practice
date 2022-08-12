const http = require('http');

http.createServer((req,res) => {
res.writeHead(200,{'Content-Type': 'application/json'});
res.write(JSON.stringify({name:"furqan",email:"furqan@gmail.com",contact:"03055673859"}));
res.end();
}).listen(8000)