async function insertionSort(array) {   //[5,1,3]
    // we start at 1 because we want left of that to be 'sorted arr'
    for (let i = 1; i < array.length; i++) { // i =2
        // we declare the current ele to current var to store it's position
        let current = array[i];     // current = 3
        // j is the previous ele
        let j = i - 1;              // j = 1
        
        while (j >= 0 && array[j] > current) {  // (j>=0 && array[0] > 3)? --> true
            array[j + 1] = array[j];    // array[2] = array[1] --> array[2] = 5
            j = j - 1;                  // j = 0
        }
        array[j + 1] = current;         // array[1] = current = 3
    }
    return array;
}


//dea
function descriptInsertionSort() {
    const description = document.createElement("p");
    description.id = "descript-IS"
    description.classList.add("graph-description");
    description.innerText =
    `This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort.
    The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2), where n is the number of items.`

    return description;
}