'use strict';

// Declare app level module which depends on views, and components
angular.module('movies', [
  'ngRoute',
  'moviesModule',
  'movieDetailModule'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/movies' });
   // $locationProvider.html5Mode(true);
  }]);
