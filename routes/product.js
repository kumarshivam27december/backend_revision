const express = require('express');
const productcontroller = require('../controller/product')
const routers = express.Router();


routers.get('/',productcontroller.getallproducts)
      .get('/id',productcontroller.getproduct)
      .post('/',productcontroller.createproduct)
      .put('/:id',productcontroller.replaceproduct)    
      .patch('/:id',productcontroller.updateproduct)  
      .delete('/:id',productcontroller.deleteproduct);
    

exports.routers = routers;