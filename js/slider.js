const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1280: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});
