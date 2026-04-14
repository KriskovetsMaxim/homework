export const heroSlider = () => {
  new Swiper(".hero__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".hero__slider-button--prev",
      nextEl: ".hero__slider-button--next",
    },
	scrollbar: {
    el: '.swiper-scrollbar',
	dragSize: 194,
  	},
	pagination: {
		el: '.swiper-pagination',
		clickable:true,
	}
  });
};