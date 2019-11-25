var webpack = require("webpack"),
  path = require("path"),
  yargs = require("yargs");
  TerserPlugin = require('terser-webpack-plugin');

var libraryName = "PrismicDOM",
  fileName = "prismic-dom",
  plugins = [],
  outputFile;

if (yargs.argv.p) {
  plugins.push(
    new TerserPlugin({
      sourceMap: true,
      terserOptions: {
        mangle: true,
        compress: {
          warnings: false,
          pure_getters: true,
          unsafe_comps: true
        },
        output: {
          comments: false
        },
        parallel: true,
        cache: true
      },
      exclude: [/\.min\.js$/gi]
    })
  );
  outputFile = fileName + ".min.js";
} else {
  outputFile = fileName + ".js";
}

var config = {
  entry: [__dirname + "/src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.json$/,
        use: "json-loader"
      }
    ]
  },
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "./src")
    },
    extensions: [".js"]
  },
  plugins: plugins
};

module.exports = config;
