//exportで外から読み込めるようになる
//export class MemberClass{
//  constructor (id, name) {
//    this.id = id
//    this.name = name
//  }
//  printName(){
//    console.log(`${this.name} メンバーの中に入れている名前です。`)
//  }
//}
//export class MemberClass2{
//  constructor (id, name) {
//    this.id = id
//    this.name = name
//  }
//  printName(){
//    console.log(`${this.name} メンバー2の中に入れている名前です。`)
//  }
//}

class MemberClass{
  constructor (id, name) {
    this.id = id
    this.name = name
  }
  printName(){
    console.log(`${this.name} メンバーの中に入れている名前です。`)
  }
}

class MemberClass2{
  constructor (id, name) {
    this.id = id
    this.name = name
  }
  printName(){
    console.log(`${this.name} メンバー2の中に入れている名前です。`)
  }
}

export {
    MemberClass,
    MemberClass2 as m2
}
