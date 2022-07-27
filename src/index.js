import {
  AlgoDesc,
  Sort,
  playStopBtn,
  resetBtn,
  sizeRange,
  sizeOutput,
  speedRange,
  speedOutput,
  selectDropdown,
  descriptionText,
  updateLegend,
  updatePlayStopBtn,
} from "./sort";

const sort = new Sort();

playStopBtn.addEventListener("click", function () {
  let playBtn = document.getElementById("play-btn");

  if (playBtn) {
    sort.play();
  } else {
    sort.stop();
  }

  updatePlayStopBtn(sort.isSorting);
});

resetBtn.addEventListener("click", function () {
  if (sort.isSorting) {
    // if its sorting then toggle play button to stop button
    playStopBtn.innerHTML = "";
    let playBtn = document.createElement("i");
    playBtn.setAttribute("id", "play-btn");
    playBtn.classList.add("fa-solid", "fa-play", "fa-2x", "play-btn");
    playStopBtn.appendChild(playBtn);
  }
  sort.reset();
});

sizeRange.addEventListener("change", function (event) {
  sort.updateSize(event.target.value);
  sizeOutput.innerHTML = sizeRange.value;
});

speedRange.addEventListener("change", function (event) {
  sort.updateSpeed(event.target.value);
  speedOutput.innerHTML = speedRange.value;
});

selectDropdown.addEventListener("change", function (event) {
  descriptionText.innerText = AlgoDesc[event.target.value];
  updateLegend(event.target.value);
  sort.updateSortAlgo(event.target.value);
  sort.reset();
});
