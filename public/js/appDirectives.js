angular.module('AppDirective', []).directive('homeBannerAutoHeight', function ($window) {
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
});