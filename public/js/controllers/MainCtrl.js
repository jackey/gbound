angular.module('MainCtrl', []).controller('MainController', function($scope, $window) {

	$scope.bannerImageContainerInit = function ($event) {
		var radio = 1500 / 570;
		var maxWidth = $window.innerWidth;
		var maxHeight = maxWidth / radio;
		//var element = $event.currentTarget;
	}

});