angular.module('example.welcome', [
    'ngRoute',

    'controller.welcome'
])
    .config(['$routeProvider', function ($routes) {
        $routes
            .when('/', {
                controller: 'WelcomeCtrl as welcome', templateUrl: 'templates/welcome.html'
            });
    }]);