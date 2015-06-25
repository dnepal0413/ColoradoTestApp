'use strict';


// Declare app level module which depends on filters, and services
angular.module('Application1', [
        'ngRoute',
        'Application1.services',
        'Application1.controllers',
	    'dx'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })
            .when('/denver', {
                templateUrl: 'partials/denver.html',
                controller: 'DenverCtrl',
                controllerAs: 'denver'
            })
            .when('/boulder', {
                templateUrl: 'partials/boulder.html',
                controller: 'BoulderCtrl',
                controllerAs: 'boulder'
            })
            .when('/estespark', {
                templateUrl: 'partials/estespark.html',
                controller: 'EstesCtrl',
                controllerAs: 'estespark'
            })
            .when('/rockymountain', {
                templateUrl: 'partials/rockymountain.html',
                controller: 'RockyCtrl',
                controllerAs: 'rockymountain'
            })
            .otherwise({ redirectTo: '/home' });
    }]);
