//Blocking
// var http = require('http');
// var url = require('url');
// var cp = require('child_process');

// function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     if (pathname == '/wait') {
//         cp.exec('node block.js', myCallback);
//     }
//     else {
//         response.writeHead(200, { 'Content-Type': 'text/plain' });
//         response.write('Hello!\n');
//         response.end();
//     }

//     console.log('New connection');

//     function myCallback() {
//         response.writeHead(200, { 'Content-Type': 'text/plain' });
//         response.write('Thanks for waiting!\n');
//         response.end();
//     }
// }
// http.createServer(onRequest).listen(8080);
// console.log('Server started');







///Non-Blocking
var http = require('http');
var fileSystem = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    var read_stream = fileSystem.createReadStream('myfile.txt');
    read_stream.on('data', writeCallback);
    read_stream.on('close', closeCallback);

    function writeCallback(data) {
        response.write(data);
    }

    function closeCallback() {
        response.end();
    }

}).listen(8080);

console.log('Server started');