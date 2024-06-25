//                          JavaScript Math Object


// The Math Object

// Unlike other objects, the Math object has no constructor.
// The Math object is static.
// All methods and properties can be used without creating a Math object 




//                           Math Properties (Constants)


// The syntax for any Math property is : Math.property.
// JavaScript provides 8 mathematical constants that can be accessed as Math properties:



console.log(Math.E)  // returns Euler's number
console.log(Math.PI)  // returns PI
console.log(Math.SQRT2)  // returns the square root of 2
console.log(Math.SQRT1_2)  // returns the square root of 1/2
console.log(Math.LN2)  // returns the natural logarithm of 2
console.log(Math.LN10)  // returns the natural logarithm of 10
console.log(Math.LOG2E)  // returns base 2 logarithm of E
console.log(Math.LOG10E)  // returns base 10 logarithm of E



//                          Math Methods

//The syntax for Math any methods is : Math.method(number)



//    Number to Integer


// There are 4 common methods to round a number to an integer:


// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)



console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.trunc(4.4));



//   MATH.SIGN 

console.log(Math.sign(4));
console.log(Math.sign(-4));
console.log(Math.sign(0));




//    Math.pow()

// Math.pow(x, y) returns the value of x to the power of y:

console.log(Math.pow(2,4));



//   Math.sqrt()

//   Math.sqrt(x) returns the square root of x:

console.log(Math.sqrt(4));




//  Math.abs()

//  Math.abs(x) returns the absolute (positive) value of x:

console.log(Math.abs(-4.7));



//        Math.sin()


// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.


console.log(Math.sin(90 * Math.PI / 180));     // returns 1 (the sine of 90 degrees)



//       Math.cos()

// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180.


console.log(Math.cos(0 * Math.PI / 180));     // returns 1 (the cos of 0 degrees)




//            Math.min() and Math.max()

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:


console.log(Math.min(0, 150, 30, 20, -8, -200));

console.log(Math.max(0, 150, 30, 20, -8, -200));


//  Math.random()

//  Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):


console.log(Math.random());




//           JavaScript Random Integers


//Math.random() used with Math.floor() can be used to return random integers.
//There is no such thing as JavaScript integers.
//We are talking about numbers with no decimals here.

//Example
// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10));


//Example
// Returns a random integer from 0 to 10:
console.log(Math.floor(Math.random() * 11));



//Example
// Returns a random integer from 0 to 99:
console.log(Math.floor(Math.random() * 100));


//Example
// Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random() * 101));


//Example
// Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1);


//Example
// Returns a random integer from 1 to 100:
console.log(Math.floor(Math.random() * 100) + 1);



//                      A Proper Random Function

//As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.


//This JavaScript function always returns a random number between min (included) and max (excluded):


//Example
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(`aman is a good boy ${getRndInteger(1,100)}`);

// This JavaScript function always returns a random number between min and max (both included):

// Example
{
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
      console.log(`udai is a good boy ${getRndInteger(1,100)}`);
      
}



//    The Math.log() Method

//    Math.log(x) returns the natural logarithm of x.

//  The natural logarithm returns the time needed to reach a certain level of growth:

console.log(Math.log(2));



//   The Math.log() Method

// Math.log(x) returns the natural logarithm of x.
// The natural logarithm returns the time needed to reach a certain level of growth:


console.log(Math.log(1));
console.log(Math.log(2));
console.log(Math.log(3));

// Math.E and Math.log() are twins.

// How many times must we multiply Math.E to get 10?

console.log(Math.log(10));


//          The Math.log2() Method


// Math.log2(x) returns the base 2 logarithm of x.

// How many times must we multiply 2 to get 8?

console.log(Math.log2(8));


//    The Math.log10() Method

// Math.log10(x) returns the base 10 logarithm of x.

// How many times must we multiply 10 to get 1000?

console.log(Math.log10(1000));



// JavaScript Math Methods




// Method	                                    Description

// abs(x)	                          Returns the absolute value of x
// acos(x)	                          Returns the arccosine of x, in radians
// acosh(x)	                          Returns the hyperbolic arccosine of x
// asin(x)	                          Returns the arcsine of x, in radians
// asinh(x)	                          Returns the hyperbolic arcsine of x
// atan(x)	                          Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	                      Returns the arctangent of the quotient of its arguments
// atanh(x)	                          Returns the hyperbolic arctangent of x
// cbrt(x)	                          Returns the cubic root of x
// ceil(x)	                          Returns x, rounded upwards to the nearest integer
// cos(x)	                          Returns the cosine of x (x is in radians)
// cosh(x)	                          Returns the hyperbolic cosine of x
// exp(x)	                          Returns the value of Ex
// floor(x)	                          Returns x, rounded downwards to the nearest integer
// log(x)	                          Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	              Returns the number with the highest value
// min(x, y, z, ..., n)	              Returns the number with the lowest value
// pow(x, y)	                      Returns the value of x to the power of y
// random()	                          Returns a random number between 0 and 1
// round(x)	                          Rounds x to the nearest integer
// sign(x)	                          Returns if x is negative, null or positive (-1, 0, 1)
// sin(x)	                          Returns the sine of x (x is in radians)
// sinh(x)	                          Returns the hyperbolic sine of x
// sqrt(x)	                          Returns the square root of x
// tan(x)	                          Returns the tangent of an angle
// tanh(x)	                          Returns the hyperbolic tangent of a number
// trunc(x)	                          Returns the integer part of a number (x)




// Array min / max 

{
    
let a = [50,54,8,7,96,56,2,51,3,254,42,44,2,545,5];
console.log(Math.min(...a));
}

// to fixed method 

{
let aman = 50;
console.log(aman.toFixed(1));

}



