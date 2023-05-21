const myArr = [2,4,5,6,8,4];
const underFive = myCallback(myArr,(x) => x < 5);
function myCallback(arr,callback){
  const newArr = [];
  let x;
  for(x of arr){
    if(callback(x)) newArr.push(x);
  }
  return newArr;
}
export default myCallback;