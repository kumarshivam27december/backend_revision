const express = require('express');
const server = express();
const port = 8080;
const productrouter = require('./routes/product');
const userrouter = require('./routes/users')
server.use(express.static('public'));
server.use((req,res,next)=>{
    next();
})

server.use(express.json());
server.use('/product',productrouter.routers);
server.use('/users',userrouter.routers1);


server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

