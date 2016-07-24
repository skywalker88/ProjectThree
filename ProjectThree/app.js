//requires/imports the HTTP module
var http = require('http');

//Defines a port we want to listen to
const PORT=8080;

//Function which handles requests and send response
function handleRequest(request, response) {
    response.end('Hello Brian! ');
}

//Create a server
var server = http.createServer(handleRequest);

//Starts server
server.listen(PORT, function () {
    //Callback triggered when server is successfully listening.
    console.log("Server listening on: http://localhost:%s", PORT);
});