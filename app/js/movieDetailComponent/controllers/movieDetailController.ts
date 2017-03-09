/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

define([], function () {
    interface IRouteParams extends ng.route.IRouteParamsService {
        id: string;
    }
    class movieDetailController {
        static angularDependencies = ['$scope', '$routeParams', '$location', '$http', movieDetailController];
        public id: string;
        public movieDetails: any;
        constructor($scope: ng.IScope, $routeParams: IRouteParams, private $location: ng.ILocationService, $http: ng.IHttpService) {
            this.id = $routeParams.id.replace(":", "");
            $http.get("http://www.omdbapi.com/?i=" + this.id).then(
                (res) => {
                    this.movieDetails = res.data;
                }
            );
        }

    }

    return {
        movieDetailController: movieDetailController
    }
});