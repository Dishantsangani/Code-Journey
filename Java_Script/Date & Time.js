//  Dates
let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let mycreate = new Date(2023, 0, 23);
console.log(mycreate.toDateString());

let mytime = Date.now();
console.log(mytime);
console.log(mytime.getMonth());
console.log(mytime.getDay());

// All Method's
// To DateString
var now = new Date();
console.log(now.toDateString());
console.log(now.toTimeString());

// SetFullYear
var now = new Date();
now.setFullYear(2027);
console.log(now);

// Get Month
var now = new Date();
var month = now.getMonth();
console.log(month);

// get Date
var now = new Date();
var date = now.getDate();
console.log(date);

// Get Day
var now = new Date();
var day = now.getDay();
console.log(day);

// Get Hours
var now = new Date();
var hours = now.getHours();
console.log(hours);

// get Minutes
var now = new Date();
var minutes = now.getMinutes();
console.log(minutes);

// Get Secounds
var now = new Date();
var secounds = now.getSeconds();
console.log(secounds);

// GetMlliseconds
var now = new Date();
var milliseconds = now.getMilliseconds();
console.log(milliseconds);

// Set Method For Date

// Set Date()
var now = new Date();
now.setDate(18);
console.log(now);

// Set FullYear
var now = new Date();
now.setFullYear(2027);
console.log(now);

// Set Hours
var now = new Date();
now.setHours(18);
console.log(now);

// Set Milliseconds
var now = new Date();
now.setMilliseconds(1000);
console.log(now);

// Set Minutes
var now = new Date();
now.setMinutes(30);
console.log(now);

// Set Month
var now = new Date();
now.setMonth(11);
console.log(now);

// Set Seconds
var now = new Date();
now.setSeconds(30);
console.log(now);
