/// <reference path="../../../../typings/angularjs/angular.d.ts" />
var movieComponent = (function () {
    function movieComponent() {
        this.bindings = {
            movie: '='
        };
        this.controller = movieComponentController;
        this.controllerAs = 'mcc';
        this.templateUrl = 'js/movies/components/movieComponent.html';
    }
    return movieComponent;
}());
var movieComponentController = (function () {
    function movieComponentController($http) {
        this.httpService = $http;
    }
    return movieComponentController;
}());
movieComponentController.$inject = ["$http"];
angular.module('moviesModule').component('movieComponent', new movieComponent());
