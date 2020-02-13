const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
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
