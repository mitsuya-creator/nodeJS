import { Mhs, person } from './module/function.js';

const mitsuya = new Mhs('Mitsuya','Takashi','EN');
const draken = new Mhs('Ryuzi','Draken','EN');

console.log(mitsuya);
console.log(person.fullName.call(mitsuya));
console.log(draken);
console.log(person.fullName.call(draken));
