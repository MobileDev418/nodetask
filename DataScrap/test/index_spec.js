const assert = require('assert');

const resolvingPromise = new Promise((resolve) =>
  resolve('promise resolved')
);
const rejectingPromise = new Promise((resolve, reject) =>
  reject(new Error('promise rejected'))
);

describe('Test Promiss', () => {
  it('write datas', () => {
    return resolvingPromise.then( (result) => {
      expect(result).to.equal('promise resolved');
    });
  });
});
