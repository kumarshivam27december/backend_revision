const express = require('express');
const usercontroller = require('../controller/users')
const routers1 = express.Router();

routers1.get('/',usercontroller.getalluser)
      .get('/:id',usercontroller.getuser)
      .post('/',usercontroller.createuser)
      .put('/:id',usercontroller.replaceuser)    
      .patch('/:id',usercontroller.updateuser)  
      .delete('/:id',usercontroller.deleteuser);
    
exports.routers1 = routers1;