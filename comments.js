// Create web server
// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    switch (path) {
        case '/':
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write("This is Test Message.");
            response.end();
            break;
        case '/comments':
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write("This is comments page.");
            response.end();
            break;
        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
            break;
    }
});

// Listen on port 8000, IP defaults to
