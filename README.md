# library
主にJavaScriptの実験など

- ajax.html jquery1.5以降のajaxの書き方
- when.html 並列ではあるが、順番は守りたい時のajaxの書き方
- promise.html 非同期処理をPromiseで使うパターン
- non_promise.html 非同期処理、Promiseを使わないパターン(Promiseを書かない時との比較)
- async_await_basic.html async_awaitを使った基本サンプル
- async_await.html api連携でのサンプル
- dataTable.html 一般ページャー　https://datatables.net/　活用
- dataTable(2).html 無限スクロールサンプル　https://datatables.net/　活用
- datepicker_select2.html datepickerとselect2の活用
- elixir(laravel-elixirのサンプル。laravel-elixir,laravel-elixir-webpack-officialでのコンパイル。```npx gulp```でgulpfile.jsが読み込まれる)
    - lib/PersonClass.js es6で書かれたexportするクラス
    - es6load.js importを使った他ファイルの読み込み
    - es6sample.html ブラウザへのデバッグ用のhtml
```
cd ./elixir
npx gulp
```

- js/bundle.js main.jsがコンパイルされたもの(現在未使用)
- js/main.js requireされたライブラリ(現在未使用)
- es6sample ECMAScript2015について
    - lib/PersonClass.js exportするクラス
    - es6sample.js let,const,アロー演算子,classの新しい書き方など
    - es6load.js importを使った他ファイルの読み込み
    - es6class.js classの書き方
    - es6modules.js exportを使った関数
    - es6sample.html ブラウザへのデバッグ用のhtml

- parcel 簡易コンパイル
    - dist 成果物がここに吐かれる
    - lib/PersonClass exportするクラス
    - es6load.js JSをimportする側
    - es6sample.html エントリーポイントするHTML


```
cd ./parcel
npx parcel es6sample.html
```
ex Server running at http://localhost:51478<br>
http://localhost:51478 にアクセス

- rollup
    - lib/PersonClass exportするクラス
    - bundle.js コンパイルされたJS
    - es6load.js JSをimportする側(生成される側のjs)
    - es6sample.html エントリーポイントするHTML
```
cd ./rollup
npx rollup es6load.js --file bundle.js --format iife
```

- sweetalert スタイリッシュなalert文(libsで読み込み)
- infinitescroll.html 無限スクロール　jquery.infinitescroll.min.js　活用
    - page2.html スクロール後のページは数字をつけ、あらかじめ作っておく必要がある。
- infinitescroll2.html 無限スクロール　オリジナル
- modal.html leanModalを使ったモーダルウィンドウ
- custom_modal.html 独自モーダルウィンドウ
- makeFormFromJS.js フォームにデータを自動入力するサンプル
- slidersample.html slider-pro slicker swiperを使ったスライダーのサンプル
- sticky.html スティッキーヘッダーのサンプル(一定スクロール量を越えるとヘッダに固定されるタイプのヘッダー)
- sugar.html JSライブラリSugarのサンプル
- togglesample.html toggleClass, slideToggle, fadeToggle, CSSのみでのtoggleのサンプル
- typeahead.html 入力補完用のライブラリ
- testtool テストデータの入力
- resources コンパイルを使ったJSのサンプル
- ckeditor.htm ビジュアルエディタckeditorを使ったサンプル
- typescript
    - sample(2).ts コンパイラの元
    - sample(2).js 生成物
    - libs モジュール
    - main.ts エントリーポイントのJS
```
# -t コンパイルする形式
# -sourceMap typescriptのままデバッグできるようになる
# --module commonjsを使えるように
npx tsc -t ES5 --module umd --sourceMap main.ts

```
- libs
    - css select2やjquery-uiのCSS
        - common.scss(css) jquery-uiやselect2のcss読み込み
    - js  色々なライブラリをインポート(具体的なlibraryはresouces.jsを参照)
    - webpack.mix.js laravel-mixを使ったコンパイラ

laravel-mixでのコンパイル
```
npm run dev
```


- public dataTable.htmlを受け付けるプログラムのサンプル
- gulpfile.js 下記コマンドでwebpackを使ったコンパイル　
```
npm run gulp webpack
```
