const path = require('path')

module.exports = {
  mode: 'production',

  context: path.resolve(__dirname, 'src'),

  entry: {
  	models: './models.js'
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js'],
    enforceExtension: false,
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
}
