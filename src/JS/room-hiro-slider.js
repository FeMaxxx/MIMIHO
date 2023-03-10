const swiperRight = document.querySelectorAll(
  '[data-slider="room-hero__slider"]'
);

let arrowPrev;
let arrowNext;

swiperRight.forEach(slider => {
  arrowPrev = slider.querySelector(".swiper-button-left");
  arrowNext = slider.querySelector(".swiper-button-right");
  console.log(arrowPrev);
});

const swiper = new Swiper(".room-hero__slider", {
  slidesPerView: 1,
  speed: 1500,

  navigation: {
    nextEl: arrowNext,
    prevEl: arrowPrev,
  },
});
