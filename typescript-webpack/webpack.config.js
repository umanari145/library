module.exports = {
  mode: 'development',
  entry: './main.ts', //ファイルをまとめる際のエントリーポイント
  output: {
    path: __dirname,
    filename: 'main.js' //まとめた結果出力されるファイル名
  },
  resolve: {
    extensions: ['.ts'] 
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader' //ts-loader使うよ
      }
    ]
  }
}
