/* global app:true */

'use strict';

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/posts/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .when('/posts/:postId', {
      templateUrl: 'views/showpost.html',
      controller: 'PostViewCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'AuthCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthCtrl'
    })
    .when('/', {
      redirectTo: '/posts'
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
});

app.constant('FIREBASE_URL',
  'https://vivid-fire-1631.firebaseio.com/');