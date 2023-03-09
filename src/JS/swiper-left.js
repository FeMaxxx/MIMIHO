const swiperRight = document.querySelectorAll('[data-slider="swiper-left"]');

let arrowPrev;
let arrowNext;

swiperRight.forEach(slider => {
  arrowPrev = slider.querySelector(".swiper-button-left");
  arrowNext = slider.querySelector(".swiper-button-right");
});

const swiper = new Swiper(".swiper-left", {
  slidesPerView: 1,
  speed: 1500,
  spaceBetween: 20,

  navigation: {
    nextEl: arrowPrev,
    prevEl: arrowNext,
  },

  breakpoints: {
    1023.98: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
  },
});
