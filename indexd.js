const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 900,
  effect: "slide",

  // Disable manual sliding
  allowTouchMove: false,
  simulateTouch: false,
  draggable: false,
  keyboard: {
    enabled: false,
  },
  mousewheel: {
    enabled: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: false, // also disable clicking bullets
  },

  centeredSlides: true,
  centeredSlidesBounds: false,
});



document.querySelectorAll(".mobile-card").forEach(box => {
    box.addEventListener("click", (e) => {
        e.stopPropagation();

        const icons = box.querySelector(".mobile-icons");
        const isOpen = icons.classList.contains("show");

        // Close all popups
        document.querySelectorAll(".mobile-icons").forEach(i => {
            i.classList.remove("show");
            setTimeout(() => i.style.display = "none", 250);
        });

        // Open only if it was closed
        if (!isOpen) {
            icons.style.display = "grid";
            setTimeout(() => icons.classList.add("show"), 10);
        }
    });
});

// Prevent popup from closing when clicking inside it
document.querySelectorAll(".mobile-icons").forEach(iconBox => {
    iconBox.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

// Close when clicking outside
document.addEventListener("click", () => {
    document.querySelectorAll(".mobile-icons").forEach(i => {
        i.classList.remove("show");
        setTimeout(() => i.style.display = "none", 250);
    });
});




// document.addEventListener("DOMContentLoaded", () => {
//   const swiper = new Swiper(".cardSwiper", {
//     loop: true,
//     speed: 700,

//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },

//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },

//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
//       1440: { slidesPerView: 5, spaceBetween: 20 },
//       1200: { slidesPerView: 4, spaceBetween: 20 },
//       992: { slidesPerView: 3, spaceBetween: 20 },
//       768: { slidesPerView: 2, spaceBetween: 20 },
//       0: { slidesPerView: 1, spaceBetween: 10 }
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".cardSwiper", {
    loop: true,
    speed: 700,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    // centeredSlides: true,               // ✅ Center slides
    centerInsufficientSlides: true,     // ✅ Center even if slides < slidesPerView

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1440: { slidesPerView: 5, spaceBetween: 20 },
      1200: { slidesPerView: 3.5, spaceBetween: 20 },
      992: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1, spaceBetween: 10 }
    }
  });
});
