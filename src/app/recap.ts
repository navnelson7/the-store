import { summaryFileName } from "@angular/compiler/src/aot/util";

const username: string = "Juan Navarro";
const sum = (a: number, b : number) =>{
  return a+b;
}
sum(1,6);

class Person{
  //examp  for variable private
  //private age: number;
  age: number;
  lastName: string;
  constructor (age:number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  }
}

//other form
class People{
  constructor(public name:string, lastName: string){

  }
}

const juan = new Person(40, "Navarro");

const alguien = new People('Maria', 'Contreras');
