# library

主に JavaScript の実験など

- ajax.html jquery1.5 以降の ajax の書き方

  - application/x-www-form-urlencoded と application/json の違いなど
    - form ・・・HTML で送信される通常の形で互換性が高く、シンプルで可読性が高い FormData
    - json ・・・複雑なデータの表現に適しており、JSON オブジェクトでデータを表現することができる。主流になりつつある。payload
    - https://qiita.com/Kunikata/items/2b410f3cc535e4104906
    - https://qiita.com/amamamaou/items/b6cb39739bba4abf4544
    - https://egapool.hatenablog.com/entry/2015/07/28/225658

- ajax_matome.html ajax,promise,async_awit のサンプルパターンなど
- Array_convert.html JS 標準で搭載されている配列加工手法
- babel_source.js babel の元
- babel_compiled.js babel の成果物

```
 npx babel babel_source.js --out-file babel_compiled.js --presets es2015
 # 通常は.babelrcを使うが上記のようなコマンドでも可能
```

presets に関して<br>
https://akabeko.me/blog/2017/03/babel-preset-env/<br>
https://hakozaru.com/posts/understanding-babel

- canvas canvas を使った画像の配置

- when.html 並列ではあるが、順番は守りたい時の ajax の書き方
- fileapi.html FILEAPI を活用した画像アップロード
- formatter - formatterSample.js フォーマット用のサンプル
  フォーマット(--write なしだと実行はせず、実行結果を出力してくれる)

```
npx prettier formatter/formatSample.js --write
```

```
{
    //トップディレクトリであることのフラグ
    "root": true,
    "env": {
      // browserで使うかnodeで使うか
      "browser": true,
      //esいくつのバージョンで使うか
      "es6": true
    },
    //基本設定(eslint:recommendedはディフォルトのパターン)
    "extends":["eslint:recommended", "prettier"]
  }

```

- 参考
  - https://qiita.com/mysticatea/items/f523dab04a25f617c87d
  - https://maku.blog/p/j6iu7it/#root-true
- .prettierrc Prettier の設定ファイル
- .eslint ESLint ツール
- operator.js 三項演算子、エルビス演算子など
- pagination.html paginationjs を使ったページャーのパターン
- promise.html 非同期処理を Promise で使うパターン
- promise_all.html 複数の非同期処理を Promise で使うパターン(when と同義)
- non_promise.html 非同期処理、Promise を使わないパターン(Promise を書かない時との比較)
- old_object_oridented.html 旧式の関数型のオブジェクト生成&インスタンス化
- async_await_basic.html async_await を使った基本サンプル
- async_await.html api 連携でのサンプル
- imageBinary.php 画像バイナリデータを http レスポンスを返す(読み込みは fileapi.php)
- imageBinaryS3.php 画像バイナリデータを http レスポンスを返す。S3 経由(読み込みは fileapi.php)
- CommandPool.php S3 へのバルクアップロード&バルクダウンロード
- dataTable.html 一般ページャー　https://datatables.net/　活用
- dataTable(2).html 無限スクロールサンプル　https://datatables.net/　活用
- datepicker_select2.html datepicker と select2 の活用
- dynamic_element.html 主に要素が追加される系の動的なテーブル
- js/bundle.js main.js がコンパイルされたもの(現在未使用)
- js/main.js require されたライブラリ(現在未使用)

- js_scraping (puppeteer を使ったログイン、スクショ)

  - config.json 設定ファイル(通常は git 外かも)
  - main.js エントリーポイント

- es6sample ECMAScript2015 について

  - lib/PersonClass.js,MemberClass,currency export するクラス
  - es6sample.js let,const,アロー演算子,class の新しい書き方など
  - es6load.js import を使った他ファイルの読み込み
  - es6class.js class の書き方
  - es6modules.js export を使った関数
  - es6sample.html ブラウザへのデバッグ用の html
  - scope.js スコープと var,let に関しての挙動の違い
  - this.js this の参照について(es6sample.js でも this について扱っている)
    https://qiita.com/takeharu/items/9935ce476a17d6258e27
  - pakage.json 内に`{"type": "module"}`を記載すると node でも ES6 風の記載が可能

- parcel 簡易コンパイル
  - dist 成果物がここに吐かれる
  - lib/PersonClass export するクラス
  - es6load.js JS を import する側
  - es6sample.html エントリーポイントする HTML

```
npx parcel parcel/es6sample.html
```

ex Server running at http://localhost:51478<br>
http://localhost:51478 にアクセス

- rollup
  - lib/PersonClass export するクラス
  - bundle.js コンパイルされた JS
  - es6load.js JS を import する側(生成される側の js)
  - es6sample.html エントリーポイントする HTML

```
cd ./rollup
npx rollup es6load.js --file bundle.js --format iife
```

- requirejssamp
  - libs 読み込まれる側の JS(dateutil,strutil が実ファイル)
  - require.js ライブラリ
  - sample1(main).html シンプルな require.js パターン
  - sample2(main2).html 内部 require パターン
  - sample3(main3).html config 使用系
  - require_config.js main3 の設定
  - sample4(build).html 1 ファイルにまとめたパターン

```
 npx r.js -o name=main  out=build.js
 #設定ファイルでも可
```

- libs/js/original/utility.js 汎用的な JS 主に文字加工に関して
- sweetalert スタイリッシュな alert 文(libs で読み込み)
- html2canvas.min.js 　 html の画像
- htmltojpeg.php HTML→base64→PHP 側でデコード →S3 にアップロード
- http_request HTTP リクエストを飛ばす処理をまとめ(ajax,axios,fetch,async-await)
- infinitescroll.html 無限スクロール　 jquery.infinitescroll.min.js 　活用
  - page2.html スクロール後のページは数字をつけ、あらかじめ作っておく必要がある。
- infinitescroll2.html 無限スクロール　オリジナル
- modal.html leanModal を使ったモーダルウィンドウ
- custom_modal.html 独自モーダルウィンドウ
- loading.html 簡易ローディングサンプル
- slidersample.html slider-pro slicker swiper を使ったスライダーのサンプル
- sticky.html スティッキーヘッダーのサンプル(一定スクロール量を越えるとヘッダに固定されるタイプのヘッダー)
- sugar.html JS ライブラリ Sugar のサンプル
- sugar.html JS ライブラリ Sugar のサンプル(グローバル空間への拡張)
- togglesample.html toggleClass, slideToggle, fadeToggle, CSS のみでの toggle のサンプル
- typeahead.html 入力補完用のライブラリ
- input_test.js(php) 入力補助ツール console 画面で、以下を入力
  - testClass.getFormsInputHtml() 入力値の html 入力 JS を追加
  - testClass.getSerializeData() JSON データの吐き出し
- resources コンパイルを使った JS のサンプル
- ckeditor.htm ビジュアルエディタ ckeditor を使ったサンプル
- validation.html Laravel 風の JS バリデーションチェック
- screen_shot_html2canvas.js スクリーンショット画像化
- typescript
  - sample(2).ts コンパイラの元
  - sample(2).js 生成物
  - libs モジュール
  - main(2).ts エントリーポイントの JS
  - index.html 読み込まれる JS require.js の活用法も合わせて

```
# -t コンパイルする形式
# -sourceMap typescriptのままデバッグできるようになる
# --module commonjs,umdなど
npx tsc -t ES5 --module umd --sourceMap main.ts
```

- typescript-webpack typescript+webpack の活用
  - libs モジュール
  - main.ts エントリーポイントの JS
  - webpack.config.js
  - index.html 読み込まれる JS

```
#--mode development 主に高速化
npx run dev
#--mode production デバッグがしやすい
npx run prod
```

- typescript-rollup rollup+typescipt の構成。基本構成は他と同じ

```
 npx rollup -c
```

- libs
  - css select2 や jquery-ui の CSS
    - common.scss(css) jquery-ui や select2 の css 読み込み
  - js 色々なライブラリをインポート(具体的な library は resouces.js を参照)
  - webpack.mix.js laravel-mix を使ったコンパイラ

laravel-mix でのコンパイル

```
cd ./libs
npx mix
```

- public dataTable.html を受け付けるプログラムのサンプル
- gulpfile.js 下記コマンドで webpack を使ったコンパイル

```
npm run gulp webpack
```

- sample_cross_env.js

```
npm run cross-env-dev
# package.jsonのscripts.cross-env-devを実行
#
# > library@1.0.0 cross-env-dev
# > cross-env NODE_ENV=production node sample_cross_env.js

# production
# ちなみにcross-env NODE_ENV=production && node sample_cross_env.jsはNG
```

library の update<br>
update library

```
# コンテナで既にインストール済み
npm install -g npm-check-updates
# アップデート確認
ncu
# 実際のアップデート
ncu -u
```

- watch_script.js 監視スクリプト()

```
 npm run watch-script

# "watch-script": "watch 'node watch_script.js' ./watch_target/"
# 特定ディレクトリ修正時に↑script起動
#> Watching ./watch_target/
#detect ----watch---
```

```
npm run browser-sync
brower-sync でホットリロードを行う。
docker内部だとおそらくport番号を全て同期しないと無理？
```
