const person = {
  fullName: function(){
    return `${this.firstName} ${this.lastName}`;
  }
}

function Mhs(firstName,lastName,lang){
  this.firstName = firstName;
  this.lastName = lastName;
  this.lang = lang;
}

export { person, Mhs }; 