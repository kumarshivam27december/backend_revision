const mongoose = require('mongoose');
const {Schema} = mongoose;
const ProductSchema = new Schema({
    title : {type:String,required:true} ,
    description: String,
    price:{type:Number,min:[0,'value cant be negative'],max:[100,'price cant exceed more than this']},
    discountPercentage:{type:Number,min:[0,'value cant be negative'],max:[100,'price cant exceed more than this']},
    rating: {type:Number,min:[0,'value cant be negative'],max:[100,'price cant exceed more than this']},
    thumbnail: {type:String,required:true},
    images:[String]
}); 
exports.Product = mongoose.model('Product',ProductSchema);