/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

interface IMovie {
    searchMovies(movieString: string): ng.IPromise<{}>; 
}

class movieService implements IMovie  {
    static $inject = ["$http"];
    public httpService: ng.IHttpService;
    constructor($http: ng.IHttpService) {
        this.httpService = $http;
    }

    searchMovies(movieString:string) : ng.IPromise<{}> {
        console.log("search triggered");
        return this.httpService.get("http://www.omdbapi.com/?s=" + movieString);
    }

}

// Register the controller with Angular
angular.module('moviesModule').service('movieService',movieService);