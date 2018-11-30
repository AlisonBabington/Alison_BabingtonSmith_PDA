var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

// Unit Tests:

// - `calculator.add()` - add 1 to 4 and get 5
// - `calculator.subtract()` subtract 4 from 7 and get 3
// - `calculator.multiply()` - multiply 3 by 5 and get 15
// - `calculator.divide()` - divide 21 by 7 and get 3

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it should add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

});
