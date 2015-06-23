var fs = require('fs'),
    path = require('path'),
    ul = require('ul'),
    md = require('marked');


/**
 * Creates a new `Templator` instance.
 * @name Templator
 * @function
 * @param {Object} options An object containing the following fields:
 *
 *  - `path` (String): The path to look for markdown partials.
 */

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


/**
 * Run the contents of an HTML file through the `Templator`
 * @name processFile
 * @function
 * @param {String} templateFile Path to HTML file to be processed
 * @return {String} The processed HTML
 */

Templator.prototype.processFile = function (templateFile) {
  return this.processContent(fs.readFileSync(templateFile).toString());
};


/**
 * Inject markdown partials into HTML template
 * @name processContent
 * @function
 * @param {String} templateContent HTML template string
 * @return {String} The processed HTML
 */

Templator.prototype.processContent = function (templateContent) {
  return templateContent.replace(/{{(.+)}}/g, function (match, name) {
    var filepath = path.join(this.cwd, name + (/\.md$/.test(name) ? '' : '.md'));
    return fs.existsSync(filepath)
      ? md(fs.readFileSync(filepath).toString())
      : match;
  }.bind(this));
};


module.exports = Templator;
