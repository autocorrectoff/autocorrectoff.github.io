/**
 * Created by Aladeen on 25.9.2017..
 */
app.controller("Controller", function ($scope, BookService, $routeParams, $window, BooksUpdate, DeletedBook){
    function parse() {
        BookService.getAllBooks().then(function (response) {
            $scope.books = response.data;
        }, function (error) {
            console.log(error);
        });
    }

    $scope.update = function (title, author, synopsis, id) {
    	BooksUpdate.addBook(title, author, synopsis, id);
        $window.location.assign("#!/update");
    }
    
    $scope.deleteBook = function(id) {
    	
    	BookService.deleteBook(id).then(function (response) {
        }, function (error) {
            console.log(error);
        });
		DeletedBook.setId(id);
		$window.location.assign("#!/delete");
	}
    
    parse();


});
