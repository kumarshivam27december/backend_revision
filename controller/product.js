const model = require('../models/product');
const Product = model.Product;
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');



exports.getallproductsSSR = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 2;
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
        Product.find().skip(skip).limit(limit),
        Product.countDocuments()
    ]);

    const totalPages = Math.ceil(total / limit);

    ejs.renderFile(
        path.resolve(__dirname, '../views/index.ejs'),
        { products, page, totalPages },
        function (err, str) {
            if (err) {
                res.status(500).send('Error rendering page');
            } else {
                res.send(str);
            }
        }
    );
};

exports.getaddform = async (req, res) => {
    ejs.renderFile(path.resolve(__dirname, '../views/add.ejs'), function (err, str) {
        res.send(str);
    })
}


exports.getallproducts = async (req, res) => {
    // let query = Product.find();
    // if(req.query && req.query.sort){
    //     const sortOrder = Number(req.query.sort);
    //     if (sortOrder === 1 || sortOrder === -1) {
    //         const products = await query.sort({ price: sortOrder }).exec();
    //         return res.json(products);
    //     } else {
    //         return res.status(400).json({ error: 'Invalid sort value. Use 1 or -1.' });
    //     }
    // }else{
    //     const products = await query.exec();
    //     console.log(products);
    // }

    // const products = await Product.find();
    // res.json(products);


    let query = Product.find();
    console.log(req.query);
    if (req.query) {
        const sortObj = {};
        for (const key in req.query) {
            sortObj[key] = Number(req.query[key]);
        }
        const products = await query.sort(sortObj).exec();
        res.json(products);
    } else {
        const prd = await Product.find();
        res.json(prd);
    }
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
    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        res.status(201).json(doc);
    } catch (err) {
        console.log(err);
        res.json(403);
    }
}
exports.updateproduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(201).json(doc);
    } catch (err) {
        console.log(err);
        res.json(403);
    }
}
exports.deleteproduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndDelete({ _id: id });
        res.json(200).json(doc);

    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

