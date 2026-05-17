const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".ticket-card");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }

  updateSlider();
});
