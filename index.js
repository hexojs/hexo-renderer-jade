var jade = require('jade');

hexo.extend.renderer.register('jade', 'html', function(data, locals){
  var jadeConfig = this.config.jade || {};
  var options = {
    filename: data.path
  };
  for (var key in jadeConfig) {
    options[key] = jadeConfig[key];
  }
  return jade.compile(data.text, options)(locals);
}, true);
