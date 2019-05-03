const path = require('path');
const VueLoaderPlugin= require('vue-loader/lib/plugin');

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {                
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.less$/, use: ['style-loader','css-loader','less-loader'] },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test:/\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=3000'},
      { test:/\.(ttf|woff2|eot|svg|woff)$/, use: 'url-loader'},
      { test: /\.vue$/, use: 'vue-loader'}
    ]
  },
  plugins: [
      new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ]
};