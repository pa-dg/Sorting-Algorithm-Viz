import { BAR_HEIGHT, graphContainer } from "./";

export class AnimationArray {
  constructor(array) {
    this.array = array;
    this.renderBars(this.array);
  }

  renderBars(array) {
    for (let i = 0; i < this.array.length; i++) {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${array[i] * BAR_HEIGHT}px`;
      bar.setAttribute("id", `bar-${array[i]}`);
      graphContainer.appendChild(bar);
    }
  }

  resetBars() {
    graphContainer.innerHTML = "";
  }
}

export default AnimationArray;
