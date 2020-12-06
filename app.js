// swiper.js



var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
    },
  });



