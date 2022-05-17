// console.log(typeof 123);
// console.log(typeof "abc");

// let firstName = "Roko";
// console.log(firstName);

// const greeting = "hello " + firstName;
// console.log(greeting);

// let number = 0;
// number++;
// console.log(number);

// let brutto = 8 * 21 * 12;
// let netto = brutto * (1 - 0.15);
// console.log(netto);

// let pay = 12;
// let hours = 8;
// let days = 21;
// let tax = 0.15;

// brutto = 8 * 12 * 21;

// netto = brutto * (1 - tax);

// console.log(netto);

// let apartmantPrice = 80 * 6688;

// console.log(apartmantPrice);

// let czkPrice = apartmantPrice * 25;

// let years = (apartmantPrice * 0.85) / (800 * 12);

// years = Math.round(years);
// console.log(years);

// const msg = "Your mortage will last " + years + " years";
// console.log(msg);

// const classHours = 7 * 4 + 3;

// const studyHours = classHours * 0.3;

// let totalStudyTime = (classHours + studyHours) * 12;

// totalStudyTime = Math.round(totalStudyTime);

// let studyMessage = "Total study time " + totalStudyTime + " hours";

// console.log(studyMessage);

// const wallWidth = 245;
// const frameWidth = 175;

// const clinch1 = (wallWidth - frameWidth) / 2 + 10;
// const clinch2 = (wallWidth - frameWidth) / 2 + frameWidth / 2;
// const clinch3 = (wallWidth - frameWidth) / 2 + (frameWidth - 10);

// const photoWidth = 4250;
// const photoHeight = 2040;
// const frameHeight = (photoHeight / photoWidth) * frameWidth;
//  console.log(frameHeight);

// let population2000 = 551281;
// let population2001 = population2000 * (1 - 0.014) ** 100;
// console.log(population2001);

// const birthYear = Number(prompt("enter your birth year:"));
// const age = 2022 - birthYear;
// console.log("your age is" + age);

// let kmh = 1.69;
// const mphconvertor = Number(prompt("enter your MPH speed"));
// const kmhspeed = mphconvertor * kmh;
// console.log("your speed is " + kmhspeed + " kmh");

// let czkToEur = 25.695;
// let money = prompt(`enter amount in euro`);
// alert("it is " + Math.round(money * czkToEur) + " in CZK");

// let message = prompt(`enter text message`);
// console.log("you have " + message.length + " characters");

// const tempF = Number(prompt("Temperature in Fahrnheit: "));
// const tempC = Math.round((tempF - 32) / 1.8);
// console.log("Temperature in Celsius: " + tempC);

// let rollDice = Math.floor(Math.random() * 6) + 1;
// console.log("YOU ROLLED: " + rollDice);

/* const button = document.getElementById("button");
const text = document.getElementById("description");

button.addEventListener("click", () => {
  let rollDice = Math.floor(Math.random() * 6) + 1;
  text.innerText = rollDice;
}); */

// const headline = document.getElementById("headline");
// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button3");

// const changeHeadline = (addNumber) => {
//   let rollDice = Math.floor(Math.random() * 6) + 1;
//   console.log(rollDice);
//   if (addNumber) {
//     headline.innerText = rollDice + addNumber;
//   } else {
//     headline.innerText = rollDice;
//   }
// };

// button1.addEventListener("click", () => changeHeadline());
// button2.addEventListener("click", () => changeHeadline(2));
// button3.addEventListener("click", () => changeHeadline(4));

// const headline = document.getElementById("headline");
// const button1 = document.getElementById("button1");
// const text = "...and JavaScript events";

// const changeHeadline = (id, string) => {
//   id.innerText = string;
// };

// button1.addEventListener("click", () => changeHeadline(headline, text));

const button1 = document.getElementById("button1");
const body = document.getElementById("background");
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");
const warning = document.getElementById("warning");

const makeColor = () => {
  if (
    r.value > 0 &&
    r.value < 255 &&
    g.value > 0 &&
    g.value < 255 &&
    b.value > 0 &&
    b.value < 255
  ) {
    body.style.backgroundColor = `rgb(${r.value},${g.value},${b.value})`;
    warning.innerText = "";
  } else {
    warning.innerText = "Please select only numbers from 0 to 255";
  }
};

button1.addEventListener("click", () => makeColor());
