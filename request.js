const http = require('http');

http.createServer((req, res) => {
    console.log(req.method);
    if(req.url=="/"){
        res.write("home page");
    }else if(req.url=="/login"){
        res.write("login page");
    }else{
        res.write("other page")
    }
    res.end();
}).listen(3000, () => {
    console.log("Server running on port 3000");
});