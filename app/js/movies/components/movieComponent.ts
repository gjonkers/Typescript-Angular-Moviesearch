/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>


define([], function (moviesService) {
    class movieComponent {
        public bindings: any;
        public controller: any;
        public controllerAs: string;
        public templateUrl: string;
        public searchString:string;

        constructor() {
            this.bindings = {
                movie: '=',
                search:'='
            };
            this.controller = movieComponentController;
            this.controllerAs = 'mcc';
            this.templateUrl = 'js/movies/components/movieComponent.html';
        }
    }

    class movieComponentController {
        public movie: any;
        public search:any;
        constructor() {
            this.search = this.search.replace(":","");
        };
    }

    return {
        moviesComponent: movieComponent
    }
});