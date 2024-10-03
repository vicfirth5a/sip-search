


var swiper = new Swiper(".mySwiper-rs", {
  slidesPerView: "auto",
  spaceBetween: 48    ,
  slidesPerView: 3,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },
  navigation: {
    nextEl: ".custom-button-next",
    prevEl: null,
  },
  breakpoints: {
    // 991: {
    //   slidesPerView: 2,
    //   spaceBetween: 48,
    // },
  },
});


