async function bubbleSort(array) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            let current = array[i];
            let next = array[i + 1];
            if (next > current) {
                sorted = false;
                array[i] = next;
                array[j] = current;
            }
        }
    }
    return array;
}
