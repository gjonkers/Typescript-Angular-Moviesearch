/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/requirejs/index.d.ts" />

require.config({
    baseUrl: '/app',
    paths: {
        'jquery': "bower_components/jQuery/dist/jquery",
        'angular': "bower_components/angular/angular",
        "angular-route": "bower_components/angular-route/angular-route",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap",
        "application": "application",
        "routes": "routes"
    }
});

require([
    'angular', 'application'
], function (angular, application) {
    var elem = document.getElementsByName("html")[0];
    angular.bootstrap(elem, ['moviesmovies']);

    angular.module('movies', [
        'ngRoute',
        'moviesModule'
    ]).
        config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({ redirectTo: '/movies' });
        }]);
});