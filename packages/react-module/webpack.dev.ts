import HtmlWebPackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { join } from 'path';
import webpackWidget from './webpack.common';

export default merge(webpackWidget, {
  entry: {
    module: join(__dirname, "src/index"),
    react: ["react", "react-dom"]
  },
  output: {
      filename: "[name].bundle.js"
  },
  devServer: {
    compress: true,
    port: 8001,
  },
  module: {
    rules: [
      {
          test: /\.(png|jpg|gif)$/i,
          loader: 'file-loader',
          options: {
              name: '[path][name].[ext]',
              useRelativePath: true,
          },
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: join(__dirname, 'index.html'),
    }),
  ],
});