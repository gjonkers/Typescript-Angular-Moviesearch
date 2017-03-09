/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
var movieDetailController = (function () {
    function movieDetailController($scope, $routeParams, $location, $http) {
        var _this = this;
        this.$location = $location;
        this.id = $routeParams.id.replace(":", "");
        console.log("id - ", this.id);
        $http.get("http://www.omdbapi.com/?i=" + this.id).then(function (res) {
            _this.movieDetails = res.data;
            console.log("movie - ", _this.movieDetails);
        });
    }
    return movieDetailController;
}());
movieDetailController.angularDependencies = ['$scope', '$routeParams', '$location', '$http', movieDetailController];
angular.module('moviesModule').controller('movieDetailController', movieDetailController.angularDependencies);
