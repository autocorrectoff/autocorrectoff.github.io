/**
 * Created by Aladeen on 28.9.2017..
 */
app.factory("BookService", function ($resource) {
            return $resource("http://madhatter.heliohost.org/books/:id", null, {'update':{method:'PUT'}});
});