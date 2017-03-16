/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>
define([], function () {
    var movieService = (function () {
        function movieService($http) {
            this.httpService = $http;
        }
        movieService.prototype.searchMovies = function (movieString) {
            this.movieString = movieString;
            return this.httpService.get("http://www.omdbapi.com/?s=" + movieString);
        };
        movieService.prototype.searchString = function () {
            return this.movieString;
        };
        return movieService;
    }());
    movieService.$inject = ["$http"];
    return {
        movieService: movieService
    };
});
