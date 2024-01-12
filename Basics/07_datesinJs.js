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
