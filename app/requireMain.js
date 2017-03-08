require.config({
    baseUrl: './',
    paths: {
        'jquery': "bower_components/jQuery/dist/jquery",
        'angular': "bower_components/angular/angular",
        "angular-route": "bower_components/angular-route/angular-route",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap",
        "application": "application",
        "routes": "routes"
    }
});

// This is boilerplate
require( [
    'angular',
    'application'
], function(angular, application) {
        var elem = document.getElementsByName("html")[0];
        angular.bootstrap(elem, ['moviesmovies']);
});

