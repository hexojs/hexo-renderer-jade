# [Jade] renderer

Add support for [Jade].

## Install

``` bash
$ npm install hexo-renderer-jade --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
jade:
  pretty: true
  doctype: html
```

- **pretty** - Adds whitespace to the resulting html to make it easier for a human to read using 2 spaces as indentation. If a string is specified, that will be used as indentation instead (e.g. `\t`). (default: `false`)
- **doctype** - If the doctype is not specified as part of the template, you can specify it here. Setting it to `html` will ensure that boolean attributes are not mirrored (e.g. `<input checked />`) which doesn't seem to happen even when setting the `html` doctype in the template. (default: _not set_)

You can see the full list of options over at the [Jade documentation].

[Jade]: http://jade-lang.com/
[Jade documentation]: http://jade-lang.com/api/
