const colors = require('colors');
// const chalk = require('chalk');
console.log("package hello".yellow)

// const log = console.log;
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

var http = require('http');

http.createServer((req, res) => {
    // res.writeHead(200, {'content-Type': 'text/plain'});
    res.write("<h1>hello world this is world</h1>");
    res.end();
}).listen(8080);



// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);