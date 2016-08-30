(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.runTest = factory());
}(this, (function () { 'use strict';

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
 * @param {Boolean} inplace is inplace
 * @return result {Array} return an shuffled array
 *
 */
function shuffle(arr, n, inplace) {
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

var Benchmark = window.Benchmark;

function benchmark(arrLen) {
  var arr = [];
  for (var i = 0; i < arrLen; i++) {
    arr.push(i);
  };

  var suite = new Benchmark.Suite;
  suite
    .add('abc', function() {
      shuffle(arr);
    })
    .run({'async': true});

  return {
    r: shuffle(arr),
    suite: suite
  };
}

return benchmark;

})));