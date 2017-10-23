app.factory("DeletedBook", function() {
	var id = 0;
	return{
		setId: function(deletedBookId) {
			id = deletedBookId;
		},
		getId: function() {
			return id;
		}
	}
});