/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../../typings/requirejs/index.d.ts"/>

define([], function () {

    interface IRouteParams extends ng.route.IRouteParamsService {
        searchString: string;
    }

    class mainController {
        static angularDependencies = ['$scope', '$routeParams', '$location', '$timeout', mainController];
        public movieString: string;
        public searchString: string;
        public scope: ng.IScope;
        public timeout: ng.ITimeoutService;
        public location: ng.ILocationService;
        constructor($scope: ng.IScope, $routeParams: IRouteParams, private $location: ng.ILocationService, $timeout: ng.ITimeoutService) {
            this.scope = $scope;
            this.scope.main = this;
            this.location = $location;
            this.timeout = $timeout;
            this.scope.$on('$routeChangeSuccess', () => {
                this.searchString = $routeParams.searchString;
                if (typeof this.movieString === "undefined" && this.searchString) {
                    this.movieString = this.searchString.replace(":","");
                }
            });

        }

        public searchMovies(movieString: string) {
            this.movieString = movieString;
            if (typeof this.movieString === "undefined" || this.movieString === "") {
                this.movieString = "";
            }
            this.location.url('/movies:' + this.movieString);
        }

    }

    return {
        mainController: mainController
    }
});