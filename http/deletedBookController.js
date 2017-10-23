app.controller("DeleteBookController", function($scope, DeletedBook) {
	$scope.bookId = DeletedBook.getId();
});