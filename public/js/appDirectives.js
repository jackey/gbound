$.fn.waitForImages = function (callback) {
    var $img = $('img', $(this)),
        totalImg = $img.length;

    var waitImgLoad = function () {
        totalImg--;
        if (!totalImg) {
            callback();
        }
    };

    $img.on('load', waitImgLoad);
};

angular.module('myapp').directive('homeBannerAutoHeight', function ($window) {
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
.filter('to_trusted', ['$sce', function ($sce) {
  return function (text) {
    return $sce.trustAsHtml(text);
  }
}])

.directive('slider', function () {
	return function (scope, element, attr) {

		$(element[0]).find('img').css({
			visibility: 'hidden',
			height: 1
		});
	
		$(element[0]).waitForImages(function () {
			$(element[0]).slick({
				infinite: true,
				autoplay: true,
        dots: true,
        autoplaySpeed: 2*1000
			});
		$(element[0]).find('img').css({
			visibility: 'visible',
			height: 'auto'
		});
		});
	}
});