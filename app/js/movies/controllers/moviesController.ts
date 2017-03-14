/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>

define([], function () {
    class moviesController {

        static angularDependencies = ['$scope', 'movieService', moviesController]
        public movieService;
        public errorMessage: string;
        public moviesList: [any];
        public sortType: string;
        public rootScope:ng.IRootScopeService;
        public movieString:string;
        constructor($scope: ng.IScope, $rootScope:ng.IRootScopeService, movieService) {
            this.movieService = movieService;
            this.rootScope = $rootScope;
            if(this.rootScope.movielist){
                this.moviesList = this.rootScope.movielist;
                this.movieString = this.rootScope.searchString;
            }
        }

        public searchMovies(movieString: any) {
            if (typeof movieString === "undefined" || movieString === "") {
                this.errorMessage = 'Movie Name should not be empty';
            } else {
                this.errorMessage = '';
                this.movieService.searchMovies(movieString).then(
                    (res) => {
                        if (res.data.Response === "True") {
                            this.moviesList = res.data.Search;
                            this.rootScope.searchString = movieString;
                            this.rootScope.movielist = res.data.Search;
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
            if(this.moviesList){
                this.sortType = sortorder;
            }
            else {
                this.errorMessage = 'You need somthing to sort :P';
            }
            
        }

    }

    return {
        moviesController: moviesController
    }
});