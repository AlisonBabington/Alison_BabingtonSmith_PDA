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

  it('it should add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('it should subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it should multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })
  it('it should divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(4);
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.numberClick(5)
    assert.strictEqual(calculator.runningTotal, 4215);
  })
  it('it should chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 5);
  })
  it('it should clear the running total without affecting the calculation', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 9);
  })

});
