const mySwiper = new Swiper (".swiper-container", {

  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

export default mySwiper;
