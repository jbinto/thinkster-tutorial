'use strict';

describe('Filter: hostnameFromUrl', function () {

  // load the filter's module
  beforeEach(module('angNewsApp'));

  // initialize a new instance of the filter before each test
  var url;
  beforeEach(inject(function ($filter) {
    url = $filter('hostnameFromUrl');
  }));

  it('should return the hostname of the provided link', function () {
    var href = 'http://www.google.ca/google/';
    expect(url(href)).toBe('www.google.ca');
  });

});
