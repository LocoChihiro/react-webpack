const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
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
          MiniCssExtractPlugin.loader, // 创建style标签，并将css添加进去
          {loader:"css-loader"}, // 编译css
          {loader:"less-loader"}, // 编译lesss
          {loader:"postcss-loader",
            options: {
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: ['last 15 versions']
                })
              ]
            }
          },
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
    new MiniCssExtractPlugin({
      filename: (argv.mode == 'development') ? '[name].css' : '[name].[hash:5].css',
      chunkFilename: (argv.mode == 'development') ? '[id].css' : '[id].[hash:5].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackDeepScopeAnalysisPlugin()
    
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, './', 'tsconfig.json')
      }),
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
    },
  },
}
module.exports = merge(config,env);