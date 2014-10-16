describe('Package > Welcome > WelcomeCtrl', function() {
    beforeEach(module('controller.welcome'));

    it('should show a welcome message', inject(function($controller) {
        var ctrl = $controller('WelcomeCtrl');

        expect(ctrl.message).toBe('Hello World!');
    }));
});
