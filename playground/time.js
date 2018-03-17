const moment = require('moment');

// Jan 1st 1970 00:00:00 am
// UNIX time unit is in seconds
// Javascript time unit is in milliseconds
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment();
// date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

// 10:35 am
console.log(date.format('h:mm a'));