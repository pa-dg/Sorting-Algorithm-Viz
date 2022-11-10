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
  selectDropdownTwo,
  descriptionTextTwo,
} from "./sort";

const sort = new Sort();
let sortTwo;

playStopBtn.addEventListener("click", function () {
  let playBtn = document.getElementById("play-btn");

  if (playBtn) {
    sort.play();

    if (sortTwo) {
      sortTwo.play();
    }
  } else {
    sort.stop();

    if (sortTwo) {
      sortTwo.stop();
    }
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
    // sortTwo.reset(sort.array);
    // TO REMOVE:
    // console.log("sortTwoArr", sortTwo.array);
  }
});

sizeRange.addEventListener("change", function (event) {
  if (sort.isSorting) {
    sort.reset();
    updatePlayStopBtn(sort.isSorting);
  }
  if (sortTwo.isSorting) {
    sortTwo.reset();
    updatePlayStopBtn(sortTwo.isSorting);
  }

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
  // if (sortTwo) {
  //   sortTwo.reset(sort.array);
  //   console.log("sortTwo", sortTwo.array);
  // }
  // console.log("sortOne", sort.array);
});

selectDropdownTwo.addEventListener("change", function (event) {
  descriptionTextTwo.innerText = AlgoDesc[event.target.value];
  updateLegend(event.target.value);

  sortTwo.updateSortAlgo(event.target.value);
  sortTwo.reset();
  // sort.reset(sortTwo.array);
  // console.log("sortOne", sort.array);
  // console.log("sortTwo", sortTwo.array);
});

compareBtn.addEventListener("click", function (event) {
  if (event.target.innerText === "Compare Algo") {
    if (!sortTwo) {
      sort.runtime.reset();
      sort.updateSize(); // reset to default size
      console.log("sortOne", sort);
      sortTwo = new Sort(2, sort.array); // ensure sortTwo will have the same array as sortOne
    }

    // change button text to single algo
    compareBtn.innerText = "Single Algo";

    // change the width of sorting screen one
    sortingScreenOne.style.minWidth = "550px";
    sortingScreenOne.style.width = "550px";

    sortingScreenTwo.style.display = "block";
  } else {
    if (sortTwo) {
      // reset if sort is running
      sort.reset();

      // remove bars
      sortTwo.animationArray.resetBars();

      // reset sortTwo
      sortTwo = undefined;
    }
    // sort.reset(); // reset sortOne

    // reset sorting screen one width to default
    sortingScreenOne.style.minWidth = "750px";
    sortingScreenOne.style.width = "750px";

    // change button text to compare algo
    compareBtn.innerText = "Compare Algo";

    sortingScreenTwo.style.display = "none";
  }
});
