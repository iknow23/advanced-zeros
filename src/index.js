module.exports = function getZerosCount(number, base) {
  var primeNumber = {};
  var minZeros = 0;
  var maxPowerNumber = 0;

  for (var i = 2; i <= base; i++) {

    var counter = 0;
    while (base % i == 0) {
      counter++;
      base /= i;
    }

    primeNumber[i] = counter;
  }

  for (var prime in primeNumber) {

    for (var j = 0; Math.pow(prime, j) <= number; j++) {
      maxPowerNumber = j;
    }

    var countZeros = 0;
    for (maxPowerNumber; maxPowerNumber > 0; maxPowerNumber--) {
      countZeros += Math.floor(number / Math.pow(prime, maxPowerNumber));
    }
    countZeros = Math.floor(countZeros / primeNumber[prime]);
    if (minZeros == 0) {
      minZeros = countZeros;
    }
    else if (minZeros > countZeros) {
      minZeros = countZeros;
    }
  }

  return minZeros;
};