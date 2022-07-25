async function bubbleSort(array) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            let current = array[i];
            let next = array[i + 1];
            if (current > next) {
                sorted = false;
                array[i] = next;
                array[i + 1] = current;
            }
        }
    }
    return array;
}

//dea
function descriptBubbleSort() {
    const description = document.createElement("p");
    description.id = "descript-BS"
    description.classList.add("graph-description");
    description.innerText =
    `Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n^2) where n is the number of items.`

    return description;
}