var assert = require('assert');
let math = require('../math.js')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('sum', function(){
    it('2 nr', function(){
       assert.equal(math.myFunction(3, 5), 15)
    })
})