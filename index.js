import { Mhs, Details, hina } from './module/inheritclass.js';

const mitsuya = new Mhs('mitsuya');
console.log(mitsuya);
mitsuya.cfirstName = 'riuzy';
console.log(mitsuya);
console.log(mitsuya.getfirstName);

const mitsuya1 = new Details('mitsuya','takashi')
console.log(mitsuya1.fullName());


console.log(hina);
console.log(mitsuya1.fullName.call(hina));

//console.log(`name: ${mitsuya.name}`);
//console.log(`age: ${mitsuya.age()}`);