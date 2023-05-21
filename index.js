import { Person, Professor, Mhs } from './module/inheritclass.js';

const andreas = new Person('Andreas','Yan');
console.log(andreas.fullName());

const liliana = new Professor('Liliana','Zuckermark',32786);
console.log(liliana.fullName());

const mitsuya = new Mhs('Mitsuya','Takashi',110701);
console.log(mitsuya.fullName());