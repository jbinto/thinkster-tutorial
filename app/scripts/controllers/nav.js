'use strict';

app.controller('NavCtrl', function($scope, $location, Post, Auth) {

  $scope.post = { url: 'http://', title: '' };

  $scope.submitPost = function() {
    Post.create($scope.post).then(function(ref) {
      $location.path('/posts/' + ref.name());
    });
  };

  $scope.logout = function() {
    Auth.logout();
  };

}); /* app */