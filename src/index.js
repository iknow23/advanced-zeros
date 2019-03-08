var factorial = function(n) {
  if (n != 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

module.exports = function getZerosCount(number, base) {
  //  счётчик нулей
  var count = 0;
  
  //  вычисляю факториал
  var factorialResult = factorial(n);
  factorialResult = '' + factorialResult;

  //  считаю кол-во нулей
  for (var i = (factorialResult.length - 1); i >= 0; i--) {
    if (factorialResult[i] == 0) {
      count++;
    } else {
      count = count;
    }
  }
  return count;
};