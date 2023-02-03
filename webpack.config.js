const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const KunPlugin = require('./plugins/kun-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');//引入gzip压缩插件


module.exports = (env) => ({
  entry: './src/index.js',
  mode: 'development',
  output: {
    clean: true,
    filename: '[name].[contenthash].js',
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
    new HtmlWebpackPlugin(),
    new CompressionPlugin({
      //filename: '[path].gz[query]', //  使得多个.gz文件合并成一个文件，这种方式压缩后的文件少，建议使用
      algorithm: 'gzip', // 官方默认压缩算法也是gzip
      test: /\.js$|\.css$|\.html$|\.ttf$|\.eot$|\.woff$/, // 使用正则给匹配到的文件做压缩，这里是给html、css、js以及字体（.ttf和.woff和.eot）做压缩
      threshold: 1024, //以字节为单位压缩超过此大小的文件，使用默认值10240吧
      minRatio: 0.8, // 最小压缩比率，官方默认0.8
      //是否删除原有静态资源文件，即只保留压缩后的.gz文件，建议这个置为false，还保留源文件。以防：
      deleteOriginalAssets: false
    })
  ],
  optimization: {
    // moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  }
})
