
console.log("---------letとconst---------")
let name = "太朗"
console.log(name)
//再宣言は下記のようなエラーが起きる Uncaught SyntaxError: Identifier 'name' has already been declared
//let name = "二郎"
//再代入は問題ない
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
//もしスコープの外で宣言するとエラー
//Uncaught ReferenceError: x is not defined
//console.log(x)
const sample_obj = {
  name: 'yamada',
  age: 21
};
//constでも配列やobjはプロパティ変更は可能
sample_obj.age= 34

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
//{}の場合はreturnいる
const double2 = (x) => {
  return x * 2
}
console.log(double2(2))
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

//分割代入
const func1 = ()=> {
  let obj = {};
  obj.hobby = "basketball";
  obj.age = 23;
  return obj;
}

// PHPで言うlist
let {hobby, age} = func1();
console.log(`--PHP-list風--`);
console.log(`--趣味-${hobby}--年齢 ${age}才--`);

console.log(`--ハッシュの受け方--`);
// ハッシュの受け方
const func2= ({name, age, email}) => {
  console.log(`--名前は${name}です。--`);
  console.log(`--年齢は${age}です。--`);
  console.log(`--メールアドレスは${email}です。--`);
}

func2({
  name: '山田太郎',
  age: 34,
  emai: 'sample@gmail.com'
})

/**
 * スプレッド構文 
 */
console.log('---スプレッド構文--')
//配列の展開
const sample_arr = [1, 2];
console.log(sample_arr);

//...ドット3つだとsample_arr[0], sample_arr[1]
// などのように全てを展開するのと同じ仕様になる
console.log(...sample_arr);

const sampleFunc = (num1, num2) => console.log(num1 + num2);
sampleFunc(sample_arr[0], sample_arr[1])
// 同じ書き方
sampleFunc(...sample_arr)

const sample_arr2 = [1, 2, 3, 4, 5];

const[num1_1, ...sample_arr3] = sample_arr2
console.log(num1_1)
console.log(sample_arr3) //2から5までが入る

// 配列のコピー
const arr4 = [10, 20];
const arr5 = [30, 40];
//deepcopy
const arr6 = [...arr4]
arr6[1] = 11;
console.log(arr4) // 影響がない
console.log(arr6)

// array_merge的な
const arr7 = [...arr4, ...arr5];
console.log(arr7)