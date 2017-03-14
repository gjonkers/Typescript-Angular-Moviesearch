/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>
define([], function () {
    var moviesController = (function () {
        function moviesController($scope, $rootScope, movieService) {
            this.movieService = movieService;
            this.rootScope = $rootScope;
            if (this.rootScope.movielist) {
                this.moviesList = this.rootScope.movielist;
                this.movieString = this.rootScope.searchString;
            }
        }
        moviesController.prototype.searchMovies = function (movieString) {
            var _this = this;
            if (typeof movieString === "undefined" || movieString === "") {
                this.errorMessage = 'Movie Name should not be empty';
            }
            else {
                this.errorMessage = '';
                this.movieService.searchMovies(movieString).then(function (res) {
                    if (res.data.Response === "True") {
                        _this.moviesList = res.data.Search;
                        _this.rootScope.searchString = movieString;
                        _this.rootScope.movielist = res.data.Search;
                    }
                    else {
                        _this.errorMessage = res.data.Error;
                    }
                }, function (res) {
                    console.log("failure response  - ", res);
                });
            }
        };
        moviesController.prototype.sortMovies = function (sortorder) {
            if (this.moviesList) {
                this.sortType = sortorder;
            }
            else {
                this.errorMessage = 'You need somthing to sort :P';
            }
        };
        return moviesController;
    }());
    moviesController.angularDependencies = ['$scope', 'movieService', moviesController];
    return {
        moviesController: moviesController
    };
});
