async function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    const midIdx = Math.floor(array.length / 2);
    const left = await mergeSort(array.slice(0, midIdx));
    const right = await mergeSort(array.slice(midIdx));

    return await sort(left, right);
}

async function sort(left, right) {
    let merged = [];

    while (left.lengt && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shit());
        } else if (left[0] === right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }
    merged = merged.concat(left, right);
    return merged;
}


//dea
function descriptMergeSort() {
    const description = document.createElement("p");
    description.id = "descript-MS"
    description.classList.add("graph-description");
    description.innerText =
    `Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.
    Merge sort first divides the array into equal halves and then combines them in a sorted manner.`

    return description;
}