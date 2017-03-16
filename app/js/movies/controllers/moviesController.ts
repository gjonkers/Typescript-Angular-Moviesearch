/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>

define([], function () {
    interface IRouteParams extends ng.route.IRouteParamsService {
        searchString: any;
    }

    class moviesController {

        static angularDependencies = ['$scope', '$routeParams', 'movieService', moviesController]
        public movieService;
        public errorMessage: string;
        public moviesList: [any];
        public sortType: string;
        public rootScope: ng.IRootScopeService;
        public movieString: string;
        constructor($scope: ng.IScope, $routeParams: IRouteParams, movieService) {
            this.movieString = $routeParams.searchString;
            this.movieService = movieService;
            this.errorMessage = '';
            if (this.movieString === ":") {
                this.errorMessage = "search field can not be empty";
            }
            else {
                this.movieService.searchMovies(this.movieString).then(
                    (res) => {
                        if (res.data.Response === "True") {
                            this.moviesList = res.data.Search;
                        } else {
                            this.errorMessage = res.data.Error;
                        }
                    },
                    (res) => {
                        console.log("failure response  - ", res);
                    }
                );
            }
        }

        public sortMovies(sortorder: any) {
            this.sortType = sortorder;
        }
    }

    return {
        moviesController: moviesController
    }
});