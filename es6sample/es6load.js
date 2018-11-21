import { sum } from './es6modules.js';
console.log(sum(1,2))

import { PersonClass } from './lib/personClass.js'
const person = new PersonClass(6,'落合');
person.printName()
