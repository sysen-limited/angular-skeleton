angular.module('controller.contact', ['ngResource'])
    .controller('ContactCtrl', ['$resource', function($resource) {
        var self = this;

        this.send = function() {
            $resource('/api/contact').save({ name: self.name, email: self.email, message: self.message });
        };

        this.clear = function() {
            self.name = "";
            self.email = "";
            self.message = "";
            self.form.$setPristine();
        };
    }]);
