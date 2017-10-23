/**
 * Created by Aladeen on 27.9.2017..
 */
app.controller("InsertController", function ($scope, BookService) {
    $scope.postBook = function (entry, form) {
        if(form.$valid){
            entry.id = 0;
            BookService.postBook(entry).then(function (response) {
            }, function(error){
                console.log(error);
            });
        }
    }
});
