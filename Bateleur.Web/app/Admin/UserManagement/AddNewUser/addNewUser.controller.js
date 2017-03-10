define(["angularAMD"],
    function (angularAMD) {

        angularAMD
            .controller("addNewUserController", addNewUserController);

        addNewUserController.$inject = ["$scope"];

        function addNewUserController(scope) {
            var vm = this;

        };

    });