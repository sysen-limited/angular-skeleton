describe('Package > Welcome > Application', function() {
    beforeEach(module('package.welcome'));

    describe('Routing', function() {
        it('should have a route to the contact form', inject(function($route) {
            expect($route.routes['/'].controller).toBe('WelcomeCtrl');
            expect($route.routes['/'].controllerAs).toBe('welcome');
            expect($route.routes['/'].templateUrl).toBe('templates/welcome/welcome.html');
        }));
    });
});
