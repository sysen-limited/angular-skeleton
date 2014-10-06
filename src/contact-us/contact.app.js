angular.module('example.contact', [
    'controller.contact',

    'ngRoute'
])
    .config(['$routeProvider', function ($routes) {
        $routes
            .when('/contact', {
                controller: "ContactCtrl as contact", templateUrl: 'templates/contact.html'
            });
    }]);