module.exports = {
  output: {
    publicPath: "/" 
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    hot: true,
    historyApiFallback: true
  },
}