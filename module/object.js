function Mhs(firstName,lastName,lang){
  this.firstName = firstName;
  this.lastName = lastName;
  this.lang = lang;
  this.fullName =  function(){
    return `${this.firstName} ${this.lastName}`;
  }
}
export default Mhs;