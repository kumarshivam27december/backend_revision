// const http = require('http');
// const url = require('url');

/*

Assignment 1 : Capture the request which goes when you like a post on facebook (using Chrome network). 
What are the headers ? What is the payload ?

To capture the request when you like a post on Facebook using Chrome DevTools:

1. Open Facebook in Chrome.
2. Open DevTools (F12 or Ctrl+Shift+I), go to the "Network" tab.
3. Like a post.
4. Look for a request (usually a POST) to an endpoint like `/ufi/reaction/` or similar.

Example headers:
----------------
:authority: www.facebook.com
:method: POST
:scheme: https
accept: 
content-type: application/x-www-form-urlencoded
origin: https://www.facebook.com
referer: https://www.facebook.com/
user-agent: [your browser's user agent]
cookie: [your session cookies]
x-fb-lsd: [token]
x-requested-with: XMLHttpRequest

Example payload:
----------------
reaction_type=1
ft_ent_identifier=1234567890123456
av=100012345678901
__user=100012345678901
__a=1
__csr=
__req=1
__beoa=0
__pc=PHASED:DEFAULT
dpr=1
__rev=1000000
__s=abc123:xyz456:789def
jazoest=265817282
lsd=AVq1a2b3c4d

Note: The actual headers and payload may vary and include authentication/session tokens.
*/ 


/*
Assignment 2 : In the chapter we developed a server with only URL switch, but you have to make that more efficient by making it check both METHOD (GET,POST) + URL path
So output of a request with GET /demo will be different from POST /demo [ Use POSTMAN for requests]

const server = http.createServer((req, res) => {
    const { method, url } = req;
    
    if (method === 'GET' && url === '/demo') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET request to /demo');
    } else if (method === 'POST' && url === '/demo') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request to /demo');
    } else if (method === 'GET' && url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET request to /');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
}
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

*/


/*
Assignment 3 [Challenge] : Try and run 2 different server using the same code you have index.js. You will need to use 2 different ports. But can you do it using the same file and changing PORTS dynamically somehow ?

const ports = [3000, 4000];

ports.forEach(port => {
    const srv = http.createServer((req, res) => {
        const { method, url } = req;

        if (method === 'GET' && url === '/demo') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`GET request to /demo on port ${port}`);
        } else if (method === 'POST' && url === '/demo') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`POST request to /demo on port ${port}`);
        } else if (method === 'GET' && url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`GET request to / on port ${port}`);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    });

    srv.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
*/



/*

Assignment 4 [Challenge] : You can also send some data to server using /demo?product=123. where product=123 is called query parameters. Can you capture that data and make the product page work according to the ID (123) . [ This we will do in next chapters using express, but you can give it a try ]

const serverWithQuery = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const { method } = req;

    if (method === 'GET' && pathname === '/demo' && query.product) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Product page for product ID: ${query.product}`);
    } else if (method === 'GET' && pathname === '/demo') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET request to /demo');
    } else if (method === 'POST' && pathname === '/demo') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request to /demo');
    } else if (method === 'GET' && pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET request to /');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

serverWithQuery.listen(5000, () => {
    console.log('Server with query param handling running on http://localhost:5000');
});



*/