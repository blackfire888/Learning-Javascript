'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// use this API >> :   https://restcountries.com/v3.1/

// Our First AJAX Call: XMLHttpRequest "the old way"

const renderCountry = function (data, className = '') {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);
  const html = `
      <article class="country ${className}">
     <img class="country__img" src= "${data.flags.svg}">
     <div class="country__data">
       <h3 class="country__name"> ${data.name.official}</h3>
       <h4 class="country__region">${data.region}</h4>
       <p class="country__row"><span>👫</span>${(
         data.population / 1000000
       ).toFixed(1)} million</p>
       <p class="country__row"><span>🗣️</span>${languages[0]}</p>
       <p class="country__row"><span>💰</span>${currencies[0].name}</p>
     </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data); //use this to study the data you want to use.

//     // Render country 1
//     renderCountry(data);

//     //Get neighbor country
//     const neighbor = data.borders?.[0];

//     if (!neighbor) return;
//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/name/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('usa');

// // getCountryAndNeighbor('australia');
// // getCountryAndNeighbor('india');
// // getCountryAndNeighbor('japan');
//////////////////////////////////////////////////////////////////////////

// Promises and Fetch API

const request = fetch('https://restcountries.com/v3.1/name/usa');
// console.log(request);
// Consuming Promises

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country not found: ${response.status}`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    //handling rejected promises
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong: ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('usa');
});

// The Event Loop in practice

// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(res);
// });

// console.log('test end');
//////////////////

// Building a simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).then(x => console.error(x));
//////////////////////

// Promisifying Geolocation API

// console.log('Getting position');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));
//////////////////////////////////////////////////////////////////

//Consuming Promises with Async/Await
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI('japan');
console.log('FIRST');
//////////////////////////////////////////////////
