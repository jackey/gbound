angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

  return function (id) {
    if (!id) return $http.get('/rest/blog');
    else return $http.get('/rest/blog/' + id);
  }
}]);