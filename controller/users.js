const model = require('../models/users');
const Users = model.Users;

exports.getalluser = async (req, res) => {
    const doc = await Users.find();
    res.json(doc);
}
exports.getuser = async (req, res) => {
    try {
        const id = req.params.id;
        const usr = await Users.findById(id);
        console.log(usr);
        res.json(usr);
    } catch (err) {
        res.json(err);
    }

}
exports.createuser = async (req, res) => {
    try {
        const user = new Users(req.body);
        const doc = await user.save();
        res.json(doc);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}
exports.replaceuser = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await Users.findOneAndReplace({_id:id},req.body,{new:true});
        res.json(doc);
    } catch (err) {
        console.log('cannot replace');
        res.json(err);
    }
}
exports.updateuser = async (req, res) => {
    try {
       const id = req.params.id;
       const doc = await Users.findOneAndUpdate({_id:id},req.body,{new:true});
       res.json(doc); 
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}
exports.deleteuser = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await Users.findOneAndDelete({_id:id}); 
        res.status(200).json(doc);   
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}