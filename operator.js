var var1;
var var2;

//適当に変数を入れて正常系が出力されるかをテストしてみよう
//var1 = 'aaaaa';
//undefinedなため'hoge'
console.log("三項演算子");
var2 = (var1)? var1:'hoge';
console.log(var2);

//エルビス演算子でかくと下記のようになる
console.log("エルビス")
var2 = var1 || 'hoge';
console.log(var2);
