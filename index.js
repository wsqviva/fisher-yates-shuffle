'use strict';

/**
 * a random number range lower value(include) between upper value(include)
 *
 * @param {Number} lower    from value
 * @param {Number} upper    to value
 * @returns {Number}
 */
function random(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

/**
 * fisher-kates-shuffle
 * return a shuffled array
 *
 * @param {Array} arr
 * @param {Number} n          pick n members from arr
 * @param {Boolean} inplace   create new array or inplace opertation 
 * @return {Array}
 */
module.exports = function(arr, n, inplace) {
  if (arguments.length == 1) {
    n = arr.length;
  }

  inplace = inplace ? inplace : false;

  var lastIndex = arr.length - 1;
  var result = inplace ? arr : arr.concat();
  var randIndex;
  var randValue;
  var index = -1;


  while(++index < n - 1) {
    randIndex = random(index, lastIndex);
    randValue = result[randIndex];

    result[randIndex] = result[index];
    result[index] = randValue;
  }

  result.length = n;
  return result;
}