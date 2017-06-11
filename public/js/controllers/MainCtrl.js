angular.module('myapp').controller('MainController', ['$scope', '$window' ,function($scope, $window) {

	$scope.bannerImageContainerInit = function ($event) {
		var radio = 1500 / 570;
		var maxWidth = $window.innerWidth;
		var maxHeight = maxWidth / radio;


	}

  $scope.animateElementIn = function($el) {
    $el.removeClass('not-visible');
    $el.addClass('animated fadeIn');
    console.log('scroll in ');
  };

  $scope.animateElementOut = function ($el) {
    $el.addClass('not-visible');
    $el.removeClass('animated fadeIn'); 
    console.log('scroll out ');
  }

}])
.controller('NewsListController', ['$scope', '$window', function ($scope, $window) {
  //
}]);