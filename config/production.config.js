module.exports = {
  devtool: "cheap-module-source-map",
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js'// 设置按需加载后的chunk名字
  }
}