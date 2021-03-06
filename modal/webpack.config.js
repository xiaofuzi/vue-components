// webpack.config.js
module.exports = {
  //devtool: 'source-map',
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bootstrap-modal.js'
  },
  module: {
    loaders: [
      { 
        test: /\.vue$/, 
        loader: "vue-loader" 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};