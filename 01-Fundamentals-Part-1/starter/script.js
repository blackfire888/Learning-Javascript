let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Zac');
console.log(23);

let firstName = "Zac";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// assignment Values and Variables
const country = 'USA';
const continent = 'North America';
let populationUS = 329.5

console.log(country);
console.log(continent);
console.log(populationUS);

// assignment Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof populationUS);
console.log(typeof country);
console.log(typeof language);

// assignment let, const and var

language = 'English'

//let variables have been changed to const

// assignment Basic Operators

console.log(populationUS / 2);
// population divide by 2
const populationFinland = 6

console.log(populationUS, populationUS + 1, populationUS > populationFinland); //should show populationUS, PopulationUS plus 1, and a true or false of PopulationUS greater than PopulationFinland

const avgPopulation = 33;
console.log(populationUS > avgPopulation);

const description1 = country + ' is in ' + continent + ', and its ' + populationUS + ' million people speak ' + language;

console.log(description1);

// Assignment Strings and Template Literals

const description2 = `The ${country} is in ${continent}, and its ${populationUS} million people speak ${language}`;
console.log(description2);

//Class Taking Decisions: if / else Statements
/*
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
*/

//Assignment Taking Decisions
if (populationUS > 33) {
    console.log(`The ${country}'s population is above average`);
} else {
    console.log(`The ${country}'s population is ${33 - populationUS} million below average`)
}

/*//Assignment Type Conversion and Coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2); //this section is bad coding. you would never want to  use this kind of thing in professional code
*/

//----------------->

//Assignment Equality Operators
/*
const numNeighbors = Number(prompt(`How many neighbor countries does your country have?`,));//solves part 1

if (numNeighbors === 1) {
    console.log(`Only 1 border!`)//solves for part 2
} else if (numNeighbors > 1) {
    console.log(`More than 1 border`);//solves for part 3
} else {
    console.log(`No borders`);//solves for part 4
}
*/
//part 8 we should use the triple equals operator because we want a clear answer, and we need to convert numNeighbors to a Number with type conversion because originally the program thought it was a string.

//Assignment Logical Operators

if ((populationUS < 50) && language && isIsland) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet your criteria `);
}
//because isIsland is already false, there is no need for a NOT(!) condition in order to achieve the correct result

//Assignment the switch Statement
/*
const language2 = prompt(`What language do you speak?`,);

switch (language2) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'english':
        console.log(`3rd place`);
        break;
    case 'hindi':
        console.log(`number 4`);
        break;
    case 'arabic':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
}
*/
//Assignment The Conditional Operator

const pop = populationUS >= 33 ? `${country}'s population is above average` : `${country}'s population is below average`
console.log(pop)
