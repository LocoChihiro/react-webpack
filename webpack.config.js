const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const argv = require('yargs-parser')(process.argv.slice(2));
const url = './config/' + argv.mode + '.config.js';
const env = require(url);
const merge = require('webpack-merge');
const path = require('path');
const config = {
  entry: path.join(__dirname, 'src/index.tsx'),
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        exclude: /node_modules/,
        loader: ["babel-loader", "ts-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 最终创建的文件名
      template: path.join(__dirname, 'src/index.html') // 指定模板路径
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, './', 'tsconfig.json')
      }),
    ]
  }
}
module.exports = merge(config,env);