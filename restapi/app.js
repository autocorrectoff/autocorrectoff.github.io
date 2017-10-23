/**
 * Created by Aladeen on 28.9.2017..
 */
var app = angular.module("App", ["ngRoute", "ngResource"]);
    app.config(function ($routeProvider) {
    $routeProvider.when("/all", {templateUrl:"partials/allbooks.html", controller:"Controller"})
    .when("/addbook", {templateUrl:"partials/add.html", controller:"Controller"})
    .when("/added", {template:"successfully added to database", controller:"Controller"})
    .when("/book/:id", {templateUrl:"partials/book.html", controller:"SingleBookController"})
    .when("/update/:updateId", {templateUrl:"partials/updateBook.html", controller:"UpdateBookController"});
});
    
