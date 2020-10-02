const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader( 'Content.Type', 'text/plain' );
    res.end('This is the Entry Poiny for this app');
});


server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on socket 127.0.0.1:3000');

});