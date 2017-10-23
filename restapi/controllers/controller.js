/**
 * Created by Aladeen on 28.9.2017..
 */
app.controller("Controller", function ($scope, BookService, $location, $route) {
	var books = BookService;
    function runAll() {
        books.query(function (response) {
            $scope.data = response;
        }, function (error) {
            console.log(error);
        });
    }
    runAll();
    $scope.addBook = function(book) {
    	book.id = 0;
		BookService.save(book, function(response) {
			console.log(response);
			$location.path("added");
		}, function(error) {
			console.log(error);
		});
	}
    
    $scope.redirect = function(id) {
		$location.path("book/"+id);
	}
    
});
