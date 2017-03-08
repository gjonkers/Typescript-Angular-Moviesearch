/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/requirejs/index.d.ts" />

require.config({
    baseUrl: '/',
    paths: {
        'jquery': "bower_components/jQuery/dist/jquery",
        'angular': "bower_components/angular/angular",
        'angular-route': "bower_components/angular-route/angular-route",
        'bootstrap': "bower_components/bootstrap/dist/js/bootstrap",
        'application': "application",
        "routes": "routes"
    },
    shim: {
        'jquery': { exports: 'jquery' },
        'angular': { exports: 'angular', deps: ['jquery'] },
        'angular-route': { exports: 'angular-route', deps: ['angular'] }
    }
});

require([
    'angular', 'angular-route', 'application'
], function (angular) {

    // angular.module('movies', [
    //     'ngRoute',
    //     'moviesModule'
    // ]).
    //     config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    //         $locationProvider.hashPrefix('!');
    //         $routeProvider.otherwise({ redirectTo: '/movies' });
    //     }]);

    var elem = document.getElementsByName("html")[0];
    angular.bootstrap(elem, ['movies']);

    
});