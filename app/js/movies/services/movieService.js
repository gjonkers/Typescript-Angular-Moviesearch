/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
var movieService = (function () {
    function movieService($http) {
        this.httpService = $http;
    }
    movieService.prototype.searchMovies = function (movieString) {
        console.log("search triggered");
        return this.httpService.get("http://www.omdbapi.com/?s=" + movieString);
    };
    return movieService;
}());
movieService.$inject = ["$http"];
// Register the controller with Angular
angular.module('moviesModule').service('movieService', movieService);
