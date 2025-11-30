const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000, // auto slide every 3s
        disableOnInteraction: false,
    },
    speed: 900, // smooth slide speed
    effect: "slide", // or "fade"
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
});


document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".cardSwiper", {
    loop: true,
    speed: 700,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1200: { slidesPerView: 5, spaceBetween: 20 },
      992: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1, spaceBetween: 10 }
    }
  });
});
