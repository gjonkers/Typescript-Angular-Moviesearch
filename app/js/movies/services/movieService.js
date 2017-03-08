/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>
require(['angular'], function (angular) {
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
});
