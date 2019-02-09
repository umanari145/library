var dest = './resources'; // 出力先ディレクトリ
var src = './resources';  // ソースディレクトリ
var loadenv = require('node-env-file')

loadenv('.env')
//envを読み込める
console.log('---' + process.env.DBNAME)

module.exports = {
  // 出力先の指定
  dest: dest,
  // jsのビルド設定
  js: {
    src: src + '/**',
    dest: dest + '/',
    uglify: true
  },
  // webpackの設定
  webpack: {
    mode: 'development',
    entry: src + '/sample_rs.js',
    output: {
      filename: 'build.js'
    },
    devtool: 'source-map',
  }
}
