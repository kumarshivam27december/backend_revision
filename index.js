require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');


const productrouter = require('./routes/product');
const userrouter = require('./routes/users')

//db connect
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('database connected');
}


server.use(express.static('public'));
server.use((req,res,next)=>{
    next();
})

server.use(express.json());
server.use('/products',productrouter.routers);
server.use('/users',userrouter.routers1);


server.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});

