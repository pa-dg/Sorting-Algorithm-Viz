import {
  AnimationArray,
  Algorithms,
  SortSpeed,
  BAR_HEIGHT,
  graphContainer,
  playStopBtn,
  comparisonColor,
  needToBeSwappedColor,
  noSwapNeededColor,
} from "./";

export class Sort {
  // TODO: switch default to bubble sort again
  constructor(size = 10, speed = 10, sortAlgo = Algorithms.insertionSort) {
    this.size = size; // 30, 40, 50 elements/bars
    this.speed = SortSpeed[speed]; // in milliseconds
    this.sortAlgo = sortAlgo; // bubblesort/insertionsort for now
    this.array = [5, 1, 3, 7, 4]; //this.generateRandomArray(this.size); // logic to generate a shuffled array
    this.animationArray = new AnimationArray(this.array); // instance of animation array
    this.isSorting = false; // boolean to determine if were currently sorting
  }

  generateRandomArray(size) {
    let a = [];
    for (let i = 0; i < size; i++) {
      a[i] = i + 1;
    }
    return this.shuffle(a);
  }

  shuffle(arr) {
    let currentIndex = arr.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    return arr;
  }

  play() {
    // TODO: remove
    console.log("starting array", this.array);
    // catch all in-case bars are not rendered
    if (!graphContainer.hasChildNodes()) {
      this.animationArray.renderBars(this.array);
    }
    this.isSorting = true;

    switch (this.sortAlgo) {
      case "bubbleSort":
        this.bubbleSort();
        break;
      case "insertionSort":
        this.insertionSort();
        break;
      default:
        break;
    }
  }

  reset() {
    this.isSorting = false;

    this.array = this.generateRandomArray(this.size);
    this.animationArray.resetBars();
    this.animationArray = new AnimationArray(this.array);
  }

  stop() {
    this.isSorting = false;
  }

  sleep() {
    return new Promise((resolve) => setTimeout(resolve, this.speed));
  }

  updateSize(newSize) {
    // disable sorting if currently sorting
    if (this.isSorting) {
      this.isSorting = false;
    }

    this.size = newSize;
    this.array = this.generateRandomArray(this.size);
    this.animationArray.resetBars();
    this.animationArray = new AnimationArray(this.array);
  }

  updateSpeed(newSpeed) {
    this.speed = SortSpeed[parseInt(newSpeed)];
  }

  updateSortAlgo(newAlgo) {
    // change to new sorting Algo
    if (this.isSorting) {
      this.isSorting = false;
    }
    this.sortAlgo = Algorithms[newAlgo];
  }

  async bubbleSort() {
    console.info("Sorting using bubble sort.");
    let sorted = false;

    while (!sorted) {
      sorted = true;
      for (let i = 0; i < this.array.length - 1; i++) {
        if (!this.isSorting) break;

        // current element & its bar representation
        const current = this.array[i];
        const currentBar = document.getElementById(`bar-${current}`);

        // next element & its bar representation
        const next = this.array[i + 1];
        const nextBar = document.getElementById(`bar-${next}`);

        currentBar.style.backgroundColor = comparisonColor;
        nextBar.style.backgroundColor = comparisonColor;
        await this.sleep();

        if (current > next) {
          sorted = false;
          currentBar.style.backgroundColor = needToBeSwappedColor;
          nextBar.style.backgroundColor = needToBeSwappedColor;
          await this.sleep();

          // IMPORTANT:
          // change ids first, then change styles,
          // and switch actual element in the array

          // switch current element & its bar representation
          // to next element & its bar representation
          currentBar.setAttribute("id", `bar-${next}`);
          currentBar.style.height = `${next * BAR_HEIGHT}px`;
          currentBar.innerText = `${next}`;
          this.array[i] = next;

          // switch next element & its bar representation
          // to current element & its bar representation
          nextBar.setAttribute("id", `bar-${current}`);
          nextBar.style.height = `${current * BAR_HEIGHT}px`;
          nextBar.innerText = `${current}`;
          this.array[i + 1] = current;
          this.sleep();
        }

        // show that its sorted
        currentBar.style.backgroundColor = noSwapNeededColor;
        nextBar.style.backgroundColor = noSwapNeededColor;
        await this.sleep();

        // reset styling
        currentBar.style.backgroundColor = "rgba(229, 234, 95, 0.5)";
        nextBar.style.backgroundColor = "rgba(229, 234, 95, 0.5)";
        await this.sleep();
      }
    }
    // resets isSorting and playStopBtn
    this.isSorting = false;
    playStopBtn.innerText = "Play";
    // TODO: remove
    console.log("ending array", this.array);
    return this.array;
  }

  async insertionSort() {
    console.info("Sorting using insertion sort.");
    for (let i = 1; i < this.array.length; i++) {
      if (!this.isSorting) break;

      let previousIdx = i - 1;
      // const previousBar = document.getElementById(
      //   `bar-${this.array[previousIdx]}`
      // );

      const current = this.array[i];
      // const currentBar = document.getElementById(`bar-${current}`);

      // currentBar.style.backgroundColor = comparisonColor;
      // previousBar.style.backgroundColor = comparisonColor;
      // await this.sleep();

      while (previousIdx >= 0 && this.array[previousIdx] > current) {
        // currentBar.style.backgroundColor = needToBeSwappedColor;
        // previousBar.style.backgroundColor = needToBeSwappedColor;
        // await this.sleep();

        // currentBar.setAttribute("id", `bar-${this.array[previousIdx]}`);
        // currentBar.style.height = `${this.array[previousIdx] * BAR_HEIGHT}px`;
        // currentBar.innerText = `${this.array[previousIdx]}`;
        this.array[previousIdx + 1] = this.array[previousIdx];
        previousIdx = previousIdx - 1;
      }

      // previousBar.setAttribute("id", `bar-${current}`);
      // previousBar.style.height = `${current * BAR_HEIGHT}px`;
      // previousBar.innerText = `${current}`;
      this.array[previousIdx + 1] = current;
      // await this.sleep();

      // show that its sorted
      // currentBar.style.backgroundColor = noSwapNeededColor;
      // previousBar.style.backgroundColor = noSwapNeededColor;
      // await this.sleep();

      // reset styling
      // currentBar.style.backgroundColor = "rgba(229, 234, 95, 0.5)";
      // previousBar.style.backgroundColor = "rgba(229, 234, 95, 0.5)";
      // await this.sleep();
    }
    this.isSorting = false;
    playStopBtn.innerText = "Play";
    // TODO: remove
    console.log("ending array", this.array);
    return this.array;
  }
}

export default Sort;
