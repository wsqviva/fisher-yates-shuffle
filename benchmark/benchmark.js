'use strict';

import shuffle from '../index.js';

var Benchmark = window.Benchmark;

export default function(arrLen) {
  var arr = [];
  for (var i = 0; i < arrLen; i++) {
    arr.push(i);
  };

  var suite = new Benchmark.Suite;
  suite
    .add('abc', function() {
      shuffle(arr);
    })
    .run({ async: true });

  return {
    r: shuffle(arr),
    suite: suite
  };
}