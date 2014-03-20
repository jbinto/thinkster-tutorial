'use strict';

app.controller('PostsCtrl', function($scope, Post) {
  $scope.posts = Post.get();

  // "Empty" post. Will be used for in the <form> tag.
  $scope.post = { url: 'http://', title: '' };

  $scope.submitPost = function() {
    Post.save($scope.post, function(ref) {
      console.log(ref);
      console.log(ref.name);
      $scope.posts[ref.name] = $scope.post

      // DRY!
      $scope.post = { url: 'http://', title: '' };
    });

    // DRY? Where would we keep this "blank" template?
    $scope.post = { url: 'http://', title: '' };
  };

  $scope.deletePost = function(index) {
    $scope.posts.splice(index, 1);
  };
});

  