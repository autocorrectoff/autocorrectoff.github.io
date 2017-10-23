app.controller("UpdateController", function($scope, BooksUpdate, BookService) {
	$scope.putBook = function (book) {
        BookService.putBook(book).then(function (response) {
        }, function(error){
            console.log(error);
        });
    }
	function onChange() {
		$scope.book = BooksUpdate.getBookToUpdate();
		console.log($scope.book);
		return $scope.book;
	}
	onChange();
});