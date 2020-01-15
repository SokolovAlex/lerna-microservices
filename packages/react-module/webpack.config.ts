import { join } from 'path';
import merge from 'webpack-merge';
import { getAssetsPath } from '../../paths';
import { name } from './manifest';
import webpackWidget from './webpack.common';

export default merge(webpackWidget, {
  entry: {
    module: join(__dirname, "src/widget.tsx"),
    react: ["react", "react-dom"]
  },
  output: {
      path: getAssetsPath(name),
      filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
          test: /\.(png|jpg|gif)$/i,
          loader: 'file-loader',
          options: {
              name: '[name].[emoji:3].[ext]',
              useRelativePath: true,
              outputPath: 'images',
              publicPath: 'assets/react-module/images'
          },
      }
    ],
  },
});
