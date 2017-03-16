/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/requirejs/index.d.ts"/>
define([], function () {
    var mainController = (function () {
        function mainController($scope, $routeParams, $location, $timeout) {
            var _this = this;
            this.$location = $location;
            this.scope = $scope;
            this.scope.main = this;
            this.location = $location;
            this.timeout = $timeout;
            this.scope.$on('$routeChangeSuccess', function () {
                _this.searchString = $routeParams.searchString;
                if (typeof _this.movieString === "undefined" && _this.searchString) {
                    _this.movieString = _this.searchString.replace(":", "");
                }
            });
        }
        mainController.prototype.searchMovies = function (movieString) {
            this.movieString = movieString;
            if (typeof this.movieString === "undefined" || this.movieString === "") {
                this.movieString = "";
            }
            this.location.url('/movies:' + this.movieString);
        };
        return mainController;
    }());
    mainController.angularDependencies = ['$scope', '$routeParams', '$location', '$timeout', mainController];
    return {
        mainController: mainController
    };
});
