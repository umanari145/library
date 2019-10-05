
console.log("---------letとconst---------")
let name = "太朗"
console.log(name)
//再宣言は下記のようなエラーが起きる Uncaught SyntaxError: Identifier 'name' has already been declared
//let name = "二郎"
//再宣言は問題ない
name = "二郎"

const sampleId = "9211"
console.log(sampleId)
//再代入はエラー
//Uncaught TypeError: Assignment to constant variable.
//sampleId  = "11111"
console.log("---------ブロックスコープ、初期値、関数、アロー関数---------")
//ブロックスコープ
{
  let x = 1
  console.log(x)
}
//エラー
//Uncaught ReferenceError: x is not defined
//console.log(x)

//初期値の設定
function joinChannnel(name = "長渕")
{
  console.log(name)
}

joinChannnel()
joinChannnel('清原')


//関数の書き方
const add = function(a, b) {
  return a+b
}

console.log(add(10,11))

//アロー関数
/*
const double = function(x){
    return x + x
}*/
//上記と全く同じ
const double = x => (x+x)
console.log(double(2))

/*
const add2 = function(a, b) {
    return a + b
}*/
//上記と全く同じ
const add2 = (a, b) => (a + b)
console.log(add2(2,3))

/*
const rand = function() {
    return Math.random()
}*/
//上記と全く同じ
const rand = () => Math.random()
console.log(rand())

console.log("---------thisの範囲,bindなど---------")

const person = {
  name: '太郎',
  lazy_hello:function(){
    //thisが指しているのはPerson
    console.log(`${this.name}を画面に出力します。1`)
  }
}
person.lazy_hello()

setTimeout(function(){
    console.log("---------thisの範囲,bindなど(遅延のためここに出てくる)---------")
}, 1000)



const person2 = {
  name: '太郎',
  lazy_hello:function(){
    setTimeout(function(){
      //thisが指しているのはwindowなため画面に出ない
      console.log(`${this.name}を画面に出力します。2`)
  }, 2000)
  }
}
person2.lazy_hello()

const person3 = {
  name: '太郎',
  lazy_hello:function(){
    setTimeout(function(){
      //bindによってスコープをコントロール
      console.log(`${this.name}を画面に出力します。3`)
  }.bind(this), 2000)
  }
}
person3.lazy_hello()

const person4 = {
  name: '太郎',
  lazy_hello:function(){
    setTimeout(() =>
      //アロー関数だとスコープが参照元になる
      console.log(`${this.name}を画面に出力します。4`)
    , 2000)
  }
}
person4.lazy_hello()
