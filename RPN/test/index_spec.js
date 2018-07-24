var assert = require('assert')
var rpn = require('../').default

describe('Reverse Polish Notation Test', function() {

    it('should work fine for basic cases', function() {
      assert.equal(rpn('   '), null)
      assert.equal(rpn('4 2 +'), 6)
      assert.equal(rpn('4 2 *'), 8)
      assert.equal(rpn('4 2 /'), 2)
      assert.equal(rpn('4 2 -'), 2)
    })
  })
  