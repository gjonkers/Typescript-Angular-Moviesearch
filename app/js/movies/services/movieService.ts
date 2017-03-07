/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

class movieService {
    static $inject = ["$http"];
    public httpService: ng.IHttpService;
    constructor($http: ng.IHttpService) {
        this.httpService = $http;
    }

    public searchMovies(movieString) {
        console.log("search triggered");
        return this.httpService.get("http://www.omdbapi.com/?s=" + movieString);
    }

}


// Register the controller with Angular
angular.module('moviesModule').service('movieService',movieService);