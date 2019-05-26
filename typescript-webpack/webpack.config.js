module.exports = {
  entry: './main.ts', //ファイルをまとめる際のエントリーポイント
  output: {
    path: __dirname,
    filename: 'main.js' //まとめた結果出力されるファイル名
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  devtool: 'init-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader' //ts-loader使うよ
      }
    ]
  }
}
