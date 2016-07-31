angular.module('myapp', ['ngRoute', 'appRoutes', 'Controller', 'NerdService',  'GeekService', 'AppDirective'])
    .run(['$rootScope', function ($rootScope) {
        $rootScope.showMenu = function () {
            var $mmenu = $('.wrapper-mobile');
            if ($mmenu.hasClass('hideme')) {
                $mmenu.removeClass('hideme');
            }
            else {
                $mmenu.addClass('hideme');
            }
        }
    }]);