var runTests = require('./tests');

function requireTestee() {
  require('../index');
}

runTests(requireTestee);
