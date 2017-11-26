var dest = './resources'; // 出力先ディレクトリ
var src = './resources';  // ソースディレクトリ

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
    entry: src + '/sample_rs.js',
    output: {
      filename: 'build.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  }
}