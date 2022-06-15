function CountDown() {

    this.counting = false;
    this.initialSeconds = 10 * 60;
    this.currentSeconds = this.initialSeconds;
    this.progress = 1;

    this.decrementClock = function () {
        //console.log("decrement clock " + this.counting)
        if (this.counting && this.currentSeconds > 0) {
            this.currentSeconds--;
            this.progress = Math.ceil(((this.initialSeconds - this.currentSeconds) / this.initialSeconds) * 100);
            console.log(this.progress);
            this.updateScreen();
        }
    }

    this.startClock = function () {
        //console.log("start clock")
        document.getElementById("progress-bar").classList.replace("invisible", "visible");
        this.counting = true;
    }

    this.pauseClock = function () {
        //console.log("pause clock")
        this.counting = false;
    }

    this.resetClock = function () {
        //console.log("reset clock")
        this.counting = false;
        this.currentSeconds = this.initialSeconds;
        this.progress = 1;
        document.getElementById("progress-bar").classList.replace("visible", "invisible");
        this.updateScreen();
    }

    this.changeDuration = function (e) {
        // try using regex here
        duration = parseInt(e.innerHTML.slice(0, 2));
        this.initialSeconds = duration * 60
        this.currentSeconds = this.initialSeconds;
        this.updateScreen();
    }

    this.secToMinStr = function () {
        let mins = Math.floor(this.currentSeconds / 60);
        let secs = this.currentSeconds % 60;
        //console.log(`${mins} minutes ${secs} seconds`);
        return { minutes: String(mins), seconds: String(secs) }
    }

    this.updateScreen = function () {
        //console.log("updating screen")
        let { minutes, seconds } = this.secToMinStr();
        document.getElementById("minutes").innerHTML = minutes.padStart(2, "0");
        document.getElementById("seconds").innerHTML = seconds.padStart(2, "0");
        document.getElementById("complete-progress").setAttribute("style", `width: ${String(this.progress)}%`);
    }
}

const counter = new CountDown();
counter.updateScreen()
setInterval(() => { counter.decrementClock() }, 1000);