export const Algorithms = {
  bubbleSort: "bubbleSort",
  insertionSort: "insertionSort",
  selectionSort: "selectionSort",
  quickSort: "quickSort",
};

export const AlgoDesc = {
  bubbleSort:
    "Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n^2) where n is the number of items.",
  insertionSort:
    "This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort. The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n^2), where n is the number of items.",
  selectionSort:
    "Selection sort is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list. The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right. This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n^2), where n is the number of items.",
  quickSort:
    "Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value. Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n^2), respectively.",
};

export const AlgoLegends = {
  bubbleSort: {
    Grey: "Elements being compared",
    Red: "Elements need to be swapped",
    Green: "Elements do not need to be swapped",
  },
  quickSort: {
    Grey: "Pivot element",
    Red: "Left element/s being sorted",
    Green: "Right element/s being sorted",
  },
  selectionSort: {
    Grey: "Current minimum value in the current iteration",
    Red: "Elements that need to be swapped",
    Green: "Elements sorted",
  },
};

export const SortSpeed = {
  1: 1000,
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

export const sortingScreenOne = document.getElementById("sorting-screen-1");
export const graphContainerOne = document.getElementById("graph-container-1");
export const selectDropdownOne = document.getElementById("select-algo-1");
export const descriptionTextOne = document.getElementById("description-text-1");

export const sortingScreenTwo = document.getElementById("sorting-screen-2");
export const graphContainerTwo = document.getElementById("graph-container-2");
export const selectDropdownTwo = document.getElementById("select-algo-2");
export const descriptionTextTwo = document.getElementById("description-text-2");

export const playStopBtn = document.getElementById("play-stop-btn");
export const resetBtn = document.getElementById("reset-btn");
export const sizeRange = document.getElementById("size");
export const sizeOutput = document.getElementById("size-output");
export const speedOutput = document.getElementById("speed-output");
export const speedRange = document.getElementById("speed");
export const legendContainer = document.getElementById("legend-container");
export const compareBtn = document.getElementById("compare-btn");

export const comparisonColor = "grey";
export const needToBeSwappedColor = "red";
export const noSwapNeededColor = "green";
export const defaultBarColor = "rgba(229, 234, 95, 0.5)";

export const isArrayEqual = (a, b) => {
  a.forEach((ele, i) => {
    if (ele !== b[i]) {
      return false;
    }
  });

  return true;
};
