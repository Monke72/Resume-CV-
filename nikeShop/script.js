var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.1,
  spaceBetween: 12,
  freeMode: true,
  navigation: {
    nextEl: ".somebtn",
    prevEl: ".anybtn",
  },
});

var swiperToo = new Swiper(".mySwiperToo", {
  slidesPerView: 3.1,
  spaceBetween: 12,
  freeMode: true,
  navigation: {
    nextEl: ".mens__buttons-too",
    prevEl: ".mens__buttons",
  },
});
