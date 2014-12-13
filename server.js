/**
 * Created by minmingqian on 13/12/14.
 */


var http = require("http");

function onRequest(request, response) {
    console.log("Request received");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hi");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("server has started");