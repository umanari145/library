var greeting = function (name) {
    return "hello" + name;
};
var your_name = "太郎";
console.log(greeting(your_name));
//基本の型定義
var str = "文字列";
var num = 1;
var boolean = true;
var obj = {};
//型未定義(型推論)
var str2 = "文字列";
var num2 = 1;
var boolean2 = true;
var obj2 = {};
//型変換
var str_exe = "1";
var num_exe = str_exe;
//型注釈
function greet(name) {
    return 'こんにちは' + name;
}
var greeting_msg = greet('落合');
//形無しでもOK
function greet2(name) {
    return 'こんにちは' + name;
}
var greeting_msg2 = greet2('aaaa');
//必須なものとそれ以外を記述
function greet3(name, suffix) {
    return 'こんにちは' + name + suffix;
}
//以下のように書いても大丈夫
var greeting_msg3_1 = greet3('aaaa');
var greeting_msg3_2 = greet3('aaaa', 'bbb');
