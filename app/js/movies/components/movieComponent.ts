/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>


define([], function() {
    class movieComponent {
        public bindings: any;
        public controller: any;
        public controllerAs: string;
        public templateUrl: string;

        constructor() {
            this.bindings = {
                movie: '='
            };
            this.controller = movieComponentController;
            this.controllerAs = 'mcc';
            this.templateUrl = 'js/movies/components/movieComponent.html';
        }
    }

    class movieComponentController {
        public movie: any;
        constructor() { };
    }

    return {
        moviesComponent: movieComponent
    }
});