var HtmlPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: 'build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlPlugin({
      title: 'ReactFire Quickstart',
      favicon: './src/favicon.ico'
    }),
    new BrowserSyncPlugin({server: { baseDir: ['build'] }})
  ]
};
