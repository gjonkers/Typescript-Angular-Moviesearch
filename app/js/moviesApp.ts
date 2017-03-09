//Define Movies AMD module
define(['angular'], function (angular) {
    var moviesApp = angular.module('moviesModule').config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/movies', {
            templateUrl: 'js/movies/views/movies.html',
            controller: 'movesCtrl',
            controllerAs: 'mc'
        });
    }]);

    return {
        moviesApp: moviesApp
    }
});