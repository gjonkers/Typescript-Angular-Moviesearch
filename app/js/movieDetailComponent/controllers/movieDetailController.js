/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
define([], function () {
    var movieDetailController = (function () {
        function movieDetailController($scope, $routeParams, $location, $http) {
            var _this = this;
            this.$location = $location;
            this.id = $routeParams.id.replace(':', '');
            $http.get("http://www.omdbapi.com/?i=" + this.id).then(function (res) {
                _this.movieDetails = res.data;
            });
        }
        return movieDetailController;
    }());
    movieDetailController.angularDependencies = ['$scope', '$routeParams', '$location', '$http', movieDetailController];
    return {
        movieDetailController: movieDetailController
    };
});
