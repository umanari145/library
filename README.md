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
- datepicker.html datepickerとselect2の活用
    - js/bundle.js main.jsがコンパイルされたもの
    - js/main.js requireされたライブラリ

- es6sample ECMAScript2015について
    - lib/PersonClass.js exportするクラス
    - es6sample.js let,const,アロー演算子,classの新しい書き方など
    - es6load.js importを使った他ファイルの読み込み
    - es6class.js classの書き方
    - es6modules.js exportを使った関数
    - es6sample.html ブラウザへのデバッグ用のhtml


- infinitescroll.html 無限スクロール　jquery.infinitescroll.min.js　活用
    - page2.html スクロール後のページは数字をつけ、あらかじめ作っておく必要がある。
- infinitescroll2.html 無限スクロール　オリジナル
- modal.html leanModalを使ったモーダルウィンドウ
- modal.html 独自モーダルウィンドウ
- makeFormFromJS.js フォームにデータを自動入力するサンプル
- slidersample.html slider-pro slicker swiperを使ったスライダーのサンプル
- sticky.html スティッキーヘッダーのサンプル(一定スクロール量を越えるとヘッダに固定されるタイプのヘッダー)
- togglesample.html toggleClass, slideToggle, fadeToggle, CSSのみでのtoggleのサンプル
- typeahead.html 入力補完用のライブラリ

- testtool テストデータの入力
- resources コンパイルを使ったJSのサンプル
    - ckeditor.htm ビジュアルエディタckeditorを使ったサンプル
- public dataTable.htmlを受け付けるプログラムのサンプル
- gulpfile.js 下記コマンドでwebpackを使ったコンパイル　
```
npm run gulp webpack
```
