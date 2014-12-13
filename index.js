var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle  = {}
handle["/"] = reuqestHandlers.start;
handle["/start"] = reuqestHandlers.start;
handle["/upload"] = reuqestHandlers.upload;

server.start(router.route, handle);