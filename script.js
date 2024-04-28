"use strict";
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`)
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`)
// };

// transformer("JavaScript is the best!", upperFirstWWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// const greeterHey = greet("Hey");
// greeterHey("Jonas");
// greeterHey("Steven");

// greet("Hello")("Jonas");

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNumber, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
//   },
// };
// lufthansa.book(239, "Zaurbek Shapiev");
// lufthansa.book(635, "John Smith");

// const eurowings = {
//   name: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// // book(23, "Sarah Williams");
// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);
//Challange #1
// const addTAX = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAt = addTAX(0.23);
// console.log(addVAt(100));
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),

//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(poll.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${poll.answers}.`);
//     }
//   },
//   registerNewAnswer() {
//     console.log(`What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++`);
//     let answer = Number(prompt("Write your answer below"));
//     if (answer >= 0 && answer <= 3) {
//       poll.answers[answer]++;
//     } else alert("Write a number between 0-3");

//     this.displayResults("string");
//   },
// };
// document
//   .querySelector(".answer-poll--button")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// // registerNewAnswer(answer);
//////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

*/
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
h();
f();

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);

(function () {
  const header = document.querySelector(".h1");
  header.style.color = "red";
  header.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
