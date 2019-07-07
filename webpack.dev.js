const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer]
              }
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    })
  ]
};
