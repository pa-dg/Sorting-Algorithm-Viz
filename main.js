const sort = new Sort(50, 10, "bubbleSort");

const compareSingleAlgoBtn = document.getElementById('compare-single-algo-btn');
const playPauseBtn = document.getElementById('play-pause-btn');
const resetBtn = document.getElementById('reset-btn');
//DEA
const sizeSlider = document.getElementById('size');
const speedSlider = document.getElementById('speed');

compareSingleAlgoBtn.addEventListener('click', function() {
  console.log('Switch to compare screen');
});

playPauseBtn.addEventListener('click', function() {
  console.log('Play/Pause button');
})

resetBtn.addEventListener('click', function() {
  sort.reset();
})

//DEA
let i = document.querySelector('input'),
    o = document.querySelector('output');
o.innerHTML = i.value;
i.addEventListener('input', function() {
    o.innerHTML = i.value;
}, false);

