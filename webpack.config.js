const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const KunPlugin = require('./plugins/kun-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: '[hash].main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@kun': `${require.resolve('./loaders/kun-loader/kun.placeholder.js')}`
    }
  },
  module: {
    rules: [
      {
        //test: /\.placeholder.js/,
        test: /\.jpg/,
        loader: require.resolve('./loaders/kun-loader')
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new KunPlugin({ a: 1 }),
    new HtmlWebpackPlugin()
  ]
}
