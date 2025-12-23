const slides = document.querySelectorAll(".hero-slide");
let current = 0;

const IMAGE_TIME = 1500;     // CSS slide transition time
const CONTENT_DELAY = 1200; // text delay

function isMobile() {
  return window.innerWidth <= 991;
}

function showSlide(index) {

  slides.forEach(slide => {
    slide.classList.remove("active", "exit", "show-content");
  });

  /* EXIT animation ONLY on desktop */
  if (!isMobile()) {
    slides[current].classList.add("exit");
  }

  /* Activate new slide */
  slides[index].classList.add("active");

  /* Show content after image settles */
  setTimeout(() => {
    slides[index].classList.add("show-content");
  }, CONTENT_DELAY);

  current = index;
}

/* INITIAL LOAD */
slides[0].classList.add("active");
setTimeout(() => {
  slides[0].classList.add("show-content");
}, CONTENT_DELAY);

/* AUTO SLIDE */
setInterval(() => {
  showSlide((current + 1) % slides.length);
}, 6500);
