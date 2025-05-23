const fs = require('fs');
const datas = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const products = datas.products;

exports.getallproducts = (req,res)=>{
    res.json(products);
}
exports.getproduct = (req,res)=>{
    console.log(req.params.id);
    const id = +req.params.id;
    const product = products.find(p=>p.id===id);
    res.json(product);
}
exports.createproduct = (req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
}
exports.replaceproduct = (req,res)=>{
    console.log(req.body);
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    products.splice(productIndex,1,{...req.body,id:id});

    res.status(201).json({"product":"successfully updated"});
}
exports.updateproduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id);
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body});
    res.sendStatus(201);
}
exports.deleteproduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id==id);
    const product = products[productIndex];
    products.splice(productIndex,1);
    res.status(200).json(product);
}