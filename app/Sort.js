var Algorithms = {
  BUBBLE_SORT: 'bubbleSort',
  MERGE_SORT: 'mergeSort',
  QUICK_SORT: 'quickSort'
}

var Algo_desc = {
  BUBBLE_SORT: 'Bubble sort description',
  MERGE_SORT: 'Merge sort description',
  QUICK_SORT: 'Quick sort description'
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
}