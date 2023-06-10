const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("welcome to nodejs !")
    res.end()
}).listen(9448)