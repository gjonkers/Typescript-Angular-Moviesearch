
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/requirejs/index.d.ts" />
require([
    'angular', 'angular-route', 'js/movies/moviesModule'
], function (angular) {
    angular.module('movies', [
        'ngRoute',
        'moviesModule'
    ]).
        config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({ redirectTo: '/movies' });
        }]);

    // var elem = document.getElementsByName("html")[0];
    // angular.bootstrap(elem, ['movies']);
});