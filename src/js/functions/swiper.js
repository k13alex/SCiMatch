export const swiper = () => {
  const check = document.querySelector(".options__swiper");

  if (!check) {
    return;
  }

  const swiper = new Swiper(".swiper", {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2.5,
    centeredSlides: false,
    spaceBetween: 30,
    speed: 300, // Speed of transition between slides (in ms)
    freeMode: true, // Enable free mode
    freeModeMomentum: true, // Enable momentum in free mode
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  // document.getElementById("next-arrow").addEventListener("click", function () {
  //   customSwiper.slideNext();
  // });

  // Функция для обновления высоты слайдов
  function updateSlideHeights() {
    const optionsSwiper = document?.querySelector(".options__swiper");

    if (!optionsSwiper) {
      return;
    }
    var swiperSlides = document?.querySelectorAll(".options-slide");
    var maxHeight = 0;

    swiperSlides.forEach(function (slide) {
      slide.style.height = ""; // Сбросить высоту на каждом слайде перед измерением новой высоты
      var slideHeight = slide.clientHeight;
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight;
      }
    });

    swiperSlides.forEach(function (slide) {
      slide.style.height = maxHeight + "px";
    });

    optionsSwiper.style.height = maxHeight + "px";
  }

  // Вызовите функцию при загрузке страницы и при изменении размера окна
  window.addEventListener("load", updateSlideHeights);
  window.addEventListener("resize", updateSlideHeights);
};
