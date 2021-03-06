const path = require("path");
const buildPath = path.resolve("./dist/");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve("./app"),
  target: "web",
  devtool: "eval-source-map",
  resolve: {
    modules: [path.resolve("./app"), "node_modules"],
    extensions: ["*", ".js", ".jsx", ".json", ".scss"]
  },
  entry: ["./js/index.js", "./js/ga.js"],
  output: {
    filename: "js/[name].bundle.js",
    path: buildPath,
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [["env", { modules: false }]]
            }
          }
        ],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 }
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /(\.css)$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            mimetype: "application/font-woff"
          }
        }
      },
      {
        test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            limit: 10000,
            mimetype: "application/octet-stream"
          }
        }
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            limit: 10000,
            mimetype: "image/svg+xml"
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|mp4)$/i,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.ico$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    // Create HTML file that includes references to bundled CSS and JS.
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunksSortMode: "none",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: "./static",
        to: "./images/"
      },
      {
        from: "./videos",
        to: "./videos/"
      }
    ]),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, "app", "css"), "node_modules"]
        },
        context: "/"
      }
    })
  ],

  // Configuration for dev server
  devServer: {
    contentBase: buildPath,
    hot: true,
    inline: true,
    port: 8888,
    historyApiFallback: true
  }
};
