var fs = require('fs'),
    path = require('path'),
    ul = require('ul'),
    marked = require('marked');


var Templator = function (options) {
  if (typeof options === 'string') {
    options = {
      path: options
    };
  }

  options = ul.merge(options, {
    path: './'
  });

  options.path = path.resolve(options.path);

  this.options = options;
  this.cwd = options.path;
};

Templator.prototype.processFile = function (templateFile) {
  return this.processContent(fs.readFileSync(templateFile).toString());
};

Templator.prototype.processContent = function (templateContent) {
  return templateContent.replace(/{{(.+)}}/g, function (match, name) {
    var filepath = path.join(this.cwd, name + (/\.md$/.test(name) ? '' : '.md'));
    return fs.existsSync(filepath)
      ? marked(fs.readFileSync(filepath).toString())
      : match;
  }.bind(this));
};


module.exports = Templator;
