import {
  BAR_HEIGHT,
  comparisonColor,
  graphContainerOne,
  noSwapNeededColor,
  needToBeSwappedColor,
  defaultBarColor,
  graphContainerTwo,
} from "./";

export class AnimationArray {
  constructor(array, speed, sortInstance) {
    this.array = array;
    this.speed = speed;
    this.sortInstance = sortInstance;
    this.renderBars();
  }

  renderBars() {
    for (let i = 0; i < this.array.length; i++) {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      bar.classList.add(`bar-sort${this.sortInstance}`);
      bar.style.height = `${this.array[i] * BAR_HEIGHT}px`;
      bar.setAttribute("id", `bar-${this.array[i]}-sort${this.sortInstance}`);
      bar.innerText = `${this.array[i]}`;

      if (this.sortInstance === 1) {
        graphContainerOne.appendChild(bar);
      } else {
        graphContainerTwo.appendChild(bar);
      }
    }
  }

  resetBars() {
    if (this.sortInstance === 1) {
      graphContainerOne.innerHTML = "";
    } else {
      graphContainerTwo.innerHTML = "";
    }
  }

  sleep() {
    return new Promise((resolve) => setTimeout(resolve, this.speed));
  }

  async swap(array, i, j, bars) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    bars[i].setAttribute("id", `bar-${array[i]}-sort${this.sortInstance}`);
    bars[i].style.height = `${array[i] * BAR_HEIGHT}px`;
    bars[i].innerText = `${array[i]}`;

    bars[j].setAttribute("id", `bar-${array[j]}-sort${this.sortInstance}`);
    bars[j].style.height = `${array[j] * BAR_HEIGHT}px`;
    bars[j].innerText = `${array[j]}`;

    bars[i].style.backgroundColor = noSwapNeededColor; // LEFT element(s)
    bars[j].style.backgroundColor = needToBeSwappedColor; // RIGHT element(s)
    await this.sleep();

    for (let k = 0; k < bars.length; k++) {
      if (k != i && k != j) {
        bars[k].style.backgroundColor = defaultBarColor;
      }
    }
    return array;
  }

  async partition(items, left, right) {
    let bars = document.getElementsByClassName(`bar-sort${this.sortInstance}`);
    let pivotIndex = Math.floor((right + left) / 2);
    const pivotElement = items[pivotIndex]; // middle element

    bars[pivotIndex].style.backgroundColor = comparisonColor; // show that this is the pivot element
    this.sleep();

    for (let i = 0; i < bars.length; i++) {
      if (i != pivotIndex) {
        bars[i].style.backgroundColor = defaultBarColor;
      }
    }

    let i = left; // left pointer
    let j = right; // right pointer
    while (i <= j) {
      while (items[i] < pivotElement) {
        i++;
      }
      while (items[j] > pivotElement) {
        j--;
      }
      if (i <= j) {
        await this.swap(items, i, j, bars); // swap two elements
        i++;
        j--;
      }
    }
    return i;
  }
}

export default AnimationArray;
