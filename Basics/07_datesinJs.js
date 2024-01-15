/*
Creating Date Objects
- Date objects are created with the new Date() constructor.
There are 9 ways to create a new date object:
- new Date()
- new Date(date string)
- new Date(year,month)
- new Date(year,month,day)
- new Date(year,month,day,hours)
- new Date(year,month,day,hours,minutes)
- new Date(year,month,day,hours,minutes,seconds)
- new Date(year,month,day,hours,minutes,seconds,ms)
- new Date(milliseconds)
 */
let myDate = new Date();
// date is an object in js
console.log(typeof myDate);
// By default, JavaScript will use the browser's time zone and display a date as a full text string:
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// custom date

let myCreatedDate = new Date(2024, 3, 22);
console.log(myCreatedDate);
// MONTHS starts from 0, ranges in between 0 to 11.



// W3Schools exercises
// 1) Create a Date object and alert the current date and time.
const d = new Date();
console.log(d);
// 2) Use the correct Date method to extract the year (four digits) out of a date object.
year = d.getFullYear();
console.log(year);
// 3) Use the correct Date method to get the month (0-11) out of a date object.
month = d.getMonth();
console.log(month);
// 4) Use the correct Date method to set the year of a date object to 2020.
d.setFullYear(2020);
console.log(d);


// Write a JavaScript function to display the current date and time in the format "YYYY-MM-DD HH:mm:ss".

function displayCurrentDateTime() {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");
  console.log(formattedDate);
}

displayCurrentDateTime();

// Write a function that takes a birthdate as input and returns the age in years.

function calculateAge(birthdate) {
  const birthYear = new Date(birthdate).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

const age = calculateAge("1990-01-01");
console.log(age);


// Write a function that takes a date string in the format "YYYY-MM-DD" and converts it to a JavaScript Date object.

function convertStringToDate(dateString) {
  return new Date(dateString);
}
const dateObject = convertStringToDate("2022-01-01");
console.log(dateObject);


// Write a function that takes a date and returns the day of the week.

function getDayOfWeek(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

const day = getDayOfWeek(new Date());
console.log(day);

// Write a function that takes a date and a number of days, and returns a new date that is the given number of days after the input date.

function addDaysToDate(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

const newDate = addDaysToDate(new Date(), 5);
console.log(newDate);

// Write a function that takes a date and returns a string in the format "DD/MM/YYYY".

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
const formattedDate = formatDate(new Date());
console.log(formattedDate);

// Write a function that takes a year and returns true if it's a leap year, otherwise false.

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2022)); // false

// Write a function that takes two dates and returns the difference in days between them.

function differenceInDays(date1, date2) {
  const timeDifference = date2.getTime() - date1.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  return Math.abs(Math.round(daysDifference));
}

const date1 = new Date("2022-01-01");
const date2 = new Date("2022-01-10");
console.log(differenceInDays(date1, date2));

// Write a function that takes a year and month and returns the last day of that month.

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2022, 1)); // 31 (January)

// Write a function that takes a future date and displays a countdown timer until that date.

function countdownTimer(targetDate) {
  const intervalId = setInterval(function() {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    
    if (timeDifference <= 0) {
      clearInterval(intervalId);
      console.log("Countdown finished!");
    } else {
      const days = Math.floor(timeDifference / (1000 * 3600 * 24));
      const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
      const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      console.log(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
    }
  }, 1000);
}

const targetDate = new Date("2022-12-31T23:59:59");
countdownTimer(targetDate);
