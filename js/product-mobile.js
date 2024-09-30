const proGallery = new Swiper('.proGallery', {
    // Optional parameters
   
    // If we need pagination
    pagination: {
      el: '.proPagination',
      clickable:true,
    },
  
  });


  const modelSwiper = new Swiper('.modelSwiper', {
    // Optional parameters
   
    // If we need pagination
    speed:1000,
  });


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