'use strict';

app.service('User', function($firebase, FIREBASE_URL, $rootScope) {
  var ref = new Firebase(FIREBASE_URL + 'users');

  var users = $firebase(ref);

  var User = {
    create: function(authUser, username) {
      /*jshint camelcase: false */
      users[username] = {
        md5Hash: authUser.md5_hash,   // for Gravatar
        username: username,
        $priority: authUser.uid   // firebase specific: like PK
      };

      users.$save(username).then(function () {
        setCurrentUser(username);
      });
    },

    findByUsername: function(username) {
      if (username) {
        // $child returns all child objects of 'users' collection
        // Remember, this is a JSON database
        return users.$child(username);
      }
    },

    signedIn: function() {
      return $rootScope.currentUser !== undefined;
    },

    getCurrent: function() {
      return $rootScope.currentUser;
    }
  };

  function setCurrentUser(username) {
    // Get the User object corresponding to 'username',
    // and assign it globally to the root scope
    console.log('looking for user ' + username);
    var user = User.findByUsername(username);
    console.log(user);
    $rootScope.currentUser = user;
  }

  // Handle login events from Firebase
  $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
    console.log('welcome! you gave me:');
    console.log(user);

    // Grab the user by uid (awkward)
    var query = $firebase(ref.startAt(user.uid).endAt(user.uid));
    console.log('executed query!');

    // When query returns a result, set the current user
    query.$on('loaded', function() {
      var username = query.$getIndex()[0];
      console.log('query returned: ' + username);
      setCurrentUser(username);
    });
  });

  // Remove user from scope when Firebase logs us out
  $rootScope.$on('$firebaseSimpleLogin:logout', function(e, user) {
    console.log('bye!');
    console.log(user);
    delete $rootScope.currentUser;
  });

  return User;
});
