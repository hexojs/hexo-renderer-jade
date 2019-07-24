'use strict';

const should = require('chai').should(); // eslint-disable-line

describe('hexo-renderer-jade', () => {
  const jade = require('../lib/jade');
  const pug = require('../lib/pug');

  // Jade test cases
  it('jade - default', () => {
    const result = jade({
      text: 'p Hello #{name}'
    }, {
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });

  it('jade - compile', () => {
    const render = jade.compile({
      text: 'p Hello #{name}'
    });

    const result = render({
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });

  // Pug test cases
  it('pug - default', () => {
    const result = pug({
      text: 'p Hello #{name}'
    }, {
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });

  it('pug - compile', () => {
    const render = pug.compile({
      text: 'p Hello #{name}'
    });

    const result = render({
      name: 'Hexo'
    });

    result.should.eql('<p>Hello Hexo</p>');
  });
});
