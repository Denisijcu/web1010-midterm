/* Q - 1 */
console.log("Running..");
// Create a variable named firstName and store your first name as a string inside
// of it.
var firstName = "Denis";
// Then create a variable named lastName and store your last name inside
// of it.
var lastName = "Sanchez";

// Finally, print to the console a single string that shows your first name
var fullName = `First Name: ${firstName}  Last Name: ${lastName}`;
console.log(fullName);
// and your last name separated by a space. You must use the firstName and lastName
console.log('First Name:', firstName, ' Last Name:', lastName);
// variables in this console log.

/* Q-2 */
// In only one console log, use the + operator to concatenate the following values.
// Each value must be separated by a space.

/*
"eight"
5
"six"
"two"
3
7*/

values = `eight 5 six two 3 7`;
console.log(values);
console.log('Eight ' + 5 + ' Six' + " two " + 3 + 7);

/* Q-3 */
// Create a variable named longString and store a string inside of it that
// has exactly 23 characters.
var longString = "This is a long string t";
console.log(longString.length);
console.log(longString);
//
// Then log the following message to the console:
//
//    The length of longString is: <length of string>
//
// IMPORTANT: you must replace <length of string> with the length of longString
// using the .length property

/* Q-4 */

// Console log any expression that uses the modulo operator % and results
// in the number 1. */

var results = 13 % 2;
console.log('Results is:', results);

/*Q-5*/
// Log to the console a Boolean expression that tests
// whether two numbers are equal, and whose answer evaluates to false.
var a = 5;
var b = 5;
var c = 6;

if (a == b) {
  console.log(` A = ${a}, B=${b} the result is True`);
} else {
  console.log(` A = ${a}, B=${b} the result is False`);
}
if (a == c) {
  console.log(` A = ${a}, C=${c} the result is True`);
} else {
  console.log(` A = ${a}, c=${c} the result is False`);
}


/* Q-6 */
// Log to the console a Boolean expression that
// tests whether two numbers are not equal, and whose answer evaluates to true.
var x = 10;
var y = 11;
var z = 10;
if (x != y && x == z) {
  console.log(`X is ${x}, y is ${y} and z is ${z}`);
}

/* Q-7 */
// In the console, build the following output in one
// String, using special characters for the newline \n, tab stop \t, and
// quotation marks \":
//
//      Quoth the raven:
//             "Nevermore!"
//
// Note: there is a tab before "Nevermore!"

var output = `\t Quoth the raven: \n \t \t \"Nevermore!\" \n \n`;
console.log(output);

/* Q-8 */

// Declare a variable called numPassengers, set its
// value to 2, and then log it to the console.
//
// Then, increment the variable by 3, using the += operator and log the new value
// of numPassengers to the console.
//
// Note: you should have two console logs

var numPassengers = 2;
console.log(numPassengers);
numPassengers += 3;
console.log(numPassengers);

/* Q 9 */

// Create your numPassengers variable again and set it to 2.
// Then create a countMessage variable and assign to it the string below, but
// replace the 3 in the string below with the numPassengers variable using
// concatenation with the + operator.
//
//    Attention: There are now 3 passengers on the train!
//
// Then log countMessage to the console.

var numPassengers = 2;
var countMessage = 'Attention: There are now ' + numPassengers + ' passengers on the train!';
console.log(countMessage);

/*10*/
// Create a trainCapacity variable and set it to 40. Then create a numPassengers

// variable and store the number 4 in it. Finally, log the following message to
// the console:
//
//    4 passengers present with 36 seats remaining.
//
// You must replace the numbers in the string above with variables. The number
// 36 must be calculated using math and two variables.

var trainCapacity = 40;
var numPassengers = 4;

console.log(`${numPassengers} passengers present with ${trainCapacity-numPassengers} seats remaining`);