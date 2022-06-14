function CountDown() {

    this.counting = false;
    this.initialSeconds = 10 * 60;
    this.currentSeconds = this.initialSeconds;

    this.decrementClock = function () {
        //console.log("decrement clock " + this.counting)
        if (this.counting) {
            this.currentSeconds--;
            this.updateScreen();
        }
    }

    this.startClock = function () {
        //console.log("start clock")
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
        this.updateScreen();
    }

    this.updateScreen = function () {
        //console.log("updating screen")
        document.getElementById("time").innerHTML = "00:" + this.currentSeconds;
    }
}

const counter = new CountDown();
counter.updateScreen()
setInterval(() => { counter.decrementClock() }, 1000);