'use strict';

app.controller('PostsCtrl', function($scope) {
  $scope.posts = [];

  // "Empty" post. Will be used for in the <form> tag.
  $scope.post = { url: 'http://', title: '' };

  $scope.submitPost = function() {
    // $scope.post is "updated" in real-time, i.e. two-way binding.
    $scope.posts.push($scope.post);
    $scope.post = { url: 'http://', title: '' };
  };
});

