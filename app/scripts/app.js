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
    .otherwise({
      redirectTo: '/posts'
    });
});

app.constant('FIREBASE_URL',
  'https://vivid-fire-1631.firebaseio.com/');