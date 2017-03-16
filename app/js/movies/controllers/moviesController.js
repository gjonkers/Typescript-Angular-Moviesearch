/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>
define([], function () {
    var moviesController = (function () {
        function moviesController($scope, $routeParams, movieService) {
            var _this = this;
            this.movieString = $routeParams.searchString;
            this.movieService = movieService;
            this.errorMessage = '';
            if (this.movieString === ":") {
                this.errorMessage = "search field can not be empty";
            }
            else {
                this.movieService.searchMovies(this.movieString).then(function (res) {
                    if (res.data.Response === "True") {
                        _this.moviesList = res.data.Search;
                    }
                    else {
                        _this.errorMessage = res.data.Error;
                    }
                }, function (res) {
                    console.log("failure response  - ", res);
                });
            }
        }
        moviesController.prototype.sortMovies = function (sortorder) {
            this.sortType = sortorder;
        };
        return moviesController;
    }());
    moviesController.angularDependencies = ['$scope', '$routeParams', 'movieService', moviesController];
    return {
        moviesController: moviesController
    };
});
