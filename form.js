const http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    res.write(`
        <form action="/submit" method="post">
        <input type="text" placeholder="enter name" name='name' />
        <input type="text" placeholder="enter email" name='email' />
        <button>submit</button>
        </form>
        `);
    res.end()
}).listen(3000)