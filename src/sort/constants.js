export const Algorithms = {
  bubbleSort: "bubbleSort",
  insertionSort: "insertionSort",
};

export const Algo_desc = {
  bubbleSort:
    "Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n^2) where n is the number of items.",
  insertionSort:
    "This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort. The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n^2), where n is the number of items.",
};

export const SortSpeed = {
  1: 500,
  2: 450,
  3: 400,
  4: 350,
  5: 300,
  6: 250,
  7: 200,
  8: 150,
  9: 100,
  10: 50,
};

export const BAR_HEIGHT = 6;

export const graphContainer = document.getElementById("graph-container");
export const playStopBtn = document.getElementById("play-stop-btn");
export const resetBtn = document.getElementById("reset-btn");
export const sizeRange = document.getElementById("size");
export const sizeOutput = document.getElementById("size-output");
export const speedOutput = document.getElementById("speed-output");
export const speedRange = document.getElementById("speed");
export const selectDropdown = document.getElementById("select-algo");
export const descriptionText = document.getElementById("description-text");

export const comparisonColor = "grey";
export const needToBeSwappedColor = "red";
export const noSwapNeededColor = "green";
