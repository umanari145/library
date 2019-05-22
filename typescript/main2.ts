import * as Lib from './libs/index.js'

let person = new Lib.Person()
let mes:string = person.getMessage()
console.log(mes)
console.log('aabbb')

let member = new Lib.Member()
let msg2:string = member.getTalk()
console.log(msg2)
