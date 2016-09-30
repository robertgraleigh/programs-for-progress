$(document).ready(function () {
	$("#owl-stage").owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		stagePadding: 0,
		nav: false,
		dots: false,
		autoplay: true,
		autoHeight: true,
		autoplaySpeed: 1000
	});
	
	$("#team-carousel-slides").owlCarousel({
		items: 1,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		stagePadding: 0,
		nav: true,
		navText: ["<i class='fa fa-arrow-circle-o-left fa-lg fa-fw'></i>", "<i class='fa fa-arrow-circle-o-right fa-lg fa-fw'></i>"],
		dots: false,
		autoplay: false,
		autoHeight: false,
		autoplaySpeed: 8000
	});
	
});