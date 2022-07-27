async function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      const nextIdx = j;

      if (nextIdx < minIdx) {
        minIdx = nextVal;
      }
    }
    if (minIdx != i) {
      let temp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = temp;
    }
  }
  return array;
}
