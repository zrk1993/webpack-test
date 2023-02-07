// webpack.config.js
const path = require("path");

module.exports = {
  target: 'node',
  entry: {
    main: "./src/main.js",
    main2: "./src/main2.js",
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
  devtool: false,
}