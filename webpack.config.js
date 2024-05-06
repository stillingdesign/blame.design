const path = require('path');
module.exports = {
  entry: {
    'main': '/src/assets/javascript/main.js',
    'analytics': './src/assets/javascript/analytics.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/javascript'),
    filename: '[name].js'
  }
};