'use strict';

var should = require('chai').should(); // eslint-disable-line

describe('hexo-renderer-jade', function() {
  var jade = require('../lib/jade');
  var pug = require('../lib/pug');

  // Jade test cases
  it('jade - default', function() {
    var result = jade({
      text: 'p Hello #{name}'
    }, {
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });

  it('jade - compile', function() {
    var render = jade.compile({
      text: 'p Hello #{name}'
    });

    var result = render({
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });

  // Pug test cases
  it('pug - default', function() {
    var result = pug({
      text: 'p Hello #{name}'
    }, {
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });

  it('pug - compile', function() {
    var render = pug.compile({
      text: 'p Hello #{name}'
    });

    var result = render({
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });
});
