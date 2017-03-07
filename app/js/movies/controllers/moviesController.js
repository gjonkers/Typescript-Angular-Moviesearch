/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
var moviesController = (function () {
    function moviesController($scope, movieService) {
        this.movieService = movieService;
    }
    moviesController.prototype.searchMovies = function (movieString) {
        var _this = this;
        console.log("search triggered in controller");
        this.movieService.searchMovies(movieString).then(function (res) {
            console.log("success response  - ", res);
            _this.moviesList = res.data.Search;
        }, function (res) {
            console.log("failure response  - ", res);
        });
    };
    return moviesController;
}());
moviesController.angularDependencies = ['$scope', 'movieService', moviesController];
// Register the controller with Angular
angular.module('moviesModule').controller('movesCtrl', moviesController.angularDependencies);
