var test = require('tape'),
    fs = require('fs'),
    path = require('path'),
    Templator = require('../');


function process (filename, options, st) {
  var templator = new Templator(options),
      input = 'test/fixtures/' + filename,
      output = 'test/expected/' + filename;

  var actual = templator.processFile(input);

  fs.readFile(output, function (err, data) {
    st.equal(actual, data.toString(), 'processed content should match expected');
    st.end();
  });
}


test('Templator options', function (t) {

  t.test('templator.cwd is set to default', function (st) {
    var templator = new Templator();
    st.equal(templator.cwd, path.resolve('./'), 'should have correct path property');
    st.end();
  });

  t.test('templator.cwd is set as string', function (st) {
    var templator = new Templator('somedir');
    st.equal(templator.cwd, path.resolve('somedir'), 'should have correct path property');
    st.end();
  });

  t.test('templator.cwd is set in options object', function (st) {
    var templator = new Templator({path: 'somedir'});
    st.equal(templator.cwd, path.resolve('somedir'), 'should have correct path property');
    st.end();
  });

});


test('Templator processFile', function (t) {

  t.test('process file with no includes', function (st) {
    process('no-includes.html', {}, st);
  });

  t.test('process file with no path resolutions', function (st) {
    process('no-resolve.html', {}, st);
  });

  t.test('process file with includes', function (st) {
    process('includes.html', 'test/fixtures/includes', st);
  });

  t.test('process file with includes without .md', function (st) {
    process('no-md.html', 'test/fixtures/includes', st);
  });

  t.test('process file with relative includes', function (st) {
    process('relative.html', {}, st);
  });

  t.test('process file with HTML content', function (st) {
    process('with-html.html', 'test/fixtures/includes', st);
  });

  t.test('process file with image in HTML block', function (st) {
    process('image.html', 'test/fixtures/includes', st);
  });

});
