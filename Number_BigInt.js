// JavaScript Numbers

// JavaScript has only one type of number. Numbers can be written with or without decimals.

// Example
// let x = 3.14;    // A number with decimals
// let y = 3;       // A number without decimals

// Extra large or extra small numbers can be written with scientific (exponent) notation:

// Example
// let x = 123e5;    // 12300000
// let y = 123e-5;   // 0.00123

// //################################################################################################################################################################################################################################################################################################################################

// JavaScript Numbers are Always 64-bit Floating Point
// Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

// JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

// This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

// Value (aka Fraction/Mantissa)	               Exponent	              Sign
//     52 bits (0 - 51) 	                  11 bits (52 - 62)	    1 bit (63)


// //################################################################################################################################################################################################################################################################################################################################


// Integer Precision

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

// Example
// let x = 999999999999999;   // x will be 999999999999999
// let y = 9999999999999999;  // y will be 10000000000000000
// The maximum number of decimals is 17.


// //################################################################################################################################################################################################################################################################################################################################


// Floating Precision
// Floating point arithmetic is not always 100% accurate:

// let x = 0.2 + 0.1;

// To solve the problem above, it helps to multiply and divide:

// let x = (0.2 * 10 + 0.1 * 10) / 10;


// //################################################################################################################################################################################################################################################################################################################################


// Adding Numbers and Strings


// WARNING !!

// JavaScript uses the + operator for both addition and concatenation.
// Numbers are added. Strings are concatenated.


// If you add two numbers, the result will be a number:

// Example
// let x = 10;
// let y = 20;
// let z = x + y;
// If you add two strings, the result will be a string concatenation:

// Example
// let x = "10";
// let y = "20";
// let z = x + y;
// If you add a number and a string, the result will be a string concatenation:

// Example
// let x = 10;
// let y = "20";
// let z = x + y;
// If you add a string and a number, the result will be a string concatenation:

// Example
// let x = "10";
// let y = 20;
// let z = x + y;
// A common mistake is to expect this result to be 30:

// Example
// let x = 10;
// let y = 20;
// let z = "The result is: " + x + y;
// A common mistake is to expect this result to be 102030:

// Example
// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;
// The JavaScript interpreter works from left to right.

// First 10 + 20 is added because x and y are both numbers.

// Then 30 + "30" is concatenated because z is a string.



// //################################################################################################################################################################################################################################################################################################################################



// Numeric Strings
// JavaScript strings can have numeric content:

// let x = 100;         // x is a number

// let y = "100";       // y is a string
// JavaScript will try to convert strings to numbers in all numeric operations:

// This will work:

// let x = "100";
// let y = "10";
// let z = x / y;

// This will also work:

// let x = "100";
// let y = "10";
// let z = x * y;

// And this will work:

// let x = "100";
// let y = "10";
// let z = x - y;

// But this will not work:

// let x = "100";
// let y = "10";
// let z = x + y;

// In the last example JavaScript uses the + operator to concatenate the strings.
// But it is recommended to convert the datatypes in order to perform operations.A



// //################################################################################################################################################################################################################################################################################################################################



// NaN - Not a Number

// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):


// Example
// let x = 100 / "Apple";

// However, if the string is numeric, the result will be a number:

// Example
// let x = 100 / "10";
// You can use the global JavaScript function isNaN() to find out if a value is a not a number:

// Example
// let x = 100 / "Apple";
// isNaN(x);
// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

// Example
// let x = NaN;
// let y = 5;
// let z = x + y;
// Or the result might be a concatenation like NaN5:

// Example
// let x = NaN;
// let y = "5";
// let z = x + y;
// NaN is a number: typeof NaN returns number:



// //################################################################################################################################################################################################################################################################################################################################


// Infinity

// Infinity (or -Infinity) is the value JavaScript will return
//  if you calculate a number outside the largest possible number.

 
// Example
// let myNumber = 2;
// // Execute until Infinity
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber;
// }


// Division by 0 (zero) also generates Infinity:

// Example
// let x =  2 / 0;
// let y = -2 / 0;
// Infinity is a number: typeof Infinity returns number.


// Example
// typeof Infinity;

// //################################################################################################################################################################################################################################################################################################################################

// Hexadecimal

// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

// Example
// let x = 0xFF;

// Never write a number with a leading zero (like 07).
// Some JavaScript versions interpret numbers as octal if they are written with a leading zero.



// By default, JavaScript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.


// Example
// let myNumber = 32;
// myNumber.toString(32);
// myNumber.toString(16);
// myNumber.toString(12);
// myNumber.toString(10);
// myNumber.toString(8);
// myNumber.toString(2);


// //################################################################################################################################################################################################################################################################################################################################


// JavaScript Numbers as Objects

// Normally JavaScript numbers are primitive values created from literals:

// let x = 123;
// But numbers can also be defined as objects with the keyword new:

// let y = new Number(123);

// Example
// let x = 123;
// let y = new Number(123);

// Do not create Number objects.
// The new keyword complicates the code and slows down execution speed.
// Number Objects can produce unexpected results:


// When using the == operator, x and y are equal:

// let x = 500;
// let y = new Number(500);


// When using the === operator, x and y are not equal.

// let x = 500;
// let y = new Number(500);



// Note the difference between (x==y) and (x===y).


// (x == y) true or false?

// let x = new Number(500);
// let y = new Number(500);


// (x === y) true or false?

// let x = new Number(500);
// let y = new Number(500);


// Comparing two JavaScript objects always returns false.




//################################################################################################################################################################################################################################################################################################################################



                                                                                                                                                                                                 
                                                                                                                                                                                                 
                                                                                                                                                                                     
// __  __   ______   _______   _    _    ____    _____     _____ 
// |  \/  | |  ____| |__   __| | |  | |  / __ \  |  __ \   / ____|
// | \  / | | |__       | |    | |__| | | |  | | | |  | | | (___  
// | |\/| | |  __|      | |    |  __  | | |  | | | |  | |  \___ \ 
// | |  | | | |____     | |    | |  | | | |__| | | |__| |  ____) |
// |_|  |_| |______|    |_|    |_|  |_|  \____/  |_____/  |_____/ 
                                                               
                                                                                                                                                                                                                                                                
                                                                                                                                                                                                 
                                                                                                                                                                                                 
                                                                                                                                                                                                 
                                                                                                                                                                                                 
                                                                                                                                                                                                 



// JavaScript Number Methods

// These number methods can be used on all JavaScript numbers:

//     Method	                                Description

// toString()	                    Returns a number as a string
// toExponential()	                Returns a number written in exponential notation
// toFixed()	                    Returns a number written with a number of decimals
// toPrecision()	                Returns a number written with a specified length
// valueOf()	                    Returns a number as a number

// //################################################################################################################################################################################################################################################################################################################################

// The toString() Method

// The toString() method returns a number as a string.
// All number methods can be used on any type of numbers (literals, variables, or expressions):

// Example
// let x = 123;
// x.toString();
// (123).toString();
// (100 + 23).toString();

// //################################################################################################################################################################################################################################################################################################################################

// The toExponential() Method

// toExponential() returns a string, with a number rounded and written using exponential notation.

// A parameter defines the number of characters behind the decimal point:

// Example
// let x = 9.656;
// x.toExponential(2);
// x.toExponential(4);
// x.toExponential(6);
// The parameter is optional. If you don't specify it, JavaScript will not round the number.

// //################################################################################################################################################################################################################################################################################################################################

// The toFixed() Method

// toFixed() returns a string, with the number written with a specified number of decimals:

// Example
// let x = 9.656;
// x.toFixed(0);
// x.toFixed(2);
// x.toFixed(4);
// x.toFixed(6);
// toFixed(2) is perfect for working with money.

// //################################################################################################################################################################################################################################################################################################################################

// The toPrecision() Method


// toPrecision() returns a string, with a number written with a specified length:

// Example
// let x = 9.656;
// x.toPrecision();
// x.toPrecision(2);
// x.toPrecision(4);
// x.toPrecision(6);

// //################################################################################################################################################################################################################################################################################################################################

// The valueOf() Method

// valueOf() returns a number as a number.

// Example
// let x = 123;
// x.valueOf();
// (123).valueOf();
// (100 + 23).valueOf();


// In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
// There is no reason to use it in your code.

// All JavaScript data types have a valueOf() and a toString() method.

// //################################################################################################################################################################################################################################################################################################################################

// Converting Variables to Numbers

// There are 3 JavaScript methods that can be used to convert a variable to a number:

//     Method	                            Description

//  Number()	                Returns a number converted from its argument.
//  parseFloat()	            Parses its argument and returns a floating point number
//  parseInt()	                Parses its argument and returns a whole number

// The methods above are not number methods. They are global JavaScript methods.

// //################################################################################################################################################################################################################################################################################################################################

// The Number() Method

// The Number() method can be used to convert JavaScript variables to numbers:

// Example
// Number(true);
// Number(false);
// Number("10");
// Number("  10");
// Number("10  ");
// Number(" 10  ");
// Number("10.33");
// Number("10,33");
// Number("10 33");
// Number("John");
// If the number cannot be converted, NaN (Not a Number) is returned.

// //################################################################################################################################################################################################################################################################################################################################

// The Number() Method Used on Dates

// Number() can also convert a date to a number.

// Example
// Number(new Date("1970-01-01"))\

// //################################################################################################################################################################################################################################################################################################################################

// Note=====>  The Date() method returns the number of milliseconds since 1.1.1970.

// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

// Example
// Number(new Date("1970-01-02"))

// Example
// Number(new Date("2017-09-30"))

// //################################################################################################################################################################################################################################################################################################################################

// The parseInt() Method


// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

// Example
// parseInt("-10");
// parseInt("-10.33");
// parseInt("10");
// parseInt("10.33");
// parseInt("10 20 30");
// parseInt("10 years");
// parseInt("years 10");
// If the number cannot be converted, NaN (Not a Number) is returned.

// //################################################################################################################################################################################################################################################################################################################################

// The parseFloat() Method

// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

// Example
// parseFloat("10");
// parseFloat("10.33");
// parseFloat("10 20 30");
// parseFloat("10 years");
// parseFloat("years 10");
// If the number cannot be converted, NaN (Not a Number) is returned.

// //################################################################################################################################################################################################################################################################################################################################

// Number Object Methods

// These object methods belong to the Number object:

//     Method	                                        Description

// Number.isInteger()	                Returns true if the argument is an integer
// Number.isSafeInteger()	            Returns true if the argument is a safe integer
// Number.parseFloat()	                Converts a string to a number
// Number.parseInt()	                Converts a string to a whole number

// //################################################################################################################################################################################################################################################################################################################################

// Number Methods Cannot be Used on Variables

// The number methods above belong to the JavaScript Number Object.
// These methods can only be accessed like Number.isInteger().
// Using X.isInteger() where X is a variable, will result in an error:
// TypeError X.isInteger is not a function.

// //################################################################################################################################################################################################################################################################################################################################

// The Number.isInteger() Method


// The Number.isInteger() method returns true if the argument is an integer.

// Example
// Number.isInteger(10);
// Number.isInteger(10.5);

// //################################################################################################################################################################################################################################################################################################################################

// The Number.isSafeInteger() Method


// A safe integer is an integer that can be exactly represented as a double precision number.
// The Number.isSafeInteger() method returns true if the argument is a safe integer.

// Example
// Number.isSafeInteger(10);
// Number.isSafeInteger(12345678901234567890);

// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.

// //################################################################################################################################################################################################################################################################################################################################

// The Number.parseFloat() Method

// Number.parseFloat() parses a string and returns a number.
// Spaces are allowed. Only the first number is returned:

// Example
// Number.parseFloat("10");
// Number.parseFloat("10.33");
// Number.parseFloat("10 20 30");
// Number.parseFloat("10 years");
// Number.parseFloat("years 10");
// If the number cannot be converted, NaN (Not a Number) is returned.

// Note===>

// The Number methods Number.parseInt() and Number.parseFloat()
// are the same as the
// Global methods parseInt() and parseFloat().
// The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).

// //################################################################################################################################################################################################################################################################################################################################

// The Number.parseInt() Method


// Number.parseInt() parses a string and returns a whole number.
// Spaces are allowed. Only the first number is returned:

// Example
// Number.parseInt("-10");
// Number.parseInt("-10.33");
// Number.parseInt("10");
// Number.parseInt("10.33");
// Number.parseInt("10 20 30");
// Number.parseInt("10 years");
// Number.parseInt("years 10");





// _____    _____     ____    _____    ______   ______   _____    _______   _____   ______    _____ 
// |  __ \  |  __ \   / __ \  |  __ \  |  ____| |  ____| |  __ \  |__   __| |_   _| |  ____|  / ____|
// | |__) | | |__) | | |  | | | |__) | | |__    | |__    | |__) |    | |      | |   | |__    | (___  
// |  ___/  |  _  /  | |  | | |  ___/  |  __|   |  __|   |  _  /     | |      | |   |  __|    \___ \ 
// | |      | | \ \  | |__| | | |      | |____  | |____  | | \ \     | |     _| |_  | |____   ____) |
// |_|      |_|  \_\  \____/  |_|      |______| |______| |_|  \_\    |_|    |_____| |______| |_____/ 
                                                                                                  
                                                                                                  




//################################################################################################################################################################################################################################################################################################################################

// Property	                            Description

// EPSILON	                    The difference between 1 and the smallest number > 1.
// MAX_VALUE	                The largest number possible in JavaScript
// MIN_VALUE	                The smallest number possible in JavaScript
// MAX_SAFE_INTEGER	        The maximum safe integer (253 - 1)
// MIN_SAFE_INTEGER	        The minimum safe integer -(253 - 1)
// POSITIVE_INFINITY	        Infinity (returned on overflow)
// NEGATIVE_INFINITY	        Negative infinity (returned on overflow)
// NaN	                        A "Not-a-Number" value

// //################################################################################################################################################################################################################################################################################################################################

// JavaScript EPSILON

// Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

// Example
// let x = Number.EPSILON;

// //################################################################################################################################################################################################################################################################################################################################

// JavaScript MAX_VALUE

// Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

// Example
// let x = Number.MAX_VALUE;

// Number Properties Cannot be Used on Variables

// Number properties belong to the JavaScript Number Object.
// These properties can only be accessed as Number.MAX_VALUE.

// Using x.MAX_VALUE, where x is a variable or a value, will return undefined:

// Example
// let x = 6;
// x.MAX_VALUE

// //################################################################################################################################################################################################################################################################################################################################

// JavaScript MIN_VALUE

// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

// Example
// let x = Number.MIN_VALUE;

// //################################################################################################################################################################################################################################################################################################################################

// JavaScript MAX_SAFE_INTEGER

// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
// Number.MAX_SAFE_INTEGER is (253 - 1).

// Example
// let x = Number.MAX_SAFE_INTEGER;

// //################################################################################################################################################################################################################################################################################################################################

// JavaScript MIN_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

// Number.MIN_SAFE_INTEGER is -(253 - 1).

// Example
// let x = Number.MIN_SAFE_INTEGER;

// //################################################################################################################################################################################################################################################################################################################################

// JavaScript POSITIVE_INFINITY

// Example
// let x = Number.POSITIVE_INFINITY;
// POSITIVE_INFINITY is returned on overflow:

// let x = 1 / 0;

// //################################################################################################################################################################################################################################################################################################################################

// JavaScript NEGATIVE_INFINITY

// Example
// let x = Number.NEGATIVE_INFINITY;
// NEGATIVE_INFINITY is returned on overflow:

// let x = -1 / 0;

// //################################################################################################################################################################################################################################################################################################################################

// JavaScript NaN - Not a Number
// NaN is a JavaScript reserved word for a number that is not a legal number.

// Examples
// let x = Number.NaN;
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

// let x = 100 / "Apple";

// //################################################################################################################################################################################################################################################################################################################################

