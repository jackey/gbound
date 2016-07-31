angular.module('Controller', []).controller('MainController', ['$scope', '$window' ,function($scope, $window) {

	$scope.bannerImageContainerInit = function ($event) {
		var radio = 1500 / 570;
		var maxWidth = $window.innerWidth;
		var maxHeight = maxWidth / radio;
		//var element = $event.currentTarget;
	}

	$scope.showMenu = function () {
		var $mmenu = $('.wrapper-mobile');
		if ($mmenu.hasClass('hideme')) {
			$mmenu.removeClass('hideme');
		}
		else {
			$mmenu.addClass('hideme');
		}
	}

}]);