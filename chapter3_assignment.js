/**
 * qn 1
 * Assignment 1 :

1. Send data via URL in Query String

This is easiest method to send data and mostly used in GET request.

When you have URL with ?name=Youstart&subject=express at end, it translates in a query string. In query string each key,value pair is separated by = and between 2 such pairs we put &.

To read such data in express you can use req.query :

server.get("/demo",function(req,res){
    console.log(req.query) // prints all data in request object
    res.send(req.query);  // send back same data in response object
})
Assignment 1 :



Make above server with API endpoint /demo as shown above :

Try to call this API in your browser http://localhost:8080/demo?name=Youstart - this will return a response of req.query JSON object

Create 3 query parameters name, age, subject with some values. Check the final output of req.query - can you find all data on server side. Can you send it back to client via res object.


// Example: http://localhost:8080/demo?name=Youstart&age=25&subject=Express
// When you visit this URL, req.query will be:
// { name: 'Youstart', age: '25', subject: 'Express' }
// All data can be found on the server side and sent back to the client via res.send(req.query)

const express = require('express');
const server = express();


server.get('/demo', (req, res) => { 
    console.log(req.query); // prints all data in request object
    res.send(req.query);  // send back same data in response object
});
 */



/**
 * 
 * 
 * Assignment 2 :

In this method you can have a URL with url path like /Youstart/express at end it translates in a param string. In param part string each value is separated by /. As you can see that URL only contains value not the key part of data. key part is decided by the endpoint definition at express server

server.get("/demo/:name/:subject",function(req,res){ console.log(req.params) // prints all data in request object res.send(req.query); // send back same data in response object })

So sequence of values matter in this case. As values sent from client are matched with name and subject params of URL later.

Make above server with API endpoint /demo as shown above :

Try to call this API in your browser http://localhost:8080/demo/Youstart/Express - this will return a response of req.params JSON object

Create 3 URL params name, age, subject . Call the URL and check the final output of req.params - can you find all data on server side. Can you send it back to client via res object.

 


server.get('/demo/:name/:age/:subject', (req, res) => {
    console.log(req.params); // prints all data in request object
    res.send(req.params);    // send back same data in response object
});




 */


/**
 * 3. Send data via Request Body

Final method of sending data is via body part of request. We can send data directly to body using URL. We have to either use one of these methods

Use a HTML Form and make method value as POST. This will make all name=value pair to go via body of request.

Use special browsers like POSTMAN to change the body directly. (We will see this example in next classes)


server.use(express.json());
server.use(express.urlencoded({ extended: true }));//to read form data  


server.post('/demo', (req, res) => {
    console.log(req.body); // prints all data in request body
    res.send(req.body);    // send back same data in response object
});


 */