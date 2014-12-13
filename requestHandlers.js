/**
 * Created by minmingqian on 13/12/14.
 */

var exec;
exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called");
    var content = "empty";

    exec("ls - lah", function (error, stdout, stderr){
       content = stdout;
    });

    return content;
}

function upload() {
    console.log("Request handler 'upload' was called");
    return "hello update";
}

exports.start = start;
exports.upload = upload;
