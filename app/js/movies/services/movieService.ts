/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../../typings/requirejs/index.d.ts"/>

define([], function () {
    interface IMovie {
        searchMovies(movieString: string): ng.IPromise<{}>;
    }

    class movieService implements IMovie {
        static $inject = ["$http"];
        public httpService: ng.IHttpService;
        public movieString:string;
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        searchMovies(movieString: string): ng.IPromise<{}> {
            this.movieString = movieString;
            return this.httpService.get("http://www.omdbapi.com/?s=" + movieString);
        }

        public searchString() {
            return this.movieString;
        }

    }
    return {
        movieService: movieService
    }
});