/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/requirejs/index.d.ts" />
require([
    'angular', 'application'
], function (angular, application) {
    var elem = document.getElementsByName("html")[0];
    angular.bootstrap(elem, ['moviesmovies']);
});
