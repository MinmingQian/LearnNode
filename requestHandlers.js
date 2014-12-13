/**
 * Created by minmingqian on 13/12/14.
 */


function start() {
    console.log("Request handler 'start' was called");
}

function upload() {
    console.log("Request handler 'upload' was called");
}

exports.start = start;
exports.upload = upload;
