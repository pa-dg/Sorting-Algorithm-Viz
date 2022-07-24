async function insertionSort(array) {   //[1,5,3]
    for (let i = 1; i < array.length; i++) { // i =2
        let current = array[i];     // current = 3
        let j = i - 1;              // j = 1
        
        while (j >= 0 && array[j] > current) {  // (j>=0 && array[0] > 3)? --> true
            array[j + 1] = array[j];    // array[2] = array[1] --> array[2] = 5
            j = j - 1;                  // j = 0
        }
        array[j + 1] = current;         // array[1] = current = 3
    }
    return array;
}