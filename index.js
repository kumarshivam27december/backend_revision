// import {add,diff} from './lib.js';
// console.log(add(1,2),diff(2,1));

// const lib = require('./lib');
// const fs = require('fs');




// const p1 = performance.now();
// fs.readFile('demo.txt','utf-8',(err,data)=>{
//     console.log(data);
// })

// const p2 = performance.now();
// console.log(lib.add(59,10),lib.diff(70,1));
// console.log(p2-p1);


const express = require('express');


const server = express();
console.log('server is running on port ');

server.listen(9000);

