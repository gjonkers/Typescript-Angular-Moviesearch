/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

class moviesController {

    static angularDependencies = ['$scope', 'movieService', moviesController]
    public movieService;
    public errorMessage: string;
    public moviesList: [any];
    public sortType: string;
    public movieDetails:any;
    constructor($scope: ng.IScope, movieService) {
        this.movieService = movieService;
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
        if (this.moviesList === undefined) {
            this.errorMessage = 'You need something to sort :P';
        }
        else {
            this.errorMessage = '';
            this.sortType = sortorder;
        }

    }

}



// Register the controller with Angular
angular.module('moviesModule').controller('movesCtrl', moviesController.angularDependencies);