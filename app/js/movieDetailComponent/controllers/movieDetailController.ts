/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings/angularjs/angular-route.d.ts" />

define([], function () {
    interface IRouteParams extends ng.route.IRouteParamsService {
        id: any;
    }
    class movieDetailController {
        static angularDependencies = ['$scope', '$routeParams', '$location', '$http', movieDetailController];
        public id: any;
        public searchString: string;
        public movieDetails: any;
        public location:ng.ILocationService;
        constructor($scope: ng.IScope, $routeParams: IRouteParams, private $location: ng.ILocationService, $http: ng.IHttpService) {
            this.id = $routeParams.id.split(":")[2];
            this.searchString = $routeParams.id.split(":")[1];
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