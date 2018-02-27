const path = require("path");
const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const SimpleProgressPlugin = require("webpack-simple-progress-plugin");
const outputDir = path.join(__dirname, "build/");

module.exports = {
  devtool: "source-map",
  entry: {
    app: [
      "webpack-hot-middleware/client?reload=true", //note that it reloads the page if hot module reloading fails.
      path.resolve(__dirname, 'src/Index.bs')
    ]
  },
  target: "web",
  output: {
    path: outputDir,
    publicPath: "/",
    filename: "Index.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    // new HtmlWebpackPlugin({
    //   template: "src/index.html",
    //   inject: true
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({ "window.jQuery": "jquery" }),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: '"development"'
    //   }
    // }),
    new SimpleProgressPlugin()
  ]
  // module: {
  //   loaders: [
  //     {
  //       test: /\.js$/,
  //       include: path.join(__dirname, "src"),
  //       loader: "babel-loader"
  //     },
  //     { test: /(\.css)$/, loaders: ["style-loader", "css-loader"] },
  //     { test: /\.eot(\?.*)?$/, loader: "file-loader?name=fonts/.[ext]" },
  //     { test: /\.pdf(\?.*)?$/, loader: "file-loader?name=fonts/.[ext]" },
  //     {
  //       test: /\.(woff|woff2)(\?.*)?$/,
  //       loader: "file-loader?name=fonts/.[ext]"
  //     },
  //     {
  //       test: /\.ttf(\?.*)?$/,
  //       loader:
  //         "url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/.[ext]"
  //     },
  //     {
  //       test: /\.svg(\?.*)?$/,
  //       loader:
  //         "url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/.[ext]"
  //     },
  //     {
  //       test: /\.(jpe?g|png|gif|ico)$/i,
  //       loader: "url-loader?limit=10000&name=images/[hash].[ext]"
  //     }
  //   ]
  // }
};
