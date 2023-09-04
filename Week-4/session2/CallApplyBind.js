class Calculator {
  add(number1, number2) {
    if (
      number2 &&
      typeof number2 == "number" &&
      number1 &&
      typeof number1 == "number"
    )
      return number1 + number2;
    else return 0;
  }

  subtract(number1, number2) {
    if (
      number2 &&
      typeof number2 == "number" &&
      number1 &&
      typeof number1 == "number"
    )
      return Math.abs(number2 - number1);
    else return 0;
  }

  multiply(number1, number2) {
    if (
      number2 &&
      typeof number2 == "number" &&
      number1 &&
      typeof number1 == "number"
    )
      return number1 * number2;
    else return 0;
  }

  divide(number1, number2) {
    if (
      number2 &&
      typeof number2 == "number" &&
      number1 &&
      typeof number1 == "number"
    )
      return number1 / number2;
    else return 0;
  }
}

class ScientificCalculator extends Calculator {
  square(number) {
    if (number && typeof number == "number") return number * number;
    else return 0;
  }

  cube(number) {
    if (number && typeof number == "number") return number * number * number;
    else return 0;
  }

  power(base, exponent) {
    if (
      base &&
      typeof base == "number" &&
      exponent &&
      typeof exponent == "number"
    )
      return Math.pow(base, exponent);
    else return 0;
  }
}

const scientificCalculatorInstance = new ScientificCalculator();

const multiplyFunctionCopy = Calculator.prototype.multiply.bind(
  scientificCalculatorInstance
);
scientificCalculatorInstance.multiplyByTwo = function (numberToMultiply) {
  return multiplyFunctionCopy(2, numberToMultiply);
};

const powerFunctionCopy = ScientificCalculator.prototype.power.bind(
  scientificCalculatorInstance
);
scientificCalculatorInstance.powerOfThree = function (base) {
  return powerFunctionCopy(base, 3);
};

console.log(Calculator.prototype.add.call(null, 10, 5));
console.log(Calculator.prototype.subtract.apply(null, [10, 5]));

console.log(scientificCalculatorInstance.multiplyByTwo(5));
console.log(scientificCalculatorInstance.powerOfThree(2));
