/// <reference path="../.../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../.../../../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../.../../../../typings/requirejs/index.d.ts" />

require([
    'angular',
    'angular-route',
    'js/movies/controllers/moviesController',
    'js/movies/services/movieService',
    'js/movies/components/movieComponent'
], function (angular, angularroute) {
    angular.module('moviesModule', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/movies', {
                templateUrl: 'js/movies/views/movies.html',
                controller: 'movesCtrl',
                controllerAs: 'mc'
            });
        }]);
});
