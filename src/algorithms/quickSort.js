async function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    const pivot = array[0];
    const left = [], right = [];

    array.slice(1).forEach(n => {
        if (n <= pivot) {
            left.push(n);
        } else {
            right.push(n);
        }
    })
    let sortedLeft = left.quickSort(array);
    let sortedRight = right.quickSort(array);

    return sortedLeft.concat([pivot]).concat(sortedRight);
}