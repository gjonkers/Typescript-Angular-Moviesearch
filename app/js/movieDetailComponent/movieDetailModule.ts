/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
angular.module('movieDetailModule', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movie-detail:id', {
            templateUrl: 'js/movieDetailComponent/views/movieDetail.html',
            controller: 'movieDetailController',
            controllerAs: 'mdc'
        });
    }]);
