/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/requirejs/index.d.ts" />

require.config({
    baseUrl: '/',
    paths: {
        'jquery': "bower_components/jQuery/dist/jquery",
        'angular': "bower_components/angular/angular",
        'angular-route': "bower_components/angular-route/angular-route",
        'bootstrap': "bower_components/bootstrap/dist/js/bootstrap"
    },
    shim: {
        'jquery': { exports: 'jquery' },
        'angular': { exports: 'angular', deps: ['jquery'] },
        'angular-route': { exports: 'angular-route', deps: ['angular'] }
    }
});

define(['angular', "app", 'angular-route', 'js/movies/controllers/moviesController', 'js/movies/services/movieService', 'js/movies/components/movieComponent'
], function (angular, App, angularRoute, moviesController, moviesService, moviesComponent) {

    var moviesApp = App.App;
    moviesApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({ redirectTo: '/movies' });
    }]);

    angular.element().ready(function () {
        angular.bootstrap(document, ['movies']);

    });
    moviesApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movies', {
            templateUrl: 'js/movies/views/movies.html',
            controller: 'movesCtrl',
            controllerAs: 'mc'
        });
    }]);

    moviesApp.controller('movesCtrl', moviesController.moviesController);
    moviesApp.service('movieService', moviesService.movieService);
    moviesApp.component('movieComponent', new moviesComponent.moviesComponent());
});