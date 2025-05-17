const http = require('http')
const fs = require('fs');
const indexpage = fs.readFileSync('./index.html','utf-8');
const page404 = fs.readFileSync('./page404.html','utf-8');
const datas = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const products = datas.products;
console.log(products);
const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log('server started');

    if(req.url.startsWith('/product')){
        const id = (req.url.split('/'))[2];
        console.log(id);
        let product = products.find(p=>p.id===(+id));

        console.log(product);
        res.setHeader('content-type','text/html');
            let updatedpage = indexpage;
            updatedpage=updatedpage.replace('**title**',product.title);
            updatedpage=updatedpage.replace('**description**',product.description);
            updatedpage=updatedpage.replace('**availabilityStatus**',product.availabilityStatus);
            updatedpage=updatedpage.replace('**price**',product.price);
            updatedpage=updatedpage.replace('**rating**',product.reviews[0].rating.toFixed(1));
            updatedpage=updatedpage.replace('**thumbnail**',product.thumbnail);
            res.end(updatedpage);
            return;
    }
    switch(req.url){
        case '/':
            res.setHeader('content-type','text/html');
            res.end(indexpage);
            break;
        case '/api':
            res.setHeader('content-type','application/json');
            res.end(JSON.stringify(datas));
            break;

        default:
            res.statusCode = 404;
            res.setHeader('content-type','text/html');
            res.end(page404);
    }
})
server.listen(8080);
