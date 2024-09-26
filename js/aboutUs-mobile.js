jQuery('.openPara').readmore({
    speed: 100,
    collapsedHeight:100,
    moreLink: '<button class="text-blue-text cursor-pointer relative z-10 font-IRANYekan400 text-base text-b2" dir="ltr" style="float:right;">+ بیشتر </button>',
    lessLink: '<button class="text-blue-text cursor-pointer relative z-10 font-IRANYekan400 text-base text-b2" dir="ltr" style="float:right;">- کمتر </button>',
    heightMargin: 16,
    afterToggle: function(trigger, element, expanded) {
        
        if(! expanded) { // The "Close" link was clicked
          $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
        }
      },
});

const certificateSlider = new Swiper('.certificateSlider', {
    // Optional parameters
    // If we need pagination

    scrollbar: {
      el: '.certificatscrollbar',
      draggable:true,
    },
    centeredSlides: true,
    loop:true,
    speed:1000,
    slidesPerView: 2,
    spaceBetween: 62,
   
  });
const tandisSlider = new Swiper('.tandisSlider', {
    // Optional parameters
    // If we need pagination
    speed:1000,
    slidesPerView: 1,
  
    pagination: {
        el: '.tandispagination',
        clickable:true
      },
  });

const gallerySlider = new Swiper('.gallerySlider', {
    // Optional parameters
    // If we need pagination
    speed:1000,
    pagination: {
        el: '.certiPagination',
        clickable:true
      },
  });


