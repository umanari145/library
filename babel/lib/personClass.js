//exportで外から読み込めるようになる
export class PersonClass{
  constructor (id, name,age) {
    this.id = id
    this.name = name
    this.age = age
  }
  printName(){
    console.log(`${this.name} クラスの中に入れている名前です。`)
  }
}
