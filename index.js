'use strict';

/**
 * return number from lower value(include)to upper value(include)
 *
 * @param lower from value
 * @param upper to value
 * @returns {Number}
 */
function random(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

/**
 * fisher-kates-shuffle
 *
 * @param {Array} arr array to be shuffled
 * @param {Number} n pick n members from arr
 * @param {Boolean} inplace create new array or inplace opertation 
 * @return result {Array} return an shuffled array
 *
 */
export default function(arr, n, inplace) {
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