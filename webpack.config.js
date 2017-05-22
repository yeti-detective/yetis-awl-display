var path = require('path'); // You know what path is for
var webpack = require('webpack'); // obviously it needs webpack

module.exports = {
/*
the entry key defines the file that will be the entry point. In our case, index.jsx
*/
  entry: path.join(__dirname + '/index.jsx'),
/*
the output key names the file and location of the transpiled javascript
*/
  output: { path: path.join(__dirname), filename: 'bundle.js' },
  module: {
/*
loaders tells webpack what kind of files we are loading. In our case .jsx
*/
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  node : {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
