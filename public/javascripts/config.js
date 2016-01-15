/**
 * Created by alexandr on 15.01.2016.
 */
'use strict';

// Declare app level module which depends on filters, and services
angular.module('fitness.config', [])

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })

            .when('/signin', {
                templateUrl: 'views/home.html'
            })

            .when('/signup', {
                templateUrl: 'views/signup.html'
            })

            .when('/groups', {
                templateUrl: 'views/groups.html',
                authRequired: true
            })
            .when('/new-group',{
                templateUrl: 'views/new-group.html',
                authRequired: true
            })

            .when('/:groupId/edit-group',{
                templateUrl: 'views/edit-group.html',
                authRequired: true
            })

            .when('/:groupId/new-exercise/:exerciseCount',{
                templateUrl: 'views/new-exercise.html',
                authRequired: true
            })

            .when('/new-exercise2',{
                templateUrl: 'views/new-exercise.html',
            })

