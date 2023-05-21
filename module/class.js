class Mhs {
  constructor(name,birth){
    this.name = name;
    this.birth = birth;
  }
  age(){
    const now = new Date();
    const userDate = new Date(this.birth);
    let diffY = now.getFullYear() - userDate.getFullYear();
    let diffM = now.getMonth() - userDate.getMonth();
    if(diffM < 0){
      diffY -= 1;
      diffM = 12 - (userDate.getMonth() - now.getMonth());
    }
    let diffD = now.getDate() - userDate.getDate();
    if(diffD < 0){
      diffD = userDate.getDate() - now.getDate();
    }
    return `${diffY} years ${diffM} Months ${diffD} Days`;
  }
}
export default Mhs;
