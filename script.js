// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 1,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide:'true',
//     fade:'true',
//     grabCursor:'true',

//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets:'true',
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints:{
//       0:{
//         slidesPerView:1
//       },
//       520:{
//         slidesPerView:2
//       },
//       950:{
//          slidesPerView:3
//       },

        // Yatay Swiper 1
        new Swiper('.swiper-container.swiper-horizontal:first-child', {
          direction: 'horizontal',
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
      });

      // Yatay Swiper 2
      new Swiper('.swiper-container.swiper-horizontal:last-child', {
          direction: 'horizontal',
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
      });

      // Dikey Swiper
      new Swiper('.swiper-container.swiper-vertical', {
          direction: 'vertical',
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
      });