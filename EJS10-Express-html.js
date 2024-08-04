const http = require('http');
const server = http.createServer((req,res) => {
    res.setHeader('content-type' ,'text/html');
    res.write('<html>');
    res.write('<head><title>ExpressJS Framework </title></head>');
    res.write('<zbody><h1>Hello from NodeJS Server : Jeekshitha</h2></body>');
    res.write('</html>');
    res.end();
});
server.listen(8000,() => {
    console.log("Server listening on port :8000")
});