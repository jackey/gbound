angular.module('myapp').controller('MainController', ['$scope', '$window', 'Nerd' ,function($scope, $window, Nerd) {

	$scope.bannerImageContainerInit = function ($event) {
		var radio = 1500 / 570;
		var maxWidth = $window.innerWidth;
		var maxHeight = maxWidth / radio;
	}

  $scope.animateElementIn = function($el) {
    $el.removeClass('not-visible');
    $el.addClass('animated fadeIn');
  };

  $scope.animateElementOut = function ($el) {
    $el.addClass('not-visible');
    $el.removeClass('animated fadeIn');
  };

  $scope.newsItems = [];
  Nerd(null, 5).then(function (res){
    $scope.newsItems = res.data.data;
  });



}])
.controller('NewsListController', ['$scope', '$window', 'Nerd', function ($scope, $window, Nerd) {

  $scope.newsItems = [];

  Nerd().then(function (res){
    if (res.data.err) {
      alert('服务器异常 请站点联系管理员');
    } else {
      $scope.newsItems = res.data.data;
    }
  });
}]);