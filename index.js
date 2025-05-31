require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const authrouter = require('./routes/auth')
const productrouter = require('./routes/product');
const userrouter = require('./routes/users')
const path = require('path');
const fs = require('fs');
const public = fs.readFileSync(path.resolve(__dirname,'./public.key'),'utf-8');

//db connect
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database connected');
}

server.use(cors());
server.use(express.urlencoded()) 
server.use(express.static('dist'));
const auth = ((req,res,next)=>{
    
    try {
        const token = req.get('Authorization').split('Bearer ')[1];
        console.log(token);
        var decoded = jwt.verify(token,public);
        if(decoded.email){
            next();
        }else{
            res.sendStatus(401);
        }
        
    } catch (error) {
        res.sendStatus(401);
    }
});
server.use((req,res,next)=>{
    next();
})

server.use(express.json());
server.use('/auth',authrouter.router)
server.use('/products',auth,productrouter.routers);
server.use('/users',auth,userrouter.routers1);


server.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});

