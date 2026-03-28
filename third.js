const http=require('http');
http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`
        <html>
        <head>welcome</head>
        <h1>hi</h1>
        <body>hi aparna </body>
        </html>
        `)
    res.end();
}).listen(8001);