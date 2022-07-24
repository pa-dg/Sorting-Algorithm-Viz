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