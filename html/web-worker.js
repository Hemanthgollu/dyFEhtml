self.postMessage("00:15");

const idleTime = 1200;
let CompletedTimeInSec = 0;

setInterval(timer,1000)

function timer() {
    CompletedTimeInSec++;
    const timeLeftInSeconds = (idleTime-CompletedTimeInSec)%60;
    const timeLeftInMins = parseInt((idleTime-CompletedTimeInSec)/60);
    const timeStr = timeLeftInSeconds < 10 ? `${timeLeftInMins}:0${timeLeftInSeconds}` : `${timeLeftInMins}:${timeLeftInSeconds}`;;
    postMessage(timeStr)
}