const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: '/src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development',
  devServer: {
    port: 9000,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  devtool: 'eval-source-map',
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom'  },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {}
        }
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/i,
        use: ['css-loader']
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules'
    }),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'src/assets/logo.svg',
      template: '/src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'src/assets/playlist', to: 'assets/playlist' }
      ]
    })
  ]
}
