'use strict';

app.controller('PostsCtrl', function($scope, Post) {
  
  $scope.posts = Post.get();

  // "Empty" post. Will be used for in the <form> tag.
  $scope.post = { url: 'http://', title: '' };

  $scope.submitPost = function() {
    Post.save($scope.post, function(ref) {
      console.log(ref);
      console.log(ref.name);
      $scope.posts[ref.name] = $scope.post;

      // DRY!
      $scope.post = { url: 'http://', title: '' };
    });

    // DRY? Where would we keep this "blank" template?
    $scope.post = { url: 'http://', title: '' };
  };

  $scope.deletePost = function(postId) {
    Post.delete({id: postId}, function() {
      // JavaScript `delete` keyword:
      //  "The delete operator removes a property from an object."
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
      delete $scope.posts[postId];
    });
  }; /* function */

}); /* app */

  