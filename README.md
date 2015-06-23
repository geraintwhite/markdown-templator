# markdown-templator

[![NPM Version](https://img.shields.io/npm/v/markdown-templator.svg)](https://www.npmjs.com/package/markdown-templator)
[![Build Status](https://img.shields.io/travis/grit96/markdown-templator.svg)](https://travis-ci.org/grit96/markdown-templator)
[![Dependency Status](https://img.shields.io/david/grit96/markdown-templator.svg)](https://david-dm.org/grit96/markdown-templator)

Include markdown files in an HTML template. [gulp-md-template](https://github.com/grit96/gulp-md-template) is a Gulp plugin for this with example usage.

## Installation
```sh
$ npm install markdown-templator
```


## Help

```
Usage: markdown-templator template.html [options]

-h|--help      display this help message
-v|--version   display the version number
-o|--output    directory to output processed HTML
-p|--path      location to look for markdown partials
```


## Documentation

## `Templator(options)`
Creates a new `Templator` instance.

### Params
- **Object** `options`: An object containing the following fields:
 - `path` (String): The path to look for markdown partials.

## `processFile(templateFile)`
Run the contents of an HTML file through the `Templator`

### Params
- **String** `templateFile`: Path to HTML file to be processed

### Return
- **String** The processed HTML

## `processContent(templateContent)`
Inject markdown partials into HTML template

### Params
- **String** `templateContent`: HTML template string

### Return
- **String** The processed HTML



## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
