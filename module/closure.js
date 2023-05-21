let counter = (function(){
  let counter = 0;
  return () => {counter+=1; return counter;}
})();

console.log(counter());
console.log(counter());
console.log(counter());