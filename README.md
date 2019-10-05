# library
主にJavaScriptの実験など

- ajax.html jquery1.5以降のajaxの書き方
- babel bableのサンプル
```
 npx babel main.js  --out-file compiled.js --presets=es2015
```
- when.html 並列ではあるが、順番は守りたい時のajaxの書き方
- fileapi.html FILEAPIを活用した画像アップロード
- promise.html 非同期処理をPromiseで使うパターン
- non_promise.html 非同期処理、Promiseを使わないパターン(Promiseを書かない時との比較)
- async_await_basic.html async_awaitを使った基本サンプル
- async_await.html api連携でのサンプル
- imageBinary.php  画像バイナリデータをhttpレスポンスを返す(読み込みはfileapi.php)
- imageBinaryS3.php  画像バイナリデータをhttpレスポンスを返す。S3経由(読み込みはfileapi.php)
- CommandPool.php S3へのバルクアップロード&バルクダウンロード
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

- js_scraping (puppeteerを使ったログイン)
    - config.json 設定ファイル(通常はgit外かも)
    - main.js エントリーポイント

- es6sample ECMAScript2015について
    - lib/PersonClass.js,MemberClass,currency exportするクラス
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
- requirejssamp
    - libs 読み込まれる側のJS(dateutil,strutilが実ファイル)
    - require.js ライブラリ
    - sample1(main).html シンプルなrequire.jsパターン
    - sample2(main2).html 内部requireパターン
    - sample3(main3).html config使用系
    - require_config.js main3の設定
    - sample4(build).html 1ファイルにまとめたパターン
```
 npx r.js -o name=main  out=build.js
 #設定ファイルでも可
```

- sweetalert スタイリッシュなalert文(libsで読み込み)
- html2canvas.min.js　htmlの画像
- htmltojpeg.php HTML→base64→PHP側でデコード→S3にアップロード
- infinitescroll.html 無限スクロール　jquery.infinitescroll.min.js　活用
    - page2.html スクロール後のページは数字をつけ、あらかじめ作っておく必要がある。
- infinitescroll2.html 無限スクロール　オリジナル
- modal.html leanModalを使ったモーダルウィンドウ
- custom_modal.html 独自モーダルウィンドウ
- loading.html 簡易ローディングサンプル
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
    - main(2).ts エントリーポイントのJS
    - index.html 読み込まれるJS require.jsの活用法も合わせて
```
# -t コンパイルする形式
# -sourceMap typescriptのままデバッグできるようになる
# --module commonjs,umdなど
npx tsc -t ES5 --module umd --sourceMap main.ts

```

- typescript-webpack typescript+webpackの活用
    - libs モジュール
    - main.ts エントリーポイントのJS
    - webpack.config.js
    - index.html 読み込まれるJS
```
#--mode development 主に高速化
npx run dev
#--mode production デバッグがしやすい
npx run prod
```    
- typescript-rollup rollup+typesciptの構成。基本構成は他と同じ
```
 npx rollup -c
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
