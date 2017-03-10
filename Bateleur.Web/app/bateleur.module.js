define(["angularAMD",
    "angular",
    "bootstrap",
    "jquery"], function (angularAMD) {
        var app = angular.module("BateleurApp", []);

        return angularAMD.bootstrap(app);
    });