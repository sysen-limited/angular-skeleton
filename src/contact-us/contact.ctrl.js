angular.module('controller.contact', [])
    .controller('ContactCtrl', function() {
        var self = this;

        this.clear = function() {
            console.log(self);
            self.name = "";
            self.email = "";
            self.message = "";
            self.form.$setPristine();
        };
    });