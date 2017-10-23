app.controller("SelectController", function($scope, BookService) {
	$scope.lenght = [];
	function onLoad() {
		for(var i=1; i<=50; i++){
			$scope.lenght.push(i);
		}
	}
	onLoad();
	$scope.selectedId = function(id) {
		BookService.getBookById(id).then(function(response) {
			$scope.book = response.data;
		}, function(error) {
			console.log(error);
		});
	}
});