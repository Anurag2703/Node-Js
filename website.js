const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;   //200 -> ok, 500 -> server error, 404 -> not found
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }else if(req.url == '/cwh'){
        res.statusCode = 200;
        res.end("<h1> Code with Harry </h1> <p> This is an coding section! </p>");
    }else if(req.url == '/about'){
        res.statusCode = 200;
        res.end("<h1> About Anurag </h1> <p> This is an about section! </p>");
    }else{
        // res.anurag();   //This invalid function will crash the server when run!
        res.statusCode = 404;
        res.end("<h1> Not Found! </h1> <p> Hey! This is page was not found on the server. </p>");
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});