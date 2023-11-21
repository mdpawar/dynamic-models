const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers)
    // console.log('Manoj Dhananjay Pawar')
    // process.exit();
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
         res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST" ><input type="text name="message"><button type="submit>Send</button></input></form></body>')
        res.write('<html>');
        return res.end(); // this will end function exection here only otherwise it wil continue further.
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY');   
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to My Node JS Project</title><head>');
    res.write('<body><h1> Welcome to My Node Js Project</h1></body>')
    res.write('<html>');
    res.end();
});

server.listen(4000);
