describe('Application', function() {
    beforeEach(module('example'));

    describe('Configuration', function() {
        it('should use HTML5 mode', inject(function($location) {
            expect($location.$$html5).toBeTruthy();
        }));
    });
});
