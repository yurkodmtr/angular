var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "app/components/index/index.html",
            controller : "indexCtrl"
        })
        .when("/about", {
            templateUrl : "app/components/about/about.html",
            controller : "aboutCtrl"
        });
});

/* active link menu */
app.controller('menuCtrl', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
