angular.module('myapp')
    .run(['$rootScope', '$location',  function ($rootScope, $location) {
        $rootScope.showMenu = function () {
            var $mmenu = $('.wrapper-mobile');
            if ($mmenu.hasClass('hideme')) {
                $mmenu.removeClass('hideme');
            }
            else {
                $mmenu.addClass('hideme');
            }
        };

        $rootScope.activeClass = function (path) {
            var args = Array.prototype.slice.call(arguments, 0);
            for (var i = 0; i < args.length; i++) {
                if ($location.path() === args[i]) {
                    return 'active';
                }
            }
            return '';
        };

        $rootScope.hideMobileMenu = function (event) {

            var $mmenu = $('.wrapper-mobile');
            if (!$mmenu.hasClass('hideme')) {
                $rootScope.showMenu();
            }

        };
    }]);