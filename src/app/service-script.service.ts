import { Injectable } from '@angular/core';

@Injectable()
export class ServiceScriptService {
  ArrayDB :any = {};
  ArrayDB2 :any = {};
  constructor() { }

setPersonalData(array){
  this.ArrayDB=array;
}
setTransactionData(array){
  this.ArrayDB2=array;
  console.log(this.ArrayDB2)
}
getPersonalData(){
  return this.ArrayDB['name']+" "+this.ArrayDB['surname']+" "+this.ArrayDB['gender']+" "+this.ArrayDB['id']
}
getName(){
 return this.ArrayDB['name']
}
getSurname(){
 return this.ArrayDB['surname']
}
getGender(){
 return this.ArrayDB['gender']
}
getID(){
 return this.ArrayDB['id']
}
getTransactionData(){
  return this.ArrayDB2['cardno']+" "+this.ArrayDB2['holder']+" "+this.ArrayDB2['vcc']+" "+this.ArrayDB2['validDate']
}
getCardno(){
 return this.ArrayDB2['cardno']
}
getHolder(){
 return this.ArrayDB2['holder']
}
getVcc(){
 return this.ArrayDB2['vcc']
}
getValiddate(){
 return this.ArrayDB2['validDate']
}
}