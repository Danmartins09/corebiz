//----- SLIDERS -----
const banners = new Swiper(".banners", {
  slidesPerView: 1,
  pagination: {
    el: ".bannersPagination",
    clickable: true,
  },
  loop: true,
  keyboard: true,
});

const productsSlider = new Swiper(".productsSlider", {
  a11y: {
    enabled: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 50,
      width: 410,
      pagination: {
        el: ".productsSliderPagination",
        clickable: true,
      },
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 58,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 99,
    },
  },
});
