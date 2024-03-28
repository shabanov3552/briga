//#region 

let sliderBreakpointsParams = {
   320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,
   },
   599.98: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 20,
   },
   1099.98: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 20,
   },
   1599.98: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 57,
   },
};

const newSliders = document.querySelectorAll('.popular-new-slider');

if (newSliders.length > 0) {
   newSliders.forEach(newSlider => {

      let thumbSlider, mainSlider;

      mainSlider = new Swiper(newSlider.querySelector('.popular__slider'), {
         // autoplay: {
         //    delay: 3000,
         //    disableOnInteraction: false,
         // },
         breakpoints: sliderBreakpointsParams,
         speed: 800,
         observer: true,
         observeParents: true,
         loop: true,
         simulateTouch: false,
         allowTouchMove: false,
         navigation: {
            nextEl: newSlider.querySelector('.popular__nav-next'),
            prevEl: newSlider.querySelector('.popular__nav-prev'),
         },
         on: {
            beforeInit: function (swiper) {

               renderImagesSlider(swiper.el, Array.from(swiper.el.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)')));

               thumbSlider = new Swiper(this.el.querySelector('.popular__thimb-slider'), {
                  breakpoints: sliderBreakpointsParams,
                  speed: 1000,
                  observer: true,
                  observeParents: true,
                  loop: true,
                  simulateTouch: false,
                  allowTouchMove: false,
               });
            },
         },
      });

      mainSlider.on('slideNextTransitionStart', () => { thumbSlider.slideNext(); });

      mainSlider.on('slidePrevTransitionStart', () => { thumbSlider.slidePrev(); });

      thumbSlider.on('slideChangeTransitionStart', () => {
         mainSlider.allowSlideNext = false;
         mainSlider.allowSlidePrev = false;
         mainSlider.allowTouchMove = false;
      });

      thumbSlider.on('slideChangeTransitionEnd', () => {
         mainSlider.allowSlideNext = true;
         mainSlider.allowSlidePrev = true;
         mainSlider.allowTouchMove = false;
      });
   });

   function renderImagesSlider(slider, slides) {
      let thumbSlides = '';

      for (const slide of slides) {
         thumbSlides += generateSlides(slide);
      }

      slider.insertAdjacentHTML('beforeend', generateSLiderLayout());

      function generateSlides(slide) {
         let src = slide.querySelector('.card__image-img').getAttribute('src');
         let classMod = '';

         slide.querySelector('.card').classList.forEach(s => {
            if (s == 'liquidation') classMod = 'liquidation';
            if (s == 'soon') classMod = 'soon';
            if (s == 'new') classMod = 'new';
         });

         return `
               <div class="swiper-slide ${classMod}">
                  <img loading="lazy" alt="" src="${src}"></img>
               </div>`
      }

      function generateSLiderLayout() {
         return `
               <div class="swiper-container popular__thimb-slider">
                  <div class="swiper-wrapper">
                     ${thumbSlides}
                  </div>
               </div>`
      }
   };
}

//#endregion