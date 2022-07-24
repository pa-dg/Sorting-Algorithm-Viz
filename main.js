const sort = new Sort(50, 10, "bubbleSort");

const compareSingleAlgoBtn = document.getElementById('compare-single-algo-btn');
const playPauseBtn = document.getElementById('play-pause-btn');
const resetBtn = document.getElementById('reset-btn');

compareSingleAlgoBtn.addEventListener('click', function() {
  console.log('Switch to compare screen');
});

playPauseBtn.addEventListener('click', function() {
  console.log('Play/Pause button');
})

resetBtn.addEventListener('click', function() {
  sort.reset();
})