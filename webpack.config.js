const path = require('path');
const defaults = require('lodash.defaultsdeep');

const base = {
  entry: './src/ipfinder.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'Ipfinder',
    libraryTarget: 'umd',
  },
};

const prod = defaults({}, base, {
  output: {
    filename: 'ipfinder.min.js',
  },
  mode: 'production',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: { alias: { util$: path.resolve(__dirname, 'node_modules/util') } }
});

const dev = defaults({}, base, {
  output: {
    filename: 'ipfinder.js',
  },
  mode: 'development',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: { alias: { util$: path.resolve(__dirname, 'node_modules/util') } }
});

module.exports = [prod, dev];