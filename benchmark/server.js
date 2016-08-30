'use strict';

var path  = require('path');
var koa   = require('koa');
var serve = require('koa-static');

var fs = require('fs');
var rollup = require('rollup');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

var app = koa();

// root dir
app.use(serve(path.resolve()));



rollup.rollup({
  entry: path.join(__dirname, 'benchmark.js'),
  plugins: [
    nodeResolve({
      preferBuiltins: false
    }),
    commonjs()
  ]
}).then(function(bundle) {

  var result = bundle.generate({
    format: 'umd',
    moduleName: 'runTest'
  });

  fs.writeFileSync('benchmark/benchmark.umd.js', result.code);

  app.listen(3000, function() {
    console.log('server used to test benchmark is running on port 3000');
  });
});



