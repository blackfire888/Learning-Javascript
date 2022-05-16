'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

//Functions

function logger() {
    console.log(`My name is Zac`);
}

//calling, running, or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Assignment Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descUS = describeCountry('USA', 300, 'DC');
const descMexico = describeCountry('Mexico', 20, 'Mexico City');
const descJapan = describeCountry('Japan', 10, 'Tokyo');
console.log(descUS);
console.log(descMexico);
console.log(descJapan);

//Assignment Function Declarations vs Expressions
//function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
//function expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

const percPortugal2 = percentageOfWorld2(10);
const percChina2 = percentageOfWorld2(1441);
const percUSA2 = percentageOfWorld2(332);
console.log(percPortugal2, percChina2, percUSA2);

//Assignment Arrow Functions

const percentageOfWorld3 = population => (population / 7900) * 100;
const percUSA3 = percentageOfWorld3(332);
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
console.log(percPortugal3, percChina3, percUSA3);

// Functions Calling Other Functions

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation('Portugal', 10);
describePopulation('China', 1441);
describePopulation('USA', 332);


// Coding Challenges 1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win! (${avgDolphins} vs. ${avgKoalas})`)
    } else {
        console.log(`No team wins...`)
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(20, 40);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// Assignment Introduction to Arrays

const populations = [10, 1441, 330, 200];
console.log(populations);

console.log(populations[0])//can call single points in an array

console.log(populations.length === 4);

const percent1 = percentageOfWorld1(populations[0]);
const percent2 = percentageOfWorld1(populations[1]);
const percent3 = percentageOfWorld1(populations[2]);
const percent4 = percentageOfWorld1(populations[3]);
console.log(percent1, percent2, percent3, percent4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

//Assignment Basic Array Operations

//.push (places a new entry at the end of the array) , .unshift (places a new entry at the beginning of the array)

//.pop removes the last entry of the array, .shift removes the first entry in the array

const neighbors = ['Canada', 'Mexico'];
console.log(neighbors);

neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (neighbors[0] && neighbors[1] != 'Germany') {
    console.log(`Probably not a central European country :D`)
} else {
    console.log(`default`)
}

/*Notes: console.log(neighbors.indexOf(`Canada`)); (gives the position of the entry)
console.log(neighbors.includes('Canada')); (confirms with 'true or false' if the entry is in the array)
*/

neighbors[1] = 'Republic of Mexico' //This is how to change entries in an array (covered in 'Intro to Arrays' but was not part of the assignment!?)
console.log(neighbors);

// Coding Challenge 2

//const bill = 400;
//const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

function calcTip(bill) {
    if (bill <= 300 && bill >= 50) {
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.2;
        return tip;
    }

}

const bills = [125, 555, 44];
console.log(bills);

const tips = [(calcTip(bills[0])), (calcTip(bills[1])), (calcTip(bills[2]))];
console.log(tips);

const total = [(calcTip(bills[0]) + calcTip(tips[0])), (calcTip(bills[1]) + calcTip(tips[1])), (calcTip(bills[2]) + calcTip(tips[2]))];
console.log(total);//bonus

//Introduction to Objects

/*const myCountry = {
    country: 'USA',
    capital: `D.C.`,
    language: 'English',
    population: '330',
    neighbors: ['Canada', 'Mexico']

};
console.log(myCountry);
//dot vs bracket notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`);

myCountry.population = 332;
console.log(myCountry.population);
myCountry['population'] = 330;
console.log(myCountry['population']);
*/
// Object Methods

const myCountry = {
    country: 'USA',
    capital: `D.C.`,
    language: 'English',
    population: '330',
    neighbors: ['Canada', 'Mexico'],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`

    },
    checkIsland: function () {
        return this.isIsland = this.neighbors.length === 0 ? true : false;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// Coding Challenges 3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.BMI = this.mass / (this.height ** 2);
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.BMI = this.mass / (this.height ** 2);
    }
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s!`);
} else {
    console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s!`);
}

//The For Loop

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 50; rep++) {
    console.log(`Voter number ${rep} is voting!`);
};

//looping arrays, breaking and continuing

const populations2 = [10, 1441, 330, 200];
const percentages2 = [];

for (let i = 0; i < populations2.length; i++) {
    const perc = percentageOfWorld1(populations2[i]);
    percentages2.push(perc);
}
console.log(percentages2);

/* continue and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < pop.length; i++) {
    if(typeof pop[i] !== 'string') continue;
    console.log(pop[i], typeof pop[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < pop.length; i++) {
    if(typeof pop[i] !== 'number') break;
    console.log(pop[i], typeof pop[i]);
}

*/

//Looping Backwards and Loops in Loops
const x = [
    1,
    'word',
    true,
];

for (let i = x.length - 1; i >= 0; i--) {
    console.log(x[i]);
}//loops backwards

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repitition ${rep}`);
    }
}//loop inside loop


//ASSIGNMENT LOOPING BACKWARDS AND LOOPS IN LOOPS
const listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < (listOfNeighbors.length); i++) {
    for (let n = 0; n < listOfNeighbors[i].length; n++) {
        console.log(`Neighbor: ${listOfNeighbors[i][n]}`);
    }
};

//the while loop
let rep = 1;
while (rep <= 10) {
    console.log(`While: Lifting weights repitition ${rep}`);
    rep++;
}
const percentages3 = [];
let i = 0

while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);//i'm not a fan of the while loop but i see its potential

//Coding Challenge 4

const bills2 = [22, 295, 176, 440, 37, 150, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

// function calcTip(bill) {
//     if (bill <= 300 && bill >= 50) {
//         const tip = bill * 0.15;
//         return tip;
//     } else {
//         const tip = bill * 0.2;
//         return tip;
//     }

// }

for (let i = 0; i < bills2.length; i++) {
    const tip = calcTip(bills2[i]);
    tips2.push(tip);
}
console.log(tips2);

for (let i = 0; i < bills2.length; i++) {
    const tote = (bills2[i] + tips2[i]);
    totals2.push(tote);
}

console.log(totals2);

//CC4 Bonus:
const calcAverage2 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
calcAverage2([2, 3, 6]);
console.log(calcAverage2(totals2));
