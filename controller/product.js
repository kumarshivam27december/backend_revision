const model = require('../models/product');
const Product = model.Product;
const mongoose = require('mongoose');

exports.getallproducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}
exports.getproduct = async (req, res) => {
    console.log('getting single product')
    const id = req.params.id;
    console.log(id);
    const prd = await Product.findById(id);
    res.json(prd);
}
exports.createproduct = async (req, res) => {
    const product = new Product(req.body);
    // product.title = 'iphonex';
    // product.description = 'this is an iphone';
    // product.price=69;
    try {
        const doc = await product.save();
        res.json(doc);
    } catch (err) {
        res.json(err);
    }
}
exports.replaceproduct = async (req, res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }catch(err){
        console.log(err);
        res.json(403);
    }
}
exports.updateproduct = async (req, res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }catch(err){
        console.log(err);
        res.json(403);
    }
}
exports.deleteproduct = async (req, res) => {
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id});
        res.json(200).json(doc);
        
    }catch(err){
        console.log(err);
        res.json(err);
    }
}

