angular.module('myapp').controller('MainController', ['$scope', '$window' ,function($scope, $window) {

	$scope.bannerImageContainerInit = function ($event) {
		var radio = 1500 / 570;
		var maxWidth = $window.innerWidth;
		var maxHeight = maxWidth / radio;
		//var element = $event.currentTarget;
	}

}]);