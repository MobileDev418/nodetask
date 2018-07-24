var assert = require('assert')
var resolvingPromise = require('../').default

describe('Scrap Test', function() {

    it('write datas', () => {
        return resolvingPromise.then( (result) => {
            expect(result).to.equal('promise resolved');
        })
    })
  })
  