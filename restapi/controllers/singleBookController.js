app.controller("SingleBookController", function($scope, $routeParams, BookService, $location) {
	var fill = function() {
		BookService.get({id: $routeParams.id}, function(response) {
		$scope.booksById = response;
		}, function(error) {
			console.log(error);
		});
	}
	fill();
	$scope.deleteBook = function(bookId) {
    	$scope.book = new BookService();
    	$scope.book.$delete({id: bookId}, function(response) {
    		console.log(response);
    		$location.path("all");
		}, function(error) {
			console.log(error);
		});
	}
	$scope.goToUpdate = function(id){
		$location.path("update/"+id);
	}
});