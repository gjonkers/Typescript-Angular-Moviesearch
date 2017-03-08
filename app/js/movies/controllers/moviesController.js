/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
var moviesController = (function () {
    function moviesController($scope, movieService) {
        this.movieService = movieService;
    }
    moviesController.prototype.searchMovies = function (movieString) {
        var _this = this;
        if (typeof movieString === "undefined") {
            this.errorMessage = 'Movie Name Should not be undefined';
        }
        else {
            this.errorMessage = '';
            this.movieService.searchMovies(movieString).then(function (res) {
                console.log("success response  - ", res);
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
    };
    return moviesController;
}());
moviesController.angularDependencies = ['$scope', 'movieService', moviesController];
// Register the controller with Angular
angular.module('moviesModule').controller('movesCtrl', moviesController.angularDependencies);
