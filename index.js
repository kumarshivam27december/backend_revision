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
    next();
})

server.use(express.json());

//producst api root or base url eg google.com/api/v2

//read  get /products 
server.get('/products',(req,res)=>{
    res.json(products);
});


//read get /products/:id
server.get('/products/:id',(req,res)=>{
    console.log(req.params.id);
    const id = +req.params.id;
    const product = products.find(p=>p.id===id);
    res.json(product);
});
 

//create api using POST /products 
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
})
   




//update api using put /products  overwrite
server.put('/products/:id',(req,res)=>{
    console.log(req.body);
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id});

    res.status(201).json({"product":"successfully updated"});
})    


 

//update api using patch /products  only update what needed
server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body});
    res.sendStatus(201);
})  


//delete api using delete /product/:id 


server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id==id);
    const product = products[productIndex];
    products.splice(productIndex,1);
    res.status(200).json(product);
});
  


server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
