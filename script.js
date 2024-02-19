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
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });