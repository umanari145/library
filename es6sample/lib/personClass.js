//exportで外から読み込めるようになる
//export default class PersonClass{
//  constructor (id, name) {
//    this.id = id
//    this.name = name
//  }
//  printName(){
//    console.log(`${this.name} クラスの中に入れている名前です。`)
//  }
//}
// ↓ 次のように書くこともできる
class PersonClass{
  constructor (id, name) {
    this.id = id
    this.name = name
  }
  printName(){
    console.log(`${this.name} クラスの中に入れている名前です。`)
  }
}
//自動名前つき
export default PersonClass
