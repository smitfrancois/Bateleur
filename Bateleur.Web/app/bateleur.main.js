require.config({
    baseUrl: "",
    paths: {
        "angular": "scripts/angular",
        "angularAMD": "scripts/angularAMD",
        "bootstrap": "scripts/bootstrap",
        "jquery": "scripts/jquery-1.9.1",
        "mainContainerController": "app/mainContainer/mainContainer.controller",
        "mainContainerDirective": "app/mainContainer/mainContainer.directive",
        "mainMenuController": "app/mainMenu/mainMenu.controller",
        "mainMenuDirective": "app/mainMenu/mainMenu.directive",
        "addNewUserController": "app/Admin/UserManagement/AddNewUser/addNewUser.controller",
        "addNewUserDirective":"app/Admin/UserManagement/AddNewUser/addNewUser.directive"
    },
    shim: {
        "angular": "angular",
        "bootstrap": { deps: ["jquery"] }

    },
    deps: ["app/bateleur.module"]
});