angular.module('myapp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
	// home page
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainController'
	})
    .when('/join-us', {
        templateUrl: 'views/join.html',
        controller: 'JoinController'
    })
    .when('/investment', {
        templateUrl: 'views/investment.html',
        controller: 'InvestmentController'
    })
    .when('/news/:id', {
        templateUrl: 'views/news.html',
        controller: 'NewsController'
    })
    .when('/newslist', {
        templateUrl: 'views/newslist.html',
        controller: 'NewsListController',
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    });

   $locationProvider.html5Mode(false);

}]);