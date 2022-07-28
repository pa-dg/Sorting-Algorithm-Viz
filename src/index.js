import {
  AlgoDesc,
  Sort,
  playStopBtn,
  resetBtn,
  sizeRange,
  sizeOutput,
  speedRange,
  speedOutput,
  selectDropdownOne,
  descriptionTextOne,
  updateLegend,
  updatePlayStopBtn,
  compareBtn,
  sortingScreenTwo,
  sortingScreenOne,
} from "./sort";

const sort = new Sort();
let sortTwo;

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

  if (sortTwo) {
    sortTwo.reset();
  }
});

sizeRange.addEventListener("change", function (event) {
  sort.updateSize(event.target.value);

  if (sortTwo) {
    sortTwo.updateSize(event.target.value);
  }

  sizeOutput.innerHTML = sizeRange.value;
});

speedRange.addEventListener("change", function (event) {
  sort.updateSpeed(event.target.value);

  if (sortTwo) {
    sortTwo.updateSpeed(event.target.value);
  }

  speedOutput.innerHTML = speedRange.value;
});

selectDropdownOne.addEventListener("change", function (event) {
  descriptionTextOne.innerText = AlgoDesc[event.target.value];
  updateLegend(event.target.value);
  sort.updateSortAlgo(event.target.value);
  sort.reset();
});

compareBtn.addEventListener("click", function (event) {
  if (event.target.innerText === "Compare Algo") {
    if (!sortTwo) {
      sortTwo = new Sort(2);
    }

    // change button text to single algo
    compareBtn.innerText = "Single Algo";

    // change the width of sorting screen one
    sortingScreenOne.style.minWidth = "550px";
    sortingScreenOne.style.width = "550px";

    sortingScreenTwo.style.display = "block";
  } else {
    if (sortTwo) {
      // remove bars
      sortTwo.animationArray.resetBars();

      // reset sortTwo
      sortTwo = undefined;
    }

    // reset sorting screen one width to default
    sortingScreenOne.style.minWidth = "750px";
    sortingScreenOne.style.width = "750px";

    // change button text to compare algo
    compareBtn.innerText = "Compare Algo";

    sortingScreenTwo.style.display = "none";
  }
});
