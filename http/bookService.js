/**
 * Created by Aladeen on 25.9.2017..
 */
app.factory("BookService", function ($http, $q) {
        return{
            getAllBooks: function () {
                var deferred = $q.defer();
                $http.get("http://madhatter.heliohost.org/books").then(function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            postBook: function (book) {
                var deferred = $q.defer();
                $http.post("http://madhatter.heliohost.org/books", book).then(function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            },
            putBook: function (book) {
            	var deferred = $q.defer();
                $http.put("http://madhatter.heliohost.org/books", book).then(function (response) {
                	deferred.resolve(response);
                }, function (error) {
                	deferred.reject(error);
                });
                return deferred.promise;
            },
            deleteBook: function(id) {
            	var deferred = $q.defer();
				$http.delete("http://madhatter.heliohost.org/books/"+id).then(function(response) {
					deferred.resolve(response);
				}, function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			},
            getBookById: function(id) {
            	var deferred = $q.defer();
                $http.get("http://madhatter.heliohost.org/books/"+id).then(function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
			}

        }
});
