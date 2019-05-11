const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
