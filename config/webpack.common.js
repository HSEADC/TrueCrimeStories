const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const htmlPages = require('./webpack.pages.js')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: "./src/javascripts/index.js",
    styleguide: './src/javascripts/styleguide.js',
    articles: './src/javascripts/articles.js',
    test1: './src/javascripts/test1.js',
    allStyles: './src/javascripts/allStyles.js',
    header: './src/javascripts/elements/header.js',
    footer: './src/javascripts/elements/footer.js',
    menu: './src/javascripts/elements/menu.js',
    filterTags: './src/javascripts/filterTags.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(".", "docs"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "imgs/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(), ...htmlPages,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/share/CNAME'),
          to: path.resolve(__dirname, '../docs')
        },
        {
          from: path.resolve(__dirname, '../src/audio'),
          to: 'audio'
        },
        {
          from: path.resolve(__dirname, '../src/video'),
          to: 'video'
        }
      ]
    }),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, '../src/partials/analytics.html'),
        priority: 'replace',
        location: 'analytics',
        template_filename: '*'
      }
    ])
  ],
  // optimization: {
  //   minimizer: [new CssMinimizerPlugin()]
  // },
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
    },
  },
};