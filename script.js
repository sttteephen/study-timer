function CountDown() {

    this.counting = false;
    this.initialSeconds = 10 * 60;
    this.currentSeconds = this.initialSeconds;
    this.progress = 1;

    /*
    when counting, decrements the current seconds value and updates the progress percentage then calls update screen to show changes
    */
    this.decrementClock = function () {
        //console.log("decrement clock " + this.counting)
        if (this.counting && this.currentSeconds > 0) {
            this.currentSeconds--;
            this.progress = Math.ceil(((this.initialSeconds - this.currentSeconds) / this.initialSeconds) * 100);
            //console.log(this.progress);
            this.updateScreen();
        }
    }

    // start the clock decrementing and show progress bar
    this.startClock = function () {
        //console.log("start clock")
        document.getElementById("progress-bar").classList.replace("invisible", "visible");
        this.counting = true;
        this.showTaskName();
    }

    // stop the clock decrementing
    this.pauseClock = function () {
        //console.log("pause clock")
        this.counting = false;
    }

    // set timer back to the initial duration
    this.resetClock = function () {
        //console.log("reset clock")
        this.counting = false;
        this.currentSeconds = this.initialSeconds;
        this.progress = 1;
        document.getElementById("progress-bar").classList.replace("visible", "invisible");
        this.updateScreen();
        this.showTaskInputs();
    }

    // change the length of the timer when a new duration is choosen
    this.changeDuration = function (e) {
        duration = parseInt(e.innerHTML.match(/[0-9][0-9]/g)[0]);
        this.initialSeconds = duration * 60
        this.currentSeconds = this.initialSeconds;
        this.updateScreen();
    }

    // convert the timers seconds value to minutes and seconds and return as string
    this.secToMinStr = function () {
        let mins = Math.floor(this.currentSeconds / 60);
        let secs = this.currentSeconds % 60;
        //console.log(`${mins} minutes ${secs} seconds`);
        return { minutes: String(mins), seconds: String(secs) }
    }

    // update the minutes and seconds values and progress bar on screen
    this.updateScreen = function () {
        //console.log("updating screen")
        let { minutes, seconds } = this.secToMinStr();
        document.getElementById("minutes").innerHTML = minutes.padStart(2, "0");
        document.getElementById("seconds").innerHTML = seconds.padStart(2, "0");
        document.getElementById("complete-progress").setAttribute("style", `width: ${String(this.progress)}%`);
    }

    /* 
    display the current value of the text input as the task name and 
    remove the text input and duration button from the screen
    */
    this.showTaskName = function () {
        const newName = document.getElementById("task-name-input").value;

        if (newName) {
            document.getElementById("task-name-h2").innerHTML = newName;
            document.getElementById("task-name-div").classList.replace("invisible", "visible");
        }

        document.getElementById("name-duration").classList.replace("visible", "invisible");
    }

    // remove the task name from the screen and show the task input and duration button
    this.showTaskInputs = function () {
        document.getElementById("task-name-div").classList.replace("visible", "invisible");
        document.getElementById("name-duration").classList.replace("invisible", "visible");
    }
}


const counter = new CountDown();
counter.updateScreen()
setInterval(() => { counter.decrementClock() }, 1000);