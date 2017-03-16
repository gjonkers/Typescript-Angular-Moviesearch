/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>
define([], function (moviesService) {
    var movieComponent = (function () {
        function movieComponent() {
            this.bindings = {
                movie: '=',
                search: '='
            };
            this.controller = movieComponentController;
            this.controllerAs = 'mcc';
            this.templateUrl = 'js/movies/components/movieComponent.html';
        }
        return movieComponent;
    }());
    var movieComponentController = (function () {
        function movieComponentController() {
            this.search = this.search.replace(":", "");
        }
        ;
        return movieComponentController;
    }());
    return {
        moviesComponent: movieComponent
    };
});
