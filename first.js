const { response } = require('express');
const http= require('http');
 
http.createServer((request,response)=>{
    response.write("this is aparna")
    response.end("hello")
}).listen(4800);
