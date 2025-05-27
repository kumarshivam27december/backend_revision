const mongoose = require('mongoose');
const { Schema } = mongoose;
const validateEmail = function (email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};

const UserSchema = new Schema({
    'firstname': { type: String, required: true, maxlength: 16 },
    'lastname': { type: String, maxlength: 16 },
    'age': { type: Number, min: 12, max: 100 },
    'email': {
        type: String,
        required: [true, "Please enter your email"],
        validate: [validateEmail, "Please enter a valid email"],
        unique: true,
    },
    'address': new Schema({
        'pincode': { type: Number, required:true }, 
        'street': { type: String, required:true },
        'phone': { type: Number, length:10 }
    })
});

exports.Users = new mongoose.model('Users', UserSchema);
