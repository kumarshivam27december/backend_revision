const express = require('express');
const server = express();
const port = 8080;
const productcontroller = require('./controller/product')
server.use(express.static('public'));
server.use((req,res,next)=>{
    next();
})

server.use(express.json());

server.get('/products',productcontroller.getallproducts);
server.get('/products/:id',productcontroller.getproduct);
server.post('/products',productcontroller.createproduct);
server.put('/products/:id',productcontroller.replaceproduct);    
server.patch('/products/:id',productcontroller.updateproduct);  
server.delete('/products/:id',productcontroller.deleteproduct);
  
server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
