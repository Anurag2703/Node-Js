const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;   //200 -> ok, 500 -> server error, 404 -> not found
    res.setHeader('Content-Type', 'text/html')
    res.end("<h1> This is Anurag Panda </h1> <p> This is an error! </p>");
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});