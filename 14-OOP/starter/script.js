'use strict';
// LECTURES OBJECT ORIENTED PROGRAMMNING with JavaScript

//Constructor Functions and the new Operator

// 1. Empty object is created
// 2. function is called, `this` keyword = empty object
// 3. empty object is linked to prototype
// 4. function automatically returns empty object

// const Person = function (firstName, birthYear) {
//   //instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   //Methods, bad practice, do not put methods into objects
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 2017);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);
// //////////////////////////////////////////////////////////////////////////// Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';

// console.log(jonas, matilda);
// //////////////////////////////////////////////////////////////////////////// Prototypal Inheritance on Built-in Objects
// console.log(jonas.__proto__);
// // object.prototype (top of the prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);
// //////////////////////////////////////////////////////////////////////////// ES6 Classes
// console.log(`ES6 Classes Starting`);
// ////

// //Class expression
// // const PersonCl = class {};

// // Class Declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   //Getters
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   //Setters
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// // console.log(
// //   `Using the get age function: ${jessica.fullName} is ${jessica.age} years old`
// // );

// const walter = new PersonCl('Walter White', 1965);

// ////
// console.log(`ES6 Classes Ending`);
// ////
// //////////////////////////////////////////////////////////////////////////// Setters and Getters
// console.log(`Setters and getters lesson start`);
// //
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);
// //
// console.log(`Setters and getters lesson end`);
// //////////////////////////////////////////////////////////////////////////
// // Object.create
// console.log(`**Object.create Start**`);
// //
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();
// //
// console.log(`**Object.create END**`);
////////////////////////////////////////////////////////////////////////////Inheritance Between "Classes" Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
////////////////////////////////////////////////////////////////////////////  Inheritance Between Classes: ES6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  //Getters
  get age() {
    return 2022 - this.birthYear;
  }

  //Setters
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}

class StudentCL extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2022 - this.birthYear
      } years old, but as a student I feel more like ${
        2022 - this.birthYear + 10
      }`
    );
  }
}

const zac = new StudentCL('Zac Macek', 1988, 'Computer Science');
zac.introduce();
zac.calcAge();
/////////////////////////////////////////////////////////////////////////
// Inheritance Between Classes: Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

/////////////////////////////////////////////////////////////////////////
// Another Class Example // Encapsulation: Protected Properties and Methods // Private Class fields and methods

// 1) Public fields

// 2) Private fields

// 3) Public Methods

// 4) Private methods

class Account {
  // 1) Public Fields (instances)
  locale = navigator.language;
  _movements = [];

  // 2) Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
    this.#pin = pin;
    // this._movements = [];
    //
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface / 3) Public Methods
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4) Private Methods doesn't work yet
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
// acc1.#movements.push(250);
acc1.deposit(250);
acc1.withdraw(140);

acc1.requestLoan(1000);
acc1._approveLoan(1000);

console.log(acc1);
// console.log(acc1._pin);
console.log(acc1.getMovements());
// console.log(acc1.#approveLoan(100));
//////////////////////////////////////////////////////////////////////////
// Chaining Methods
console.log(`Chaining Methods! GO!!`);
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////// **CODING CHALLENGES**

// Coding Challenge 1

//part 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const car1 = new Car('BMW', 120);
// console.log(car1);

// const car2 = new Car('Mercedes', 95);
// console.log(car2);

// //part 2
// Car.prototype.accelerate = function () {
//   console.log(this.speed + 10);
// };

// car1.accelerate();
// car2.accelerate();

// // part 3
// Car.prototype.brake = function () {
//   console.log(this.speed - 5);
// };

// car1.brake();
// car2.brake();
//////////////////////////////////////////////////////////////////////////
// Coding Challenge 2
// console.log(`CODING CHALLENGE 2`);
// 1.
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
//   brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
//   // 2.
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   // 3.
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.speedUS = 50;
// console.log(ford);
//////////////////////////////////////////////////////////////////////////// CODING CHALLENGE 3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the Prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// ////////
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// /////
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);

// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.accelerate();

//////
