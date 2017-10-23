app.factory("BooksUpdate", function() {
	var book = {};
	return{
		addBook: function(title, author, synopsis, id) {
			book.id=id;
			book.title=title;
			book.author=author;
			book.synopsis=synopsis;
		},
		getBookToUpdate: function() {
			return book;
		}
	}
});
