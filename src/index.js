var factorial = function(n) {
  if (n != 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

module.exports = function getZerosCount(number, base) {
  //  вычисляю факториал
  var factorialResult = factorial(n);
  factorialResult = '' + factorialResult;
};