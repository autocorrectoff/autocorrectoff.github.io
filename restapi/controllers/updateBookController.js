app.controller("UpdateBookController", function($scope, $routeParams, BookService, $location) {
	function execute() {
		BookService.get({id: $routeParams.updateId}, function(response) {
			$scope.book = response;
			console.log($scope.data);
		}, function(error) {
			console.log(error);
		});
	}
	execute();
	$scope.updateBook = function() {
		$scope.book.$update(function(response) {
			$location.path("all");
		}, function(error) {
			console.log(error);
		});
	}
});