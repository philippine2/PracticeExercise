const http = require('http');

let serverEntry = (response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h2> This is the entry point for this app </h2>");
    response.write("<a href='/nextpage'> NextPAge</a>");
    response.end();
}

let serveNextPage = (response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h2> This is the NextPaget for this app </h2>");
    response.write("<a href='/'> Go back to the Entry Page</a>");
    response.end();
}

let onRequest = (request, response) => {
    if (request.method == 'GET' && request.url == '/') {
        serverEntry(response);
    }

    else if (request.method == 'GET' && request.url == '/nextpage') {
        serveNextPage(response);


    }

    /*console.log("User makes a request");
    console.log(request.url);
    console.log(request.method);
    response.end(); */
}

http.createServer(onRequest).listen(3000, '127.0.0.1');

