angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

  return function (id, limit) {
    if (!id) {
      if (limit) {
        return $http.get('/rest/blog?num='+limit);
      } else {
        return $http.get('/rest/blog');
      }
    }
    else return $http.get('/rest/blog/' + id);
  }
}]);