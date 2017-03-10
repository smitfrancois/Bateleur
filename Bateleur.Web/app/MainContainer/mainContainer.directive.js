define(["angularAMD"],
    function(angularAMD) {

        angularAMD
            .directive("mainContainer", mainContainer);

        function mainContainer() {
            var directive = {
                restrict: "E",
                templateUrl: "app/mainContainer/mainContainerView.html",
                controller: "mainContainerController",
                controllerAs: "mainContainerCtrl",
                bindToController: true,
                link:link
            };

            return directive;

            function link(scope, el, attr, ctrl) {
                
            };

        };

    });