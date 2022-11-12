export class Instructions {
  constructor() {
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });

    const nextSlide = document.querySelector(".btn-next");

    let currentSlide = 0;
    let lastSlide = slides.length - 1;

    nextSlide.addEventListener("click", function () {
      if (currentSlide === lastSlide) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
      });
    });

    const prevSlide = document.querySelector(".btn-prev");

    prevSlide.addEventListener("click", function () {
      if (currentSlide === 0) {
        currentSlide = lastSlide;
      } else {
        currentSlide--;
      }

      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
      });
    });

    let openInstructions = document.querySelector(".slider-container");

    const exitInstructions = document.getElementById("exit-btn");
    exitInstructions.addEventListener("click", function () {
      openInstructions.classList.toggle("invisible");
    });

    const instructionsButton = document.getElementById(
      "instructions-container"
    );
    instructionsButton.addEventListener("click", function () {
      let openInstructions = document.querySelector(".slider-container");
      openInstructions.classList.toggle("invisible");
    });

    window.onclick = function (event) {
      if (event.target == openInstructions) {
        openInstructions.classList.toggle("invisible");
      }
    };
  }
}

export default Instructions;
