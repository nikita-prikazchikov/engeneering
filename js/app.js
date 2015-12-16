'use strict';
/**
 * Created by nprikazchikov on 3/2/15.
 */

var engineeringApp = angular.module('engineeringApp',
    [
        'ngRoute',
        'ngResource',
        'engineeringControllers',
        'engineeringServices',
        'pascalprecht.translate']
);

engineeringApp.config(['$routeProvider', '$locationProvider', '$translateProvider', function ($routeProvider, $locationProvider, $translateProvider) {

    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('ru', translationsRU);
    $translateProvider.preferredLanguage('ru');
    $translateProvider.fallbackLanguage('ru');

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main.html',
            controller: 'DefaultController'
        })

        .when('/organize', {
            templateUrl: '/partials/organize.html',
            controller: 'DefaultController'
        })

        .when('/invite', {
            templateUrl: '/partials/invite.html',
            controller: 'DefaultController'
        })

        .when('/program', {
            templateUrl: '/partials/program.html',
            controller: 'ProgramController'
        });

}]);

