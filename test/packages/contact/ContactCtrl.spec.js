describe('Package > Contact > ContactCtrl', function() {
    beforeEach(module('controller.contact'));

    describe('Sending the form data', function() {
        var $httpBackend;
        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should have the ability to send data', inject(function($controller) {
            var ctrl = $controller('ContactCtrl');

            ctrl.name = "test";
            ctrl.email = "test@domain";
            ctrl.message = "hello world";

            $httpBackend.expectPOST('/api/contact', { name: "test", email: "test@domain", message: "hello world" }).respond(200);
            ctrl.send();
            $httpBackend.flush();
        }));
    });

    describe('Clearing the form', function() {
        it('should remove content of all existing fields', inject(function($controller) {
            var ctrl = $controller('ContactCtrl');
            ctrl.form = { $setPristine: jasmine.createSpy() };

            ctrl.clear();

            expect(ctrl.name).toBe("");
            expect(ctrl.email).toBe("");
            expect(ctrl.message).toBe("");
        }));

        it('should reset the form state to $pristine', inject(function($controller) {
            var ctrl = $controller('ContactCtrl');
            ctrl.form = { $setPristine: jasmine.createSpy() };

            ctrl.clear();

            expect(ctrl.form.$setPristine).toHaveBeenCalled();
        }));
    });
});
