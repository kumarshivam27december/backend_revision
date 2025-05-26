const fs = require('fs');
const datas = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const users = datas.users;

exports.getalluser = (req,res)=>{
    res.json(users);
}
exports.getuser = (req,res)=>{
    console.log(req.params.id);
    const id = +req.params.id;
    const user = users.find(p=>p.id===id);
    res.json(user);
}
exports.createuser = (req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(req.body);
}
exports.replaceuser = (req,res)=>{
    console.log(req.body);
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id);
    users.splice(userIndex,1,{...req.body,id:id});

    res.status(201).json({"product":"successfully updated"});
}
exports.updateuser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id);
    const user = users[userIndex];
    users.splice(userIndex,1,{...user,...req.body});
    res.sendStatus(201);
}
exports.deleteuser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id==id);
    const user = users[userIndex];
    users.splice(userIndex,1);
    res.status(200).json(user);
}