import Mhs from './module/object.js';

const mitsuya = new Mhs('Mitsuya','Takashi','EN');
const draken = new Mhs('Ryuzi','Draken','EN');
console.log(mitsuya);
console.log(draken);
Object.defineProperty(draken, 'lang', {writable: true});
draken['lang'] = 'FRA';
console.log(draken);
