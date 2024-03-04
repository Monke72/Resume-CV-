var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 12,
  freeMode: true,
  navigation: {
    nextEl: ".somebtn",
    prevEl: ".anybtn",
  },
});

var swiperToo = new Swiper(".mySwiperToo-1", {
  slidesPerView: 2,
  spaceBetween: 12,
  freeMode: true,
  navigation: {
    nextEl: ".gearup__sect-mens .mens__buttons-too",
    prevEl: ".gearup__sect-mens .mens__buttons",
  },
});

var swiperToo = new Swiper(".mySwiperToo-2", {
  slidesPerView: 2,
  spaceBetween: 12,
  freeMode: true,
  navigation: {
    nextEl: ".gearup__sect-womens .womens__buttons-too",
    prevEl: ".gearup__sect-womens .womens__buttons",
  },
});

const filters = Array.from(document.querySelectorAll(".filter input"));
const products = Array.from(
  document.querySelectorAll(".catalog .catalog__item")
);

filters.filter((filter) => {
  filter.addEventListener("click", () => {
    const checked = checkedInput();
    const filteredProducts = filteredPoructs(checked);

    console.log(filteredProducts);
  });
});

function filteredPoructs(genders) {
  const idInputs = genders.map((gender) => gender.getAttribute("id"));

  return products.filter((product, index) => {
    const dataProduct = product.dataset.gender;

    if (dataProduct === idInputs[index]) {
      return product;
    }
  });
}

function checkedInput() {
  return filters.filter((filter) => {
    if (filter.checked) {
      return filter;
    }
  });
}
