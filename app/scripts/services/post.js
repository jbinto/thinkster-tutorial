'use strict';

app.factory('Post', function($resource) {
  return $resource('https://vivid-fire-1631.firebaseio.com/posts/:id.json');
});