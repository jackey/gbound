angular.module('AppDirective', [])

.directive('homeBannerAutoHeight', function ($window) {
	return {
		link: function (scope, element, attrs) {
			var radio = 1500 / 570;
			var maxWidth = $window.innerWidth;
			var maxHeight = maxWidth / radio;

			scope.style = function () {
				var d = {
					'width': maxWidth + 'px',
					'height': maxHeight + 'px'
				};

				return d;
			}
		}
	}
})

.directive('slider', function () {
	return function (scope, element, attr) {
		var $element = $(element[0]);
		var $imgs = $element.find('img').each(function (index) {
			if (index == 0) return 
			$(this).css({
				opacity: 0
			});
		});
		$element.addClass('slider-directive');
		var crtIndex = 0,
			running = false;
		setInterval(function () {
			if (running) return ;

			running = true;

			$imgs.eq(crtIndex).animate({
				opacity: 0
			}, {duration: 800, easing: 'easeInCubic'});

			if (crtIndex >= $imgs.size() - 1) crtIndex = -1;

			$imgs.eq(++crtIndex).animate({
				opacity: 1
			}, {
				duration: 800,
				easing: 'easeInCubic',
				complete: function () {
					running =  false;
				}
			});
		}, 2000);
	}
});