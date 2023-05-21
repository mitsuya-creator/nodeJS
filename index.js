import myCallback from './module/callback.js';

const score = myCallback([3,4,6,1,2,78,1,22,5], x => x > 10);

console.log(score);