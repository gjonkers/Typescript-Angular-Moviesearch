/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

class moviesController {

    static angularDependencies = ['$scope', 'movieService', moviesController]
    public movieService;
    public errorMessage: string;
    public moviesList: [any];
    constructor($scope: ng.IScope, movieService) {
        this.movieService = movieService;
    }

    public searchMovies(movieString) {
        if (typeof movieString === "undefined") {
            this.errorMessage = 'Movie Name Should not be undefined';
        } else {
            this.errorMessage = '';
            this.movieService.searchMovies(movieString).then(
                (res) => {
                    console.log("success response  - ", res);
                    if(res.data.Response === "True") {
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

}


// Register the controller with Angular
angular.module('moviesModule').controller('movesCtrl', moviesController.angularDependencies);