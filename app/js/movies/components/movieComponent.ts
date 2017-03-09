/// <reference path="../../../../typings/angularjs/angular.d.ts" />


class movieComponent {
    public bindings: any;
    public controller: any;
    public controllerAs: string;
    public templateUrl: string;
    constructor() {
        this.bindings = {
            movie: '='
        };
        this.controller = movieComponentController;
        this.controllerAs = 'mcc';
        this.templateUrl = 'js/movies/components/movieComponent.html';
    }
}

class movieComponentController {

    static $inject = ["$http"];
    public movie:any;
    public movieDetails: any;
    public a:any;
    public b:any;
    public httpService: ng.IHttpService;
    constructor($http: ng.IHttpService) {
        this.httpService = $http;
    }
}

angular.module('moviesModule').component('movieComponent', new movieComponent());