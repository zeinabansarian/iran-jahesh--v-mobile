  // Enable Scroll

  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  
// gallery slider
let swiperGallery = new Swiper('.swiper-gallery', {
    speed: 1000,
    slidesPerView:1,
    spaceBetween: 40,
    grabCursor:true,
    pagination: {
     el: '.GallerysSlider .Pagination',
     clickable: true,
     type: 'bullets',
     renderBullet: function (index, className) {
     return '<span class="' + className + '">'  + '</span>';
 
     }
   }

  });

  const relatedPro = new Swiper('.relatedPro', {
    grabCursor:true,
    centeredSlides: true,
    loop:true,
    // If we need pagination
    scrollbar: {
        el: '.relatedProScrollbar',
        draggable:true,
      },
    slidesPerView: 1.4,
    spaceBetween: 30
  });
  const relatedBlog = new Swiper('.relatedBlog', {
    grabCursor:true,
    centeredSlides: true,
    loop:true,
    slidesPerView: 1.4,
    spaceBetween: 30,
    // If we need pagination
    scrollbar: {
        el: '.relatedBlogScrollbar',
        draggable:true,
      },
  });
  const relatedProj = new Swiper('.relatedProj', {
    centeredSlides: true,
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor:true,
    // If we need pagination
    scrollbar: {
        el: '.relatedProjScrollbar',
        draggable:true,
      },
  });
