module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        'last 5 versions',//支持最新的5个版本
        'not ie <= 8',//IE8以下不支持
      ]
    })
  ]
}
