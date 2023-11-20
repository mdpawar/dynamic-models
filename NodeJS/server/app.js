const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    // console.log('Manoj Dhananjay Pawar')
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to My Node JS Project</title><head>');
    res.write('<body><h1> Welcome to My Node Js Project</h1></body>')
    res.write('<html>');
    res.end();
});

server.listen(4000);
