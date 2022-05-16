'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age} years old, and were born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // connsole.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = 'Zac';
calcAge(1988);
