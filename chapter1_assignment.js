/*
    qn1
    if we delete node modules
    how to run our application again successfully

    npm install 

    it will install all the dependencies mentioned in package.json file
*/

const { get } = require("http");


/*
    qn2
    How to use command line arguments in Node JS. 
    Like node index.js 3 2 
    how can I get 3 and 2 to be used in my programs. 
    [ Hint : search for command line arguments in node ]



process.argv
const args = process.argv.slice(2);
console.log(args);
console.log(args[0],args[1]);



*/


/*
qn 3
Explore the os module in Node Js 
from their documentation. 
What all info you can access from it 
about your operating system ?



const os = require('os');
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.version());
console.log(os.constants);
console.log(os.constants.errno);
console.log(os.constants.priority);

*/

/**
 * 
 * 
 *qn 4
 explore about Asynchronous nature of JS as a single threaded language and how it is achieved using Event Loop. Video are given below in related videos sections.



const datas = [
    {name:"name1",designation:"profile1"},{name:"name2",designation:"profile2"},{name:"name3",designation:"profile3"}
];


function getdatas(){
    setTimeout(() => {
        datas.forEach((data,index) => {
            console.log(data.name);
        });
    }, 1000);
}

function setdatas(newdata){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            datas.push(newdata);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject("Error: Something went wrong");
            }
        }, 2000);
    }).then(getdatas).catch(err => console.log(err));

    // datas.push(newdata);
    // setTimeout(() => {
    //     getdatas();
    // }, 2000);
}


//async function for setdatas 
async function setdatasAsync(newdata) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newdata);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
    getdatas();
}

setdatasAsync({name:"name4",designation:"profile4"});

 */


/**
 Assignment 5 [Challenge] : Can you run a system command from Node JS javascript file e.g. ls dir commands ? and can you store its output in a text file ?

const fs = require('fs');
const { exec } = require('child_process');
exec('ls', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    fs.writeFile('output.txt', stdout, (err) => {
        if (err) throw err;
        console.log('Output saved to output.txt');
    });
});   


 */








