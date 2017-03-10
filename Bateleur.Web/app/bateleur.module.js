define(["angularAMD",
    "angular",
    "bootstrap",
    "jquery",
    "mainContainerController",
    "mainContainerDirective",
    "mainMenuController",
    "mainMenuDirective",
    "addNewUserController",
    "addNewUserDirective"], function (angularAMD) {
        var app = angular.module("BateleurApp", []);

        return angularAMD.bootstrap(app);
    });