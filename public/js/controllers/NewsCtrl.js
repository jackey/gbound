angular.module('myapp').controller('NewsController', ['$scope', '$window', '$routeParams', 'Nerd', 
  function($scope, $window, $routeParams, Nerd) {
    var id = $routeParams.id;

    $scope.news = {};
    Nerd(id).then(function (res) {
      var data = res.data;
      if (data.err) {
        alert(data.msg);
      } else {
        $scope.news = data.data;
      }
    });
}]);