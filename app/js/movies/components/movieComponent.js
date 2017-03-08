/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>
require(['angular'], function (angular) {
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
        function movieComponentController() {
        }
        ;
        return movieComponentController;
    }());
    angular.module('moviesModule').component('movieComponent', new movieComponent());
});
