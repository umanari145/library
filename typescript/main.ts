//
//main.ts:1:13 - error TS1005: ',' expected.
//
//1 import {libs.Person} from './libs/Person'
//              ~


import {libs.Person} from './libs/Person'

let person = new libs.Person()
let mes:string = person.getMessage()
console.log(mes)
console.log('aabbb')
