'use strict';

app.factory('Auth',
  function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseSimpleLogin(ref);

    var Auth = {
      register: function(user) {
        return auth.$createUser(user.email, user.password);
      },
      signedIn: function() {
        var rv = auth.user !== null;
        console.log('signed in? ' + rv);
        return rv;
      },
      login: function (user) {
        return auth.$login('password', user);
      },
      logout: function() {
        auth.$logout();
      }
    };

    $rootScope.signedIn = function() {
      return Auth.signedIn();
    };

    return Auth;
  }
);
