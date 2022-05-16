'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//--

//Delayed depature from FAO to TXL
//Arrival from BRU to FAO
//Delayed Arrival from HEL to FAO
//Departure from FAO to LIS
const getCode = str => str.slice(0, 3).toUpperCase();

console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    40
  );
  console.log(output);
}

/////////////////////////////////////////////
//--

// Data needed for first part of the section

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// }; //was originally inside of restaurant group but is now logically called by openingHours inside restaurant
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // ES6 enhanced object literals
//   openingHours,

//   // order: function (starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   }, //this is the same as the note above

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
//   },

//   //--
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
// //--End of restaurant array of functions
// //**----------**//

// // const rest1 = {
// //   name: 'Capri',
// //   numGuests: 0,
// // };
// // const rest2 = {
// //   name: 'La Piazza',
// //   owner: 'Giovanni',
// // };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // //Nullish
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // // rest2.owner = rest2.owner && '<ANONYMOUS>';
// // rest1.owner &&= '<ANONYMOUS';
// // rest2.owner &&= '<ANONYMOUS';

// // console.log(rest1);
// // console.log(rest2);

// //logical operators can use any data type, return any data type, and use short-circuiting
// // console.log(3 || 'Zac');
// // console.log('' || 'Zac');
// // console.log(true || 0);
// // console.log(undefined || null);

// // restaurant.numGuests = 23;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log('---AND---');
// // console.log(0 && 'Zac'); //displays 0 because falsy
// // console.log(5 && 'Zac'); //displays 'Zac' because 5 is truthy

// // console.log('Hello' && 23 && null && 'Zac');

// // //Practical example
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushrooms', 'spinach');
// // }
// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// //**----**//

// //Nullish Coalescing Operator (??) (NOT 0 or '')
// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);

// //------------
// // 1) Destructuring
// // //Rest Pattern and Parameters
// // //REST, because on LEFT side of =
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, otherFood);
// // //--
// // //Objects
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // // 2) Functions
// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };

// // add(2, 3);
// // add(5, 3, 7, 2);

// // const x = [23, 5, 7];
// // add(...x);

// // //restaurant
// // restaurant.orderPizza('mushrooms', 'onion', 'olives');

// //The Spread Operator (...)
// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // console.log(...newArr);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // //Copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // //join multiple arrays
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(`The full menu is ${menu}`);

// // //Iterables: arrays, strings, maps, sets. NOT objects
// // const str = 'Zac';
// // const letters = [...str, ' ', 'M.'];
// // console.log(letters);

// //real-world example

// // const ingredients = [
// //   prompt(`Let's make pasta! Ingredient 1?`),
// //   prompt(`Ingredient 2?`),
// //   prompt(`Ingredient 3?`),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);
// //--
// //Objects
// // const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Gieseppe' };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);
// //--
// //Destructuring Objects
// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Via del Sole, 21',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // //SWITCHING VARIABLES
// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);
// // //--
// // //DESTRUCTURING
// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);
// // //----

// // //default values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // // mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // console.log(a, b);

// // //---
// // //nested objects
// // const { fri } = openingHours;
// // console.log(fri);

// //---

// // //Coding Challenge 1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',

//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// //5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log('Team 1 is more likely to win');

// //Looping Arrays: the for-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
// // console.log(...menu.entries());
// //------

// //Optional chaining
// console.log(restaurant.openingHours.mon?.open);
// //-----

// //looping objects: Object keys, values, and entries
// console.log(`---LOOPING OBJECTS---`);
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// //property Values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const x of entries) {
//   console.log(x);
// }

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// console.log(`---FINISHED LOOPING---`);
// //---
// console.log(`\n`); //breaks up lines in google chrome console
// console.log(`\n`);
// //---
// //CODING CHALLENGE 2
// console.log(`---CODING CHALLENGE 2---`);
// //1). Loop over game.scored array
// for (const [i, el] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${el}`);
// //2). Use a loop to calculate the average odd and log it to the console.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// console.log(average);
// average /= odds.length;
// console.log(average);

// //3). Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// console.log(`---Individiual logs---`);
// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.x}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
// console.log(`---LOOPED logs---`);

// const entriesodds = Object.entries(game.odds);
// // console.log(entriesodds);
// for (const game of entriesodds) {
//   console.log(`Odd of victory ${game}`);
// } //my solution^^^
// console.log(`---Teacher Solution---`);
// //teachers solution
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// //---
// console.log(`\n`);
// console.log(`\n`);
// //--
// // Sets
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);
// console.log(new Set('Zac'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));

// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// console.log(ordersSet[0]); //does not work returns undefined

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('ZacMacek').size);
// //--
// console.log(`\n`); //breaks up lines in google chrome console
// console.log(`\n`);
// //--
// ////////////////////////////////
// //Maps: Fundamentals
// // const rest = new Map();
// // rest.set('name', 'Classico Italiano');
// // rest.set(1, 'Firenze, Italy');
// // rest.set(2, 'Lisbon, Portugal');
// // console.log(rest);
// // rest
// //   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// //   .set('open', 11)
// //   .set('close', 23)
// //   .set(true, 'We are open :D')
// //   .set(false, 'We are closed :(');

// // console.log(rest.get('name'));
// // console.log(rest.get(true));
// // console.log(rest.get(1));
// // console.log(rest);

// // const time = 8;
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// // rest.set([1, 2], 'Test');
// // console.log(rest.has('categories'));
// // // rest.delete(2);
// // console.log(rest);

// /////////////////////////
// //--
// //Maps: Iteration
// // const question = new Map([
// //   ['question', 'What is the best programming language in the world?'],
// //   [1, 'C'],
// //   [2, 'Java'],
// //   [3, 'JavaScript'],
// //   ['correct', 3],
// //   [true, 'Correct'],
// //   [false, 'Try again!'],
// // ]);
// // console.log(question);

// // //Convert object to map

// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);
// // //Quiz app
// // console.log(question.get('question'));

// // // for (const [key, value] of question) {
// // //   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// // // }

// // // const answer = Number(prompt('Your answer'));
// // // console.log(answer);

// // // console.log(question.get(question.get('correct') === answer));

// // // if (answer === 3) {
// // //   console.log(question.get(true));
// // // } else {
// // //   console.log(question.get(false));
// // // }

// // //convert map to array
// // console.log([...question]);
// // console.log(question.entries());
// // console.log(question.keys());
// // console.log(question.values());
// // /////////////////////////////////
// // //--
// // CODING CHALLENGE 3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// // 1.Create an array 'events' of the different game events that happened (no duplicates)
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //--
// //2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);
// //--
// //3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// //--
// console.log(
//   `An event happened, on average every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);

// //4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }
// ////////////////////
// //--
// // Working with Strings Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log('B737'[0]);
// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal')); //Case sensitive

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7)); //can specify the beginning and the end of a slice

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Zac'));
// console.log(typeof new String('Zac'));
// ///////////////////////
// //--
// // Working with Strings 2
// //Fix capitalization in name
// const passenger = 'zAcHarY';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing emails
// const email = 'zfmacek@hotmail.com';
// const loginEmail = '  Zfmacek@Hotmail.Com \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);
// //--
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing

// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// //Booleans
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('Boeing'));
// console.log(plane2.includes('Airb'));

// if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   console.log('Part of the NEW airbus family');
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
// ///////
// //--
// //Working with Strings Part 3
// console.log('a+very+nice+string'.split('+'));
// console.log('Zac Macek'.split(' '));
// const [firstName, lastName] = 'Zac Macek'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   let names = name.split(' ');
//   let namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //these 2 lines of code deliver the same result
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('zachary macek');

// //padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+'));
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// //--
// console.log('\n');
// //--
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(4000500020003000));

// //repeat
// const message3 = 'Bad Weather... All Departures Delayed... ';
// console.log(message3.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(9);

// ////////////
// //--
// //CODING CHALLENGE 4
// /*
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// --------------------
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// --------------
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!

// */
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// //1.)
// const text = document.querySelector('textarea').value;

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     // console.log(row, first, second);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
//   }
// });
