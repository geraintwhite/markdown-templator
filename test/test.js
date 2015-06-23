var test = require('tape'),
    path = require('path'),
    Templator = require('../');


test('templator.path', function (t) {

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



