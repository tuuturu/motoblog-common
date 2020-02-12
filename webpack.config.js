const path = require('path')

module.exports = {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'common.js'
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
