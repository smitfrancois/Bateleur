define(["angularAMD"],
    function (angularAMD) {

        angularAMD
            .directive("addNewUser", addNewUser);

        function addNewUser() {
            var directive = {
                restrict: "E",
                templateUrl: "app/UserManagement/AddNewUser/addNewUserView.html",
                controller: "addNewUserController",
                controllerAs: "addNewUserCtrl",
                bindToController: true,
                link: link
            };

            return directive;

            function link(scope, el, attr, ctrl) {

            };

        };

    });