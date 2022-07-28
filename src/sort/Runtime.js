import {
  displayMilliSecOne,
  displaySecOne,
  displayMinOne,
  displayMilliSecTwo,
  displaySecTwo,
  displayMinTwo,
  displayTwoDigits,
} from "./";

export class Runtime {
  constructor() {
    this.millis = undefined;
    this.seconds = undefined;
    this.mins = undefined;
    this.intervalID = undefined;
    this.isRunning = false;
  }

  start(currentTime, sortInstance) {
    this.isRunning = true;
    this.intervalID = setInterval(function () {
      this.millis = Date.now() - currentTime;
      this.seconds = Math.floor((this.millis / 1000) % 60);
      this.mins = Math.floor(this.millis / 1000 / 60);

      if (sortInstance === 1) {
        displayMilliSecOne.innerHTML = displayTwoDigits(
          Math.floor(millis / 10) % 100
        );
        displaySecOne.innerHTML = displayTwoDigits(seconds);
        displayMinOne.innerHTML = displayTwoDigits(mins);
      }

      if (sortInstance === 2) {
        displayMilliSecTwo.innerHTML = displayTwoDigits(
          Math.floor(millis / 10) % 100
        );
        displaySecTwo.innerHTML = displayTwoDigits(seconds);
        displayMinTwo.innerHTML = displayTwoDigits(mins);
      }
    }, 1);
  }

  stop() {
    clearInterval(this.intervalID);
  }

  reset() {
    displayMilliSecOne.innerHTML = "00";
    displaySecOne.innerHTML = "00";
    displayMinOne.innerHTML = "00";

    displayMilliSecTwo.innerHTML = "00";
    displaySecTwo.innerHTML = "00";
    displayMinTwo.innerHTML = "00";

    this.millis = undefined;
    this.seconds = undefined;
    this.mins = undefined;
    this.intervalID = undefined;
    this.isRunning = false;
  }
}

export default Runtime;
