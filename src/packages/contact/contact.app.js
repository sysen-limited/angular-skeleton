angular.module('package.contact', [
    'controller.contact',

    'ngRoute'
])
    .config(['$routeProvider', function ($routes) {
        $routes
            .when('/contact', {
                controller: "ContactCtrl", controllerAs: "contact", templateUrl: 'templates/contact.html'
            });
    }]);
