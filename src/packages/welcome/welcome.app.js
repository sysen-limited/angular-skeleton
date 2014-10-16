angular.module('package.welcome', [
    'ngRoute',

    'controller.welcome'
])
    .config(['$routeProvider', function ($routes) {
        $routes
            .when('/', {
                controller: 'WelcomeCtrl', controllerAs: 'welcome', templateUrl: 'templates/welcome.html'
            });
    }]);
