/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>
define([], function () {
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
    return {
        moviesComponent: movieComponent
    };
});
