angular.module('myapp', ['ngRoute', 'ngAnimate', 'NerdService',  'GeekService'])
.directive('autozoom', [function () {
  return {
    restrict: 'A',
    link: function ($scope, element, attrs) {
      return ;
      $scope.$watch(function () {
        return $(element[0]).html();
      }, function (length) {
        if ($(window).width() > 640) {
          console.log('No nO ');
          return ;
        }
        var ratio = $(window).width() / 640;
        var css = {
          "-moz-transform": "scale("+ratio+", "+ratio+")",
          zoom: ratio
        };

        $('html, body, p, h3, h2, h4, a, font').css(css);
      });
    }
  };
}]);