angular.module('myapp')
    .run(['$rootScope', '$location' , function ($rootScope, $location) {
        $rootScope.showMenu = function () {
            var $mmenu = $('.wrapper-mobile');
            if ($mmenu.hasClass('hideme')) {
                $mmenu.removeClass('hideme');
            }
            else {
                $mmenu.addClass('hideme');
            }
        };

        $rootScope.activeClass = function (path){
            return ($location.path() === path) ? 'active' : '';
        };

        $rootScope.hideMobileMenu = function () {
            var $mmenu = $('.wrapper-mobile');
            if (!$mmenu.hasClass('hideme')) {
                $rootScope.showMenu();
            }
        };

        console.log('hello');
    }]);