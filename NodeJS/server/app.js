const http = require('http');

const routes = require('./routes')

// const server = http.createServer((req, res) => {
//     // console.log(req.url, req.method, req.headers)
//     // console.log('Manoj Dhananjay Pawar')
//     // process.exit();
//     const url = req.url;
//     const method = req.method;
    
// });
const server = http.createServer(routes);

server.listen(4000);
