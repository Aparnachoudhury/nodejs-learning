const http=require('http');

const userdata=[
    {
        name:'aparna',
        age:22
    },
    {
        name:'appy',
        age:21
    }
]
http.createServer((req,res)=>{
    res.setHeader("Content-Type",'application/json')
    res.write(JSON.stringify(userdata));

    res.end();
}).listen(3000)