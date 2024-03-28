
if (document.querySelector('.main-slider__slider')) {
	new Swiper('.main-slider__slider', {
		slidesPerView: 'auto',
		loop: true,
		slideToClickedSlide: true,
		speed: 500,
		parallax: true,
		watchSlidesProgress: true,
		preloadImages: false,
		lazy: {
			checkInView: true,
			enabled: true,
			loadPrevNext: true,
			loadPrevNextAmount: 3,
			loadOnTransitionStart: true,
		},
		navigation: {
			nextEl: ".main-slider__nav-btn.swiper-button-next",
			prevEl: ".main-slider__nav-btn.swiper-button-prev",
		},

		initialSlide: 8,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 3,
			},
			769: {
				slidesPerView: 1,
			},
			1101: {
				slidesPerView: 2.5,
			},
			1540: {
				slidesPerView: 'auto',
			},
		},
		thumbs: {
			swiper: {
				el: '.main-slider__bg-slider',
				loop: true,
				effect: "fade",
				watchSlidesProgress: true,
				preloadImages: false,
				lazy: {
					enabled: true,
					loadPrevNext: true,
					loadOnTransitionStart: true,
				},
			},
		},
	});
}
if (document.querySelector('.popular__slider1')) {
	new Swiper('.popular__slider1', {
		/* autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}, */
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			980: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1740: {
				slidesPerView: 5,
			},
		},
		speed: 200,
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		loop: true,
		navigation: {
			nextEl: ".popular__nav-next_1",
			prevEl: ".popular__nav-prev_1",
		},
	});
}
if (document.querySelector('.popular__slider2')) {
	new Swiper('.popular__slider2', {
		/* autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}, */
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			980: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1740: {
				slidesPerView: 5,
			},
		},
		speed: 200,
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		loop: true,
		navigation: {
			nextEl: ".popular__nav-next_2",
			prevEl: ".popular__nav-prev_2",
		},
	});
}

// if (document.querySelector('.popular-new-slider .popular__slider')) {
// 	let thumbSlider;

// 	let popNewSlider = new Swiper('.popular-new-slider .popular__slider', {
// 		autoplay: {
// 			delay: 3000,
// 			disableOnInteraction: false,
// 		},

// 		slidesPerGroup: 4,
// 		breakpoints: {
// 			320: {
// 				slidesPerGroup: 1,
// 				slidesPerView: 1,
// 				spaceBetween: 20,
// 			},
// 			599.98: {
// 				slidesPerGroup: 2,
// 				slidesPerView: 2,
// 				spaceBetween: 20,
// 			},
// 			1099.98: {
// 				slidesPerGroup: 3,
// 				slidesPerView: 3,
// 				spaceBetween: 20,
// 			},
// 			1599.98: {
// 				slidesPerGroup: 4,
// 				slidesPerView: 4,
// 				spaceBetween: 57,
// 			},
// 		},


// 		parallax: true,
// 		speed: 800,
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 4,
// 		loop: true,
// 		spaceBetween: 57,
// 		simulateTouch: false,
// 		navigation: {
// 			nextEl: ".popular-new-slider .popular__nav-next",
// 			prevEl: ".popular-new-slider .popular__nav-prev",
// 		},

// 		on: {
// 			beforeInit: function () {

// 				renderImagesSlider();

// 				thumbSlider = new Swiper('.popular__thimb-slider', {
// 					speed: 1000,
// 					slidesPerView: 4,
// 					loop: true,
// 					spaceBetween: 57,
// 					simulateTouch: false,

// 					slidesPerGroup: 4,
// 					breakpoints: {
// 						320: {
// 							slidesPerGroup: 1,
// 							slidesPerView: 1,
// 							spaceBetween: 20,
// 						},
// 						599.98: {
// 							slidesPerGroup: 2,
// 							slidesPerView: 2,
// 							spaceBetween: 20,
// 						},
// 						1099.98: {
// 							slidesPerGroup: 3,
// 							slidesPerView: 3,
// 							spaceBetween: 20,
// 						},
// 						1599.98: {
// 							slidesPerGroup: 4,
// 							slidesPerView: 4,
// 							spaceBetween: 57,
// 						},
// 					},
// 				});

// 			},

// 			init: function (swiper) { },

// 			slideNextTransitionStart: function (swiper) {
// 				// thumbSlider.slideNext();
// 			},

// 			slidePrevTransitionStart: function () {
// 				// thumbSlider.slidePrev();
// 			},
// 		},
// 	});

// 	function renderImagesSlider() {
// 		let slidesNew = '';

// 		let swiper = document.querySelector('.popular-new-slider .popular__slider');
// 		let slides = swiper.querySelectorAll('.swiper-slide');

// 		let target = swiper;

// 		slides.forEach(slide => {
// 			slidesNew += generateSlides(slide);
// 		});

// 		target.insertAdjacentHTML('beforeend', `${generateSLiderLayout()}`)

// 		function generateSlides(slide) {
// 			let src = slide.querySelector('.card__image-img');
// 			return `
// 			<div class="swiper-slide">
// 				<img loading="lazy" alt="" src="${src.getAttribute('src')}"></img>
// 			</div>`
// 		}

// 		function generateSLiderLayout() {
// 			return `
// 			<div class="swiper-container popular__thimb-slider">
// 				<div class="swiper-wrapper">
// 					${slidesNew}
// 				</div>
// 			</div>`
// 		}
// 	};

// 	popNewSlider.on('slideNextTransitionStart', (swiper) => {
// 		thumbSlider.slideNext();
// 	});

// 	popNewSlider.on('slidePrevTransitionStart', (swiper) => {
// 		thumbSlider.slidePrev();
// 	});

// 	//========================================================================================================================================================

// 	thumbSlider.on('slideChangeTransitionStart', () => {
// 		popNewSlider.allowSlideNext = false;
// 		popNewSlider.allowSlidePrev = false;
// 		popNewSlider.allowTouchMove = false;
// 	});

// 	thumbSlider.on('slideChangeTransitionEnd', () => {
// 		popNewSlider.allowSlideNext = true;
// 		popNewSlider.allowSlidePrev = true;
// 		popNewSlider.allowTouchMove = true;
// 	});
// }

if (document.querySelector('.popular__slider3')) {
	new Swiper('.popular__slider3', {
		/* autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}, */
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			980: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1740: {
				slidesPerView: 5,
			},
		},
		speed: 200,
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		loop: true,
		navigation: {
			nextEl: ".popular__nav-next_3",
			prevEl: ".popular__nav-prev_3",
		},
	});
}

if (document.querySelector('.index-works__slider')) {
	new Swiper('.index-works__slider', {
		/* autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}, */
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			700: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 3,
			},
		},
		speed: 200,
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		navigation: {
			prevEl: ".index-works__nav-prev",
			nextEl: ".index-works__nav-next",
		},
	});
}

if (document.querySelector('.slider-product__big')) {
	new Swiper('.slider-product__big', {
		slidesPerView: 1,
		navigation: {
			nextEl: ".slider-product__nav-next",
			prevEl: ".slider-product__nav-prev",
		},
		thumbs: {
			swiper: {
				el: '.slider-product__nav',
				slidesPerView: 6,
				spaceBetween: 9,
				breakpoints: {
					320: {
						direction: "vertical",
						slidesPerView: 4,
					},
					1440: {
						direction: "vertical",
						slidesPerView: 6,
					},
				},
			},
		},
		spaceBetween: 5,
	});
}

if (document.querySelector('.case__photo-slider')) {
	new Swiper('.case__photo-slider', {
		slidesPerView: 2,
		navigation: {
			nextEl: ".case__photo-slider-nav-next",
			prevEl: ".case__photo-slider-nav-prev",
		},
		spaceBetween: 18,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			700: {
				slidesPerView: 2,
			},
		},
	});
}

if (document.querySelector('.works__slider')) {
	let worksSliderThumbs = new Swiper('.works__desc-slider', {
		allowTouchMove: false,
		autoHeight: true,
	});
	let worksSlider = new Swiper('.works__slider', {
		initialSlide: 1,
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 130,
			modifier: 1,
			slideShadows: true,
		},
		navigation: {
			nextEl: ".works__slider-nav .swiper-button-next",
			prevEl: ".works__slider-nav .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,

			},
			545: {
				slidesPerView: "auto",
			},
			1920: {
				slidesPerView: 3,
			}
		},
		pagination: {
			type: 'fraction',
			el: '.swiper-pagination.works__slider-counter'
		},
		on: {
			// init: function () {
			// 	let currentSlide = this.activeIndex + 1;
			// 	document.querySelector('.works__slider-counter').innerHTML = `
			// 	<span class="counter__current">
			// 		${currentSlide}
			// 	</span> 
			// 	/ 
			// 	<span class="counter__total">
			// 		${this.slides.length}
			// 	</span>`;
			// },
			slideChange: function () {
				let currentSlide = this.activeIndex + 1;
				// document.querySelector('.works__slider-counter').innerHTML = `
				// <span class="counter__current">
				// 	${currentSlide}
				// </span> 
				// / 
				// <span class="counter__total">
				// 	${this.slides.length}
				// </span>`;
				if (this.activeIndex % 3 === 0) {
					worksSliderThumbs.slideTo(this.activeIndex / 3);

				} else {
					worksSliderThumbs.slideTo(this.activeIndex / 3);

				}
			},
		},
	});
}

if (document.querySelector('.photo-slider__slider')) {
	new Swiper('.photo-slider__slider', {
		navigation: {
			nextEl: ".photo-slider .swiper-button-next",
			prevEl: ".photo-slider .swiper-button-prev",
		},
		pagination: {
			type: 'fraction',
			el: '.photo-slider .swiper-pagination'
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 'auto',
			}
		}
		// thumbs: {
		// 	swiper: {
		// 		el: '.slider-product__nav',
		// 		slidesPerView: 6,
		// 		spaceBetween: 9,
		// 		breakpoints: {
		// 			320: {
		// 				direction: "vertical",
		// 				slidesPerView: 4,
		// 			},
		// 			1440: {
		// 				direction: "vertical",
		// 				slidesPerView: 6,
		// 			},
		// 		},
		// 	},
		// },
		// spaceBetween: 5,
	});
}

if (document.querySelector('.index-sale__slider')) {
	new Swiper('.index-sale__slider', {
		navigation: {
			nextEl: ".index-sale .swiper-button-next",
			prevEl: ".index-sale .swiper-button-prev",
		},
		pagination: {
			type: 'fraction',
			el: '.index-sale .swiper-pagination'
		},
		slidesPerView: 1,
		spaceBetween: 20,
	});
}