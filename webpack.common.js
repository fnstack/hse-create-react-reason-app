const webpack = require("webpack");
const path = require("path");
const SimpleProgressPlugin = require("webpack-simple-progress-plugin");
const outputDir = path.join(__dirname, "dist/");

module.exports = {
  devtool: "source-map",
  entry: [
    path.resolve(__dirname, "src/Index.bs")
  ],
  target: "web",
  output: {
    path: outputDir,
    publicPath: "/",
    filename: "Index.[hash].js"
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new SimpleProgressPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader:
          'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader:
          'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      }
    ]
  },
};
