const http = require('http')
const fs = require('fs');
const indexpage = fs.readFileSync('./index.html','utf-8');
const page404 = fs.readFileSync('./page404.html','utf-8');
const datas = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const products = datas.products;
const express = require('express');
const server = express();
const morgan = require('morgan');
const port = 8080;

server.use(express.static('public'));

server.use((req,res,next)=>{
    console.log(
        req.method, 
        req.url, 
        req.hostname, 
        new Date(), 
        req.get('User-Agent')
    );
    next();
});

// server.use(morgan('default'));

server.use(express.json());// body parser to parse json data
// server.use(express.urlencoded); //for form data
 
const auth = (req,res,next)=>{
    // console.log(req.query);
    if(req.body.password =='1234'){
        next();
    }else{
        res.sendStatus(401);
    }
}

// server.use(auth);

// Remove this route to allow express.static to serve index.html at '/'

// Removed any GET '/' route so express.static can serve index.html

// server.get('/',(req,res)=>{ 
//     res.json({type:"get"});
// });
server.post('/',auth,(req,res)=>{
    res.json({type:"post"});
})
server.delete('/',(req,res)=>{
    res.json({type:"delete"});
})
server.put('/',(req,res)=>{
    res.json({type:"put"});
})
server.patch('/',(req,res)=>{
    res.json({type:"patch"});
})


/*
server.get('/demo',(req,res)=>{
    // res.send('<p>welcome to the <strong>home</strong> page<p>');
    // res.sendFile('/home/shivam/complete_backend_revision/page404.html')
    // res.json(datas);
    // res.sendStatus(404); 
})
*/


server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
