/**
 * Created by minmingqian on 13/12/14.
 */


function start() {
    console.log("Request handler 'start' was called");

    function sleep(milliSeconds){
        var startTime = new Data().getTime();
        while (new Data().getTime() < startTime + milliSeconds);
    }

    sleep(10000)
    return "hello start";
}

function upload() {
    console.log("Request handler 'upload' was called");
    return "hello update";
}

exports.start = start;
exports.upload = upload;
