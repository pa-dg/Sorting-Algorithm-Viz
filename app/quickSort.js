async function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    const pivot = array[0];

    let left = arrray.slice(1).filter(el => el < pivot);
    let right = array.slice(1).filter(el => el >= pivot);
    
    left = left.quickSort(array);
    right = right.quickSort(array);

    return left.concat([pivot]).concat(right);
}