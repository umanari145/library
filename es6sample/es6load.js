import { sum } from './es6modules.js';
console.log(sum(1,2))

//defaultクラスの読み込み
import PersonClass from './lib/personClass.js'
const person = new PersonClass(6,'落合');
person.printName()

//名前つきclass
import {MemberClass} from './lib/MemberClass.js'
const p = new MemberClass(5,'清原');
p.printName()

//名前つきclass
import {MemberClass as m1, m2} from './lib/MemberClass.js'
const m1obj = new m1(55,'松井');
const m2obj = new m2(18,'桑田');
m1obj.printName()
m2obj.printName()


import * as mallobj from './lib/MemberClass.js'
const m1obj2 = new mallobj.MemberClass(17,'槇原');
const m2obj2 = new mallobj.m2(11,'斎藤');
m1obj2.printName()
m2obj2.printName()

//default関数の読み込み
import currency from './lib/currency.js'

//defaultがないので{}なしでは取り出せない
import {currency2,cur2_1} from './lib/currency2.js'
//こちらでasをつけることも可能
import {currency2 as cur2} from './lib/currency2.js'

//関数群をobjectにまとめることも可能
import * as curobj from './lib/currency2.js'

//defaultと名前つき
import currency3, {currency3_1 as cur3_1} from './lib/currency3.js'


//1つだけ取り出すことも可能
//import {currency2} from './lib/currency2.js'
currency(100)

currency2(200)
cur2_1(300)

cur2(999)

curobj.currency2(1234)
curobj.cur2_1(4321)

currency3(2345)
cur3_1(8768)
