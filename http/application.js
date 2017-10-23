/**
 * Created by Aladeen on 25.9.2017..
 */
var app = angular.module("App", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/book", {templateUrl:"partials/allbooks.html", controller:"Controller"})
            .when("/update", {templateUrl:"partials/update.html", controller:"UpdateController"})
            .when("/insert", {templateUrl:"partials/insert.html", controller:"InsertController"})
            .when("/delete", {templateUrl:"partials/deleted.html", controller:"DeleteBookController"})
            .when("/select", {templateUrl:"partials/select.html", controller:"SelectController"})
            .when("/select/:bookId", {templateUrl:"partials/select.html", controller:"SelectController"})
            .otherwise({redirectTo:"/"});
    });
