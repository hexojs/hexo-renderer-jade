'use strict';

var jade = require('jade');

function jadeRenderer(data, locals) {
  return jade.compile(data.text, {
    filename: data.path
  })(locals);
}

module.exports = jadeRenderer;
