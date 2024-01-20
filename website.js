const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;   //200 -> ok, 500 -> server error, 404 -> not found
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
    if(req.url == '/'){
        res.end("<h1> This is Anurag Panda </h1> <p> This is an error! </p>");
    }else if(req.url == '/about'){
        res.end("<h1> About Anurag </h1> <p> This is an about section! </p>");
    }else{
        res.statusCode = 404;
        res.end("<h1> Not Found! </h1> <p> Hey! This is page was not found on the server. </p>");
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});