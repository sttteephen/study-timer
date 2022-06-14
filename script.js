let counting = false;

function incrementClock() {
    if (counting) {
        currentTime = document.getElementById("time").innerHTML;
        let seconds = parseInt(currentTime.slice(3));
        seconds++;
        newSeconds = String(seconds).padStart(2, "0");
        document.getElementById("time").innerHTML = "00:" + newSeconds
    }
}

function startTimer() {
    console.log("start clock")
    counting = true
}

function stopTimer() {
    console.log("stop clock")
    counting = false
}

function resetTimer() {
    console.log("reset clock")
    document.getElementById("time").innerHTML = "00:00"
}

setInterval(incrementClock, 1000)