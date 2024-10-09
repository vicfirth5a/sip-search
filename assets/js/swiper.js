


const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 48    ,
  slidesPerView: 3,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 991: {
    //   slidesPerView: 2,
    //   spaceBetween: 48,
    // },
  },
});


