'use strict';

app.controller('AuthCtrl',
  function ($scope, $location, Auth) {
    if (Auth.signedIn()) {
      $location.path('/');
    }

    $scope.$on('$firebaseSimpleLogin:login', function() {
      $location.path('/');
    });

    $scope.login = function() {
      Auth.login($scope.user).then(function() {
        $location.path('/');
      });
    };

    $scope.register = function() {
      Auth.register($scope.user).then(function(authUser) {
        console.log(authUser);
        $location.path('/');
      });
    };
  }
);
