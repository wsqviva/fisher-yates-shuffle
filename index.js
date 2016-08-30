'use strict';

function random(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

/**
 *
 * @param arr   array to be shuffled
 * @param n     resulted array length, default arr.length
 */
function shuffle(arr, n) {
  var lastIndex = arr.length - 1;
  var result = arr.concat();
  var randIndex;
  var randValue;
  var index = -1;
  if (n === undefined) {
    n = arr.length;
  }

  while(++index < n - 1) {
    randIndex = random(index, lastIndex);
    randValue = result[randIndex];

    result[randIndex] = result[index];
    result[index] = randValue;
  }

  result.length = n;
  return result;
}