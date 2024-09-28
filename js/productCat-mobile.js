const proSlide1 = new Swiper('.proSlide1', {
    // Optional parameters
    centeredSlides:true,
    // If we need pagination
    scrollbar: {
        el: '.proSlide1Scrollbar',
        draggable :true,
      },
    slidesPerView: 1.3,
    spaceBetween: 30,
    speed:1000,
     autoplay: {
   delay: 3000,
 },
  });
const proSlide2 = new Swiper('.proSlide2', {
    // Optional parameters
    // If we need pagination
    scrollbar: {
        el: '.proSlide2Scrollbar',
        draggable :true,
      },
    slidesPerView: 1.5,
    spaceBetween: 21,
    speed:1000,
    centeredSlides:true,
     autoplay: {
   delay: 3000,
 },
  });