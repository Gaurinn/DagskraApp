angular.module('tvApp')
    .config(function ($routeProvider) {
        $routeProvider.when('/tv/:channel', {
            templateUrl: '/templates/ruv/ruv.html',
            controller: 'ruvController'
        })
        .when('/', {
            templateUrl: '/templates/home/home.html',
            controller: 'homeController'
        })
        .otherwise({ redirectTo: '/' });
    });