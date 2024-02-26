'use strict';

/*
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never do this
  //this.calcAge = function () {
  //console.log(2024 - this.birthYear);
  //};
};
// 1. object {} is created
// 2. function is called, this= {}
// 3. link {} to prototype
// 4. function automatically return {}

const Maryam = new Person('Maryam Arshad', 1996);
console.log(Maryam);

const Noman = new Person('Noman Ejaz', 1996);
console.log(Noman);

console.log(Noman instanceof Person);
console.log(Maryam instanceof Person);

/////////////////////////////////////////////////////////////

// prototype
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
Maryam.calcAge();
Noman.calcAge();

console.log(Maryam.__proto__);
console.log(Noman.__proto__);

console.log(Maryam.__proto__ === Person.prototype);
console.log(Noman.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Maryam));
console.log(Person.prototype.isPrototypeOf(Noman));
console.log(Person.prototype.isPrototypeOf(Person));

////// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(Maryam, Noman);

console.log(Maryam.hasOwnProperty('birthYear'));
console.log(Noman.hasOwnProperty('firstName'));
console.log(Maryam.hasOwnProperty('species'));
console.log(Noman.hasOwnProperty('species'));
console.log(Maryam.__proto__.__proto__);
console.log(Noman.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

*/

////////////////////////////////////////////////////////
//// prototypal inheritance on built in objects

const arr = [2, 3, 2, 4, 3, 5, 6, 7, 6, 9, 8, 9, 1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
