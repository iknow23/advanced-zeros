module.exports = function getZerosCount(number, base) {
  var resultNumber = {};
  var minZeros = 0;
  var maxPowerNumber = 0;

  //  отбор простых множителей
  for (var i = 2; i <= base; i++) {

    var counter = 0;
    while (base % i == 0) {
      counter++;
      base /= i;
    }

    resultNumber[i] = counter;
  }

  for (var prime in resultNumber) {

    for (var j = 0; Math.pow(prime, j) <= number; j++) {
      maxPowerNumber = j;
    }

    //  поиск количества нулей
    var countZeros = 0;
    for (maxPowerNumber; maxPowerNumber > 0; maxPowerNumber--) {
      countZeros += Math.floor(number / Math.pow(prime, maxPowerNumber));
    }
    countZeros = Math.floor(countZeros / resultNumber[prime]);
    if (minZeros == 0) {
      minZeros = countZeros;
    }
    else if (minZeros > countZeros) {
      minZeros = countZeros;
    }
  }

  return minZeros;
};