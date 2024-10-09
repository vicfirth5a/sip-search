



const swiper = new Swiper(".mySwiper", {



  slidesPerView: "auto",
  spaceBetween: 24    ,
  slidesPerView: 2,
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
    992: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  },
});


