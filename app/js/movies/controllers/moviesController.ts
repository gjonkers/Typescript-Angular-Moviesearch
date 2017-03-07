/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

class moviesController {

    static angularDependencies = ['$scope', 'movieService', moviesController]
    public movieService;
    public moviesList:[];
    constructor($scope: ng.IScope, movieService) {
        this.movieService = movieService;
    }

    public searchMovies(movieString) {
        console.log("search triggered in controller");
        this.movieService.searchMovies(movieString).then(
            (res)=>{
                console.log("success response  - ",res);
                this.moviesList = res.data.Search;
            },
            (res)=>{
                console.log("failure response  - ",res);
            }
        );
    }

}


// Register the controller with Angular
angular.module('moviesModule').controller('movesCtrl', moviesController.angularDependencies);