function bubbleSort(array) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length - 1; j++) {
                let current = array[i];
                let next = array[j];
                if (next > current) {
                    array[i] = next;
                    array[j] = current;
                    sorted = false;
                }
            }
        }
    }
    return array;
}
