'use strict';

app.factory('Post',
  function($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'posts');

    var posts = $firebase(ref);


    // NOTE: Methods called on `posts` come from the angularFire API.
    // https://www.firebase.com/docs/angular/reference.html
    var Post = {
      all: posts,
      create: function(post) {
        // $add:
        // "append this value as a member of a list"
        // "returns a promise that will be fulfilled when the data has been saved to the server"
        return posts.$add(post);
      },
      find: function(postId) {
        // $child:
        // Creates a new $firebase object for a child referenced by the provided key.
        return posts.$child(postId);
      },
      delete: function(postId) {
        // $remove:
        // "will remove the child referenced by that key."
        return posts.$remove(postId);
      }
    };

    return Post;
  }
);