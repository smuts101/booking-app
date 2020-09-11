import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  ArrayDB = []
  constructor() { }

setPersonalData(array:[]){
  this.ArrayDB.push(array);
  console.log(this.ArrayDB)
}


}