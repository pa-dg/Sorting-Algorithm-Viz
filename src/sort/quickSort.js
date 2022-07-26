async function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    const pivot = array[0];

    let left = array.slice(1).filter(el => el < pivot);
    let right = array.slice(1).filter(el => el >= pivot);
    
    left = left.quickSort(array);
    right = right.quickSort(array);

    return left.concat([pivot]).concat(right);
}


//dea
function descriptQuickSort() {
    const description = document.createElement("p");
    description.id = "descript-QS"
    description.classList.add("graph-description");
    description.innerText =
    `Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.
    Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n2), respectively.`

    return description;
}