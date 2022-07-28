import {
  AnimationArray,
  Algorithms,
  SortSpeed,
  BAR_HEIGHT,
  graphContainer,
  comparisonColor,
  needToBeSwappedColor,
  noSwapNeededColor,
  defaultBarColor,
  updatePlayStopBtn,
  resetBarsStyling,
} from "./";

export class Sort {
  constructor(size = 10, speed = 10, sortAlgo = Algorithms.bubbleSort) {
    this.size = size; // 30, 40, 50 elements/bars
    this.speed = SortSpeed[speed]; // in milliseconds
    this.sortAlgo = sortAlgo; // bubblesort/insertionsort for now
    this.array = this.generateRandomArray(this.size); // logic to generate a shuffled array
    this.isSorting = false; // boolean to determine if were currently sorting
    this.animationArray = new AnimationArray(this.array, this.speed); // instance of animation array
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

  async play() {
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

      case "selectionSort":
        this.selectionSort();
        break;

      case "quickSort":
        await this.quickSort(this.array, 0, this.array.length - 1);
        this.isSorting = false;
        updatePlayStopBtn(this.isSorting);
        break;

      default:
        break;
    }
  }

  reset() {
    this.isSorting = false;

    this.array = this.generateRandomArray(this.size);
    this.animationArray.resetBars();
    this.animationArray = new AnimationArray(this.array, this.speed);
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
    // reset button
    updatePlayStopBtn(this.isSorting);

    this.size = newSize;
    this.array = this.generateRandomArray(this.size);
    this.animationArray.resetBars();
    this.animationArray = new AnimationArray(this.array, this.speed);
  }

  updateSpeed(newSpeed) {
    this.speed = SortSpeed[parseInt(newSpeed)];
  }

  updateSortAlgo(newAlgo) {
    // change to new sorting Algo
    if (this.isSorting) {
      this.isSorting = false;
    }
    // reset button
    updatePlayStopBtn(this.isSorting);
    this.sortAlgo = Algorithms[newAlgo];
  }

  // SORT FUNCTIONS
  async bubbleSort() {
    console.info("Sorting using bubble sort.");
    let sorted = false;

    while (!sorted) {
      sorted = true;
      for (let i = 0; i < this.array.length - 1; i++) {
        if (!this.isSorting) {
          resetBarsStyling();
          return;
        }

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
        currentBar.style.backgroundColor = defaultBarColor;
        nextBar.style.backgroundColor = defaultBarColor;
        await this.sleep();
      }
    }

    // resets isSorting and playStopBtn
    this.isSorting = false;
    updatePlayStopBtn(this.isSorting);

    // TODO: remove
    console.log("ending array", this.array);
    return this.array;
  }

  // async insertionSort() {
  //   console.info("Sorting using insertion sort.");
  //   for (let i = 1; i < this.array.length; i++) {
  //     if (!this.isSorting) break;

  //     let previousIdx = i - 1;
  //     let previousBar = document.getElementById(
  //       `bar-${this.array[previousIdx]}`
  //     );

  //     const current = this.array[i];
  //     let currentBar = document.getElementById(`bar-${current}`);

  //     currentBar.style.backgroundColor = comparisonColor;
  //     previousBar.style.backgroundColor = comparisonColor;
  //     await this.sleep();

  //     while (previousIdx >= 0 && this.array[previousIdx] > current) {
  //       currentBar.style.backgroundColor = needToBeSwappedColor;
  //       previousBar.style.backgroundColor = needToBeSwappedColor;
  //       await this.sleep();

  //       currentBar.setAttribute("id", `bar-${this.array[previousIdx]}`);
  //       currentBar.style.height = `${this.array[previousIdx] * BAR_HEIGHT}px`;
  //       currentBar.innerText = `${this.array[previousIdx]}`;

  //       this.array[previousIdx + 1] = this.array[previousIdx];
  //       previousIdx = previousIdx - 1;
  //     }
  //     previousBar.setAttribute("id", `bar-${current}`);
  //     previousBar.style.height = `${current * BAR_HEIGHT}px`;
  //     previousBar.innerText = `${current}`;

  //     this.array[previousIdx + 1] = current;
  //     await this.sleep();

  //     // show that its sorted
  //     currentBar.style.backgroundColor = noSwapNeededColor;
  //     previousBar.style.backgroundColor = noSwapNeededColor;
  //     await this.sleep();

  //     // reset styling
  //     currentBar.style.backgroundColor = defaultBarColor;
  //     previousBar.style.backgroundColor = defaultBarColor;
  //     await this.sleep();
  //   }
  //   // reset isSorting and playStopBtn
  //   this.isSorting = false;
  //   updatePlayStopBtn(this.isSorting);

  //   // TODO: remove
  //   console.log("ending array", this.array);
  //   return this.array;
  // }

  async selectionSort() {
    for (let i = 0; i < this.array.length; i++) {
      if (!this.isSorting) {
        resetBarsStyling();
        return;
      }
      let minIdx = i;

      for (let j = i + 1; j < this.array.length; j++) {
        if (!this.isSorting) {
          resetBarsStyling();
          return;
        }
        const nextIdx = j;

        if (this.array[nextIdx] < this.array[minIdx]) {
          const currentMinBar = document.getElementById(
            `bar-${this.array[nextIdx]}`
          );
          // represent that this is the current min value in this iteration
          currentMinBar.style.backgroundColor = comparisonColor;
          await this.sleep();

          minIdx = nextIdx;

          // reset styling on current min value
          currentMinBar.style.backgroundColor = defaultBarColor;
          await this.sleep();
        }
      }

      if (minIdx !== i) {
        const currentBar = document.getElementById(`bar-${this.array[i]}`);
        const nextBar = document.getElementById(`bar-${this.array[minIdx]}`);

        // represent that two elements need to be swapped
        currentBar.style.backgroundColor = needToBeSwappedColor;
        nextBar.style.backgroundColor = needToBeSwappedColor;
        await this.sleep();

        // visual bar swapping
        currentBar.setAttribute("id", `bar-${this.array[minIdx]}`);
        currentBar.style.height = `${this.array[minIdx] * BAR_HEIGHT}px`;
        currentBar.innerText = `${this.array[minIdx]}`;

        nextBar.setAttribute("id", `bar-${this.array[i]}`);
        nextBar.style.height = `${this.array[i] * BAR_HEIGHT}px`;
        nextBar.innerText = `${this.array[i]}`;
        await this.sleep();

        // swapping of actual elements
        let temp = this.array[i];
        this.array[i] = this.array[minIdx];
        this.array[minIdx] = temp;

        // show that its good
        currentBar.style.backgroundColor = noSwapNeededColor;
        nextBar.style.backgroundColor = noSwapNeededColor;
        await this.sleep();

        // reset styling
        currentBar.style.backgroundColor = defaultBarColor;
        nextBar.style.backgroundColor = defaultBarColor;
        await this.sleep();
      }
    }

    // resets isSorting and playStopBtn
    this.isSorting = false;
    updatePlayStopBtn(this.isSorting);

    // TODO: remove
    console.log("ending array", this.array);
    return this.array;
  }

  async quickSort(items, left, right) {
    console.info("Sorting using quick sort.");
    let index;
    let bars = document.getElementsByClassName("bar");
    if (items.length > 1) {
      index = await this.animationArray.partition(items, left, right);
      if (left < index - 1) {
        if (!this.isSorting) {
          resetBarsStyling();
          return;
        }
        await this.quickSort(items, left, index - 1);
      }
      if (index < right) {
        if (!this.isSorting) {
          resetBarsStyling();
          return;
        }
        await this.quickSort(items, index, right);
      }
    }

    for (let i = 0; i < bars.length; i++) {
      if (!this.isSorting) {
        resetBarsStyling();
        return;
      }
      bars[i].style.backgroundColor = defaultBarColor;
    }

    // TODO: remove
    console.log("ending array", items);
    return items;
  }
}

export default Sort;
