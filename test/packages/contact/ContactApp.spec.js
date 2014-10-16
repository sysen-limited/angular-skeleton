describe('Package > Contact > Application', function() {
    beforeEach(module('package.contact'));

    describe('Routing', function() {
        it('should have a route to the contact form', inject(function($route) {
            expect($route.routes['/contact'].controller).toBe('ContactCtrl');
            expect($route.routes['/contact'].controllerAs).toBe('contact');
            expect($route.routes['/contact'].templateUrl).toBe('templates/contact.html');
        }));
    });
});
