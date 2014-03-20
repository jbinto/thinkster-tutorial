'use strict';

app.controller('PostsCtrl', function($scope, Post) {

  $scope.posts = Post.all;

  // "Empty" post. Will be used for in the <form> tag.
  $scope.post = { url: 'http://', title: '' };

  $scope.submitPost = function() {
    Post.create($scope.post).then(function() {
      $scope.post = { url: 'http://', title: '' };
    });
  };

  $scope.deletePost = function(postId) {
    Post.delete(postId);
  };

}); /* app */