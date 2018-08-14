var timeBegan = null
    , timeStopped = null
    , stoppedDuration = 0
    , started = null;

function start() {
    if (started && !timeStopped) return;
    
    if (timeBegan === null) {
        timeBegan = new Date();
    }

    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
        timeStopped = null;
    }
    console.log(stoppedDuration);

    started = setInterval(clockRunning, 5);	
}

function stop() {
    if (timeStopped === null) {
        timeStopped = new Date();
        clearInterval(started);
    }
}
 
function reset() {
    stoppedDuration = 0;
    if (timeStopped) {
        timeStopped = timeBegan = new Date();
        //document.getElementById("time-display").innerHTML = "00:00:00.000";
        document.getElementById("time-display").innerHTML = "00:00.000";
    } else {
        timeBegan = new Date();
    }
}

function clockRunning(){
    var currentTime = new Date()
        , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
        //, hour = timeElapsed.getUTCHours()
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("time-display").innerHTML = 
        //(hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};