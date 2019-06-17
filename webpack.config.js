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
        test: /\.less$/,
        use: [
          "style-loader", // 创建style标签，并将css添加进去
          "css-loader", // 编译css
          // "postcss-loader",
          "less-loader" // 编译lesss
        ]
      },
      { 
        test: /\.tsx?$/,
        loader: ["babel-loader", "ts-loader"],
        exclude: /node_modules/, 
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'images/', // 图片输出的路径
            limit: 10 * 1024
          }
        }
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