class Person {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}

class Professor extends Person {
  constructor(firstName,lastName,nip){
    super(firstName,lastName);
    this.nip = nip;
  }
}

class Mhs extends Person {
  constructor(firstName,lastName,nim){
    super(firstName,lastName);
    this.nim = nim;
  }
}



export { Person, Professor, Mhs };