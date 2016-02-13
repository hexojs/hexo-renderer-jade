'use strict';

var should = require('chai').should(); // eslint-disable-line

describe('hexo-renderer-jade', function() {
  var r = require('../lib/renderer');

  it('default', function() {
    var result = r({
      text: 'p Hello #{name}'
    }, {
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });
});
