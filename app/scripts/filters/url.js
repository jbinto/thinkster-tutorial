'use strict';

app.filter('hostnameFromUrl', function () {
  return function(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
  };
});
