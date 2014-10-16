angular.module('example', [
    'package.welcome',
    'package.contact',
    'ui.bootstrap'
])
    .config(['$locationProvider', function($location) {
        $location.html5Mode(true);
    }]);
