/**
 * 
 * create rest api with dummy json 
 */

const express = require('express');
const fs = require('fs');
const prd = JSON.parse(fs.readFileSync('./dummy.json','utf-8'));
const quotes = prd.quotes;
const server = express();
server.use((req,res,next)=>{
    next();
});
server.use(express.json());//body parser

server.get('/products',(req,res)=>{
    res.json((quotes));
});


server.get('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const product = quotes.find(p=>p.id===id);
    res.json(product);
});

server.post('/products',(req,res)=>{
    const pr = req.body;
    quotes.push(pr);
    res.status(200).json(pr);
})
server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productindex = quotes.findIndex(p=>p.id===id);
    quotes.splice(productindex,1,{...req.body,id:id});
    res.send(200);
})
server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productindex = quotes.findIndex(p=>p.id===id);
    const product = quotes[productindex];
    quotes.splice(productindex,1,{...product,...req.body});
    res.send(product);
})
server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productindex = quotes.findIndex(p=>p.id===id);
    quotes.splice(productindex,1);
    res.status(200);
})


const port = 8080;

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});
