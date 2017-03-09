//Define AMD module
define(['angular'], function (angular) {
    var App = angular.module('movies', [
        'ngRoute'
    ]);

    return {
        App: App
    }
});