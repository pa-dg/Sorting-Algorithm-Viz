const sort = new Sort();

// const compareSingleAlgoBtn = document.getElementById('compare-single-algo-btn');
const playStopBtn = document.getElementById('play-stop-btn');
const resetBtn = document.getElementById('reset-btn');
const sizeRange = document.getElementById('size');
const sizeOutput = document.getElementById('size-output');
const speedOutput = document.getElementById('speed-output');
const speedRange = document.getElementById('speed');
const selectDropdown = document.getElementById('select-algo');
const descriptionText = document.getElementById('description-text');

// compareSingleAlgoBtn.addEventListener('click', function() {
//   console.log('Switch to compare screen');
// });

playStopBtn.addEventListener('click', function() {
  if (playStopBtn.innerText === 'Play') {
    playStopBtn.innerText = 'Stop';
    sort.play();
  } else {
    playStopBtn.innerText = 'Play';
    sort.stop();
  }
})

resetBtn.addEventListener('click', function() {
  sort.reset();

  playStopBtn.innerText = 'Play';
})

sizeRange.addEventListener('change', function(event) {
  sort.updateSize(event.target.value);
  sizeOutput.innerHTML = sizeRange.value;
})

speedRange.addEventListener('change', function(event) {
  sort.updateSpeed(event.target.value);
  speedOutput.innerHTML = speedRange.value;
})

selectDropdown.addEventListener('change', function(event) {
    descriptionText.innerText = Algo_desc[event.target.value];
    sort.updateSortAlgo(event.target.value)
    // sort.reset();
})

