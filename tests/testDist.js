var runTests = require('./tests');

function requireTestee() {
  require('../index.min');
}

runTests(requireTestee);
