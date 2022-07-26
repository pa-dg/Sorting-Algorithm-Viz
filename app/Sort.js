var Algorithms = {
  BUBBLE_SORT: 'bubbleSort',
  INSERTION_SORT: 'insertionSort'
}

var Algo_desc = {
  bubbleSort: 
    'Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n^2) where n is the number of items.',
  insertionSort: 
    "This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort. The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n^2), where n is the number of items."
}

var SortSpeed = {
  1: 500,
  2: 450,
  3: 400,
  4: 350,
  5: 300,
  6: 250,
  7: 200,
  8: 150,
  9: 100,
  10: 50
}

class Sort {
  constructor(size=30, speed=1, sortAlgo=Algorithms.BUBBLE_SORT) {
    this.size = size; // 30, 40, 50 elements/bars
    this.speed = SortSpeed[speed]; // in milliseconds
    this.sortAlgo = sortAlgo; // bubblesort/insertionsort for now
    this.array = [1,5,3,7,4]; //this.generateRandomArray(this.size); // logic to generate a shuffled array
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
    let currentIndex = arr.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  }
  
  play() {
    console.log('starting array', this.array);

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

  async bubbleSort() {
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
          
          currentBar.style.backgroundColor = 'black';
          nextBar.style.backgroundColor = 'black';
          await this.sleep();

          if (current > next) {
              sorted = false;
              currentBar.style.backgroundColor = 'red';
              nextBar.style.backgroundColor = 'red';
              await this.sleep();

              // IMPORTANT:
              // change ids first, then change styles,
              // and switch actual element in the array
              
              // switch current element & its bar representation 
              // to next element & its bar representation
              currentBar.setAttribute('id', `bar-${next}`);
              currentBar.style.height = `${next * BAR_HEIGHT}px`;
              this.array[i] = next;

              // switch next element & its bar representation 
              // to current element & its bar representation
              nextBar.setAttribute('id', `bar-${current}`);
              nextBar.style.height = `${current * BAR_HEIGHT}px`;
              this.array[i + 1] = current;
              this.sleep();
          }

          // show that its sorted
          currentBar.style.backgroundColor = 'green';
          nextBar.style.backgroundColor = 'green';
          await this.sleep();

          // reset styling
          currentBar.style.backgroundColor = 'rgb(222, 239, 230)';
          nextBar.style.backgroundColor = 'rgb(222, 239, 230)';
          await this.sleep();
        }
    }
    // resets isSorting and playStopBtn
    this.isSorting = false;
    playStopBtn.innerText = 'Play';
    // console.log('ending array', this.array);
    return this.array;
  }
  
  async insertionSort() {
    for (let i = 1; i < this.array.length; i++) {
      // if (!this.isSorting) break;

      // current element & its bar representation
      const current = this.array[i];
      console.log("current", this.array[i]);
      const currentBar = document.getElementById(`bar-${current}`);
      
      // element comparing with current & its bar representation
      let previousIdx = i - 1; //Idx = j
      // const previous = this.array[previousIdx];
      console.log("previousIdx", previousIdx)
      const previousBar = document.getElementById(`bar-${this.array[previousIdx]}`);

      currentBar.style.backgroundColor = 'black';
      previousBar.style.backgroundColor = 'black';
      await this.sleep();

      while (previousIdx >= 0 && this.array[previousIdx] > current) {
        console.log("need to swap n1", this.array[previousIdx]);
        console.log("need to swap n2", current);

        currentBar.style.backgroundColor = 'red';
        previousBar.style.backgroundColor = 'red';
        await this.sleep();

        currentBar.setAttribute('id', `bar-${this.array[previousIdx]}`);
        currentBar.style.height = `${this.array[previousIdx] * BAR_HEIGHT}px`;

        previousBar.setAttribute('id', `bar-${current}`);
        previousBar.style.height = `${current * BAR_HEIGHT}px`;

        this.array[previousIdx + 1] = this.array[previousIdx];
        previousIdx = previousIdx - 1;

        currentBar.style.backgroundColor = 'green';
        previousBar.style.backgroundColor = 'green';
        await this.sleep();

      }
      // show that its sorted
      currentBar.style.backgroundColor = 'green';
      previousBar.style.backgroundColor = 'green';
      this.array[previousIdx + 1] = current;
      console.log("previousIdx + 1 = current", this.array[previousIdx + 1]);
      console.log(this.array)
      await this.sleep();

      // reset styling
      currentBar.style.backgroundColor = 'rgb(222, 239, 230)';
      previousBar.style.backgroundColor = 'rgb(222, 239, 230)';
      
      await this.sleep();
      console.log(this.array);
    }

    this.isSorting = false;
    playStopBtn.innerText = 'Play';
    return this.array;
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
    newAlgo = Object.keys(Algorithms).find(algo => Algorithms[algo] === newAlgo);
    this.sortAlgo = Algorithms[newAlgo];
  }



//   //dea
// selectAlgo(e) {
//     this.reset();
//     this.sortAlgo=e.currentTarget.id;
//     this.selectDescription(e);
// }

// //dea
// selectDescription(e) {
//     const graphDescription=document.querySelector('graph-description'); //grab graph-description element

//     if (e.currentTarget.id==="#bubbleSort") {
//         // if algo is BS
//         graphDescription.append(descriptBubbleSort()); // invoke descriptBubbleSort and append to graphDescription
//     }

//     else if (e.currentTarget.id==="#mergeSort") {
//         graphDescription.append(descriptMergeSort());
//     }

//     else if (e.currentTarget.id==="#quickSort") {
//         graphDescription.append(descriptQuickSort());
//     }

//     else {
//         graphDescription.append(descriptInsertionSort());
//     }
// }
}