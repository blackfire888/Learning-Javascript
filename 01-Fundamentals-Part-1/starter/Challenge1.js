/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.69;
//Mark's mass and height

const massJohn = 92;
const heightJohn = 1.95;

let markBMI = massMark / (heightMark ** 2);
console.log(markBMI, "above is Mark's Body Mass");

let johnBMI = massJohn / (heightJohn ** 2);
console.log(johnBMI, "above is John's Body Mass");

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//Coding Challenge 2

if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
}

//Coding Challenge 3

const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;

const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;

let dolphinsAvg = (dolphins1 + dolphins2 + dolphins3) / 3;

let koalasAvg = (koalas1 + koalas2 + koalas3) / 3;

console.log(`the dolphins average score was ${dolphinsAvg}`);
console.log(`the koala's average score was ${koalasAvg}`);

if (dolphinsAvg > koalasAvg) {
    console.log(`The Dolphins win!`)
} else if (koalasAvg > dolphinsAvg) {
    console.log(`The Koalas win!`)
} else {
    console.log(`The teams are tied! play a game against eachother!`)
}

//Coding Challenge 4
/*
let bill = Number(prompt(`How much is the bill?`,));

const tip15 = (bill * .15);
const tip20 = (bill * .2);
console.log(tip15, tip20)
if (bill >= 50 && bill <= 300) {
    const totalCost = (bill + tip15);
    console.log(`The total cost is ${bill} plus ${tip15} which equals ${totalCost}`);
} else if (bill > 300) {
    const totalCost = (bill + tip20);
    console.log(`the total cost is ${bill} plus ${tip20} which equals ${totalCost}`);
} else {
    console.log(`tip not necessary`);
}
*/ //i used if else statements here because i have no clue how i would do a ternary operator for this same result

const bill = 400;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
