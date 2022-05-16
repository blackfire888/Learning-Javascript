// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log("testing");

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
//Using Google, StackOverflow, and MDN
//PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

//1) Understanding the problem
// - what is the temp amplitude? Answer: difference between highest and lowest temp
//How to compute max and min temperatures?
// - what's a sensor error? and what to do?

//2) Breaking up into sub-problems
//how to ignore errors?
//find max value in temp array
//find min value in temp array
//- subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem 2:
//function should receive 2 arrays of temps

//1) understanding the problem
// with 2 arrays, shouold we implement the functionality twice? NO! just merge the two arrays.

//2) breaking up into sub-problems
// Merge 2 arrays
const temps2 = [1, 2, 3, -1, -6, 5, 15];
const array3 = temperatures.concat(temps2);
console.log(array3);

//Debugging
//-----

//CODING CHALLENGE 1
//-----

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //C) FIX
    value: Number(prompt("Degrees celsius: ")),
  };
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) IDENTIFY
// console.log(measureKelvin());

//----CODING CHALLENGE DEVELOPER SKILLS AND EDITOR SETUP
const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}ºC in ${i + 1}
      days`);
  }
};

printForecast(arr);
printForecast(arr2);
//i have no idea why this works but I got it to work. for 1 of the two arrays.

//teacher solution
// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `...${arr[i]}ºC in ${i + 1} days`;
//   }
//   console.log(str);
// };

// printForecast(arr);
// printForecast(arr2);
