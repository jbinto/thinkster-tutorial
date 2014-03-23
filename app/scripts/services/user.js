'use strict';

app.service('User', function($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL + 'users');

  var users = $firebase(ref);

  var User = {
    create: function(authUser, username) {
      /*jshint camelcase: false */
      users[username] = {
        md5Hash: authUser.md5_hash,
        username: username,
        $priority: authUser.uid   // firebase specific: like PK
      };

      users.$save(username);
    }
  };

  return User;
});
