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
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    });
});

app.constant('FIREBASE_URL',
  'https://vivid-fire-1631.firebaseio.com/');