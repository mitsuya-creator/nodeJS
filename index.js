import Mhs from './module/getage.js';

const mitsuya = new Mhs('mitsuya','2001-07-11');
console.log(`name: ${mitsuya.name}`);
console.log(`age: ${mitsuya.age()}`);