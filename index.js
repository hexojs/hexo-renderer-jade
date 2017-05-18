/* global hexo */
'use strict';

hexo.extend.renderer.register('pug', 'html', require('./lib/pug'), true);
hexo.extend.renderer.register('jade', 'html', require('./lib/jade'), true);
