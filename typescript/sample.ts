const greeting = function(name: string):
string {
    return `hello${name}`
}

const your_name = "太郎"
console.log(greeting(your_name))

//基本の型定義
let str:string = "文字列"
let num:number = 1
let boolean:boolean = true
let obj:any = {}

//型未定義(型推論)
let str2 = "文字列"
let num2 = 1
let boolean2 = true
let obj2 = {}

//型変換
let str_exe:any = "1"
let num_exe:number=<number>str_exe


//型注釈
function greet(name: string): string{
    return 'こんにちは' + name
}
const greeting_msg = greet('落合')

//形無しでもOK
function greet2(name:string){
    return 'こんにちは' + name
}
const greeting_msg2 = greet2('aaaa')


//必須なものとそれ以外を記述
function greet3(name:string, suffix?:string){
    return 'こんにちは' + name + suffix
}
//以下のように書いても大丈夫
const greeting_msg3_1 = greet3('aaaa')
const greeting_msg3_2 = greet3('aaaa', 'bbb')
