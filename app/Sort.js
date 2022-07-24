var Algorithms = {
  BUBBLE_SORT: 'bubbleSort',
  MERGE_SORT: 'mergeSort',
  QUICK_SORT: 'quickSort',
  INSERTION_SORT: 'insertionSort'
}

var Algo_desc = {
  BUBBLE_SORT: 'Bubble sort description',
  MERGE_SORT: 'Merge sort description',
  QUICK_SORT: 'Quick sort description',
  INSERTION_SORT: 'Insertion sort description'
}

class Sort {
  constructor(size=50, speed, sortAlgo=Algorithms.BUBBLE_SORT) {
    this.size = size;
    this.speed = speed;
    this.sortAlgo = sortAlgo;
    this.array = this.generateRandomArray(size);
    this.animationArray = new AnimationArray(this.array);
  }

  generateRandomArray(size) {
    let a = [];
    for (let i = 0; i < size; i++) {
      a[i] = i + 1;
    }

    // console.log(this.shuffle(a));
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
    // starts sorting or resumes from pause
  }

  pause() {
    // pauses sorting
  }
  
  reset() {
    console.log('### RESET EVERYTHING');
  }

  //dea
  selectAlgo(e) {
    this.reset();
    this.sortAlgo = e.currentTarget.id;
    this.selectDescription(e);
  }
  //dea
  selectDescription(e) {
    const graphDescription = document.querySelector('graph-description'); //grab graph-description element
    if (e.currentTarget.id === "#bubbleSort") {   // if algo is BS
      graphDescription.append(descriptBubbleSort()); // invoke descriptBubbleSort and append to graphDescription
    } else if (e.currentTarget.id === "#mergeSort") {
      graphDescription.append(descriptMergeSort());
    } else if (e.currentTarget.id === "#quickSort") {
      graphDescription.append(descriptQuickSort());
    } else {
      graphDescription.append(descriptInsertionSort());
    }
}
}