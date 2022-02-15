$(document).ready(function () {
	$(window).on('scroll', function () {
		if ($(document).scrollTop() > 0) {
			$('.header').css({
				'padding-top': 5 + 'px',
				'padding-bottom': 5 + 'px',
				'transition-duration': 0.9,
			});
		} else {
			$('.header').css({
				'padding-top': 26 + 'px',
				'padding-bottom': 26 + 'px',
			});
		}
		
	});
});
