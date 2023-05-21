class Mhs {
<<<<<<< HEAD
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
    }
    age() {
        let diffY = new Date().getFullYear() - new Date(this.birth).getFullYear();
        let diffM = new Date().getMonth() - new Date(this.birth).getMonth();
        if (diffM < 0) {
            diffY = diffY - 1;
            diffM = 12 - (new Date(this.birth).getMonth() - new Date().getMonth());
        }
        let diffD = new Date().getDate() - new Date(this.birth).getDate();
        if (diffD < 0) { diffD = new Date(this.birth).getDate() - new Date().getDate(); }
        return `${diffY} Years ${diffM} Months ${diffD} Days`;
    }
}


export default Mhs;
=======
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
>>>>>>> 0f77a61ed0349da69bab7d6f7f9b3b3ebc3bf79d
