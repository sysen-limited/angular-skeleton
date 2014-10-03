angular.module('example.contact', [
    'ngRoute'
])
    .config(['$routeProvider', function ($routes) {
        $routes
            .when('/contact', {
                templateUrl: 'templates/contact.html'
            });
    }]);