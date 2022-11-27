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

const num = 1300;
const formatterNum = typeof num === 'number' ? num.toLocaleString() : '数値でお願いします。'
console.log(formatterNum);

// ||の本当の意味。orでも良いがは左側がfalseなら右側を返す
// 変数のdefaultの意味に近い

const number = 100;
const fee = number || '未設定';
console.log(fee)
