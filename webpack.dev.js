const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client?reload=true" //note that it reloads the page if hot module reloading fails.
  ],
  optimization: {
    minimize: false
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      links: [{ rel: 'stylesheet', type: 'text/css', href: '/app.css' }]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"'
      }
    })
  ],


  module: {
    rules: [
      {
        test   : /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
      },
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

  module: {
    rules: [
      {
        test   : /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
      }
    ]
  },
});
