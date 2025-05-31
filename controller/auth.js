const jwt = require('jsonwebtoken');
const model = require('../models/users');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const privatekey = fs.readFileSync(path.resolve(__dirname, '../private.key'), 'utf-8');
const Users = model.Users;

exports.signup = async (req, res) => {
    try {
        const user = new Users(req.body);
        var token = jwt.sign({ email: req.body.email }, privatekey, { algorithm: 'RS256' });
        var hash = bcrypt.hashSync(req.body.password, 10);
        user.token = token;
        user.password = hash;
        const doc = await user.save();
        res.json({ token });
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}

exports.login = async (req, res) => {
    try {
        const doc = await Users.findOne({ email: req.body.email });
        if (!doc) {
            console.log('User not found');
            return res.sendStatus(401);
        }
        var isauth = bcrypt.compareSync(req.body.password, doc.password);
        if (isauth) {
            var token = jwt.sign({ email: req.body.email }, privatekey, { algorithm: 'RS256' });
            doc.token = token;
            doc.save();

            res.json({ token }); 
        } else {
            console.log('unverified user');
            res.sendStatus(401);
        }
    } catch (err) {
        res.status(401).json(err);
    }
}