import { AlgoLegends, defaultBarColor, legendContainer, playStopBtn } from "./";

export function updateLegend(sortAlgo) {
  // empty legends
  legendContainer.innerHTML = "";

  // heading for legend
  let legend = document.createElement("div");
  legend.innerText = "Legend:";
  legendContainer.appendChild(legend);

  const SortLegend = AlgoLegends[sortAlgo];

  Object.keys(SortLegend).forEach((legendColor) => {
    let legend = document.createElement("div");
    let span = document.createElement("span");
    span.style.color = `${legendColor.toLowerCase()}`;
    span.innerText = `${legendColor}`;
    legend.innerText = `: ${SortLegend[legendColor]}`;
    legend.prepend(span);
    legendContainer.appendChild(legend);
  });
}

export function updatePlayStopBtn(isSorting) {
  if (!isSorting) {
    // change stop button to play button
    playStopBtn.innerHTML = "";
    let playBtn = document.createElement("i");
    playBtn.setAttribute("id", "play-btn");
    playBtn.classList.add("fa-solid", "fa-play", "fa-2x", "play-btn");
    playStopBtn.appendChild(playBtn);
  } else {
    // change play button to stop button
    playStopBtn.innerHTML = "";
    let stopBtn = document.createElement("i");
    stopBtn.setAttribute("id", "stop-btn");
    stopBtn.classList.add("fa-solid", "fa-stop", "fa-2x", "stop-btn");
    playStopBtn.appendChild(stopBtn);
  }
}

export function resetBarsStyling() {
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = defaultBarColor;
  }
}
