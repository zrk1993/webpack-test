const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const KunPlugin = require('./plugins/kun-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
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
        test: /\.placeholder.js/,
        options: {
          oop: 1,
        },
        loader: require.resolve('./loaders/kun-loader')
      },
      {
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
    new KunPlugin({ a: 1333 }),
    new HtmlWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
}
