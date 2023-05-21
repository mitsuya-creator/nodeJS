class Mhs {
  constructor(firstName){
    this._firstName = firstName ;
  }
  get getfirstName(){
    return this._firstName;
  }
  set cfirstName(x) {
    this._firstName = x;
  }
}

class Details extends Mhs{
  constructor(firstName,lastName){
    super(firstName);
    this.lastName = lastName;
  }
  fullName() {
    return `${this._firstName} ${this.lastName}`;
  }
}

const hina = {
  _firstName : 'hina',
  lastName : 'tachibana'
}


export { Mhs, Details, hina };