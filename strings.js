

//  All string methods return a new string. They don't modify the original string.

// Formally said:

//  Strings are immutable: Strings cannot be changed, only replaced





// Strings are for storing text

// Strings are written with quotes

// =>You can use single or double quotes 
// =>Strings created with single or double quotes works the same.
// =>There is no difference between the two.

// A JavaScript string is zero or more characters written inside quotes.

//  example=> let text = "John Doe";


//                   Escape Characters


// Because strings must be written within quotes, JavaScript will misunderstand this string:

// let text = "We are the so-called "Vikings" from the north.";

// The string will be chopped to "We are the so-called ".

// To solve this problem, you can use an backslash escape character.

// The backslash escape character (\) turns special characters into string characters:

// Code	Result	Description

// \'	      '	          Single quote
// \"	      "	          Double quote
// \\	      \	          Backslash

//       Examples

// \" inserts a double quote in a string:
// let text = "We are the so-called \"Vikings\" from the north.";

// \' inserts a single quote in a string:
// let text= 'It\'s alright.';

// \\ inserts a backslash in a string:
// let text = "The character \\ is called backslash.";


const name = "udai"
const repoCount = 50

// console.log(name + repoCount + " Value"); wrong practice but still can be used

console.log(`Hello my name is ${name} and my    repo count is ${repoCount}`); //use this instead
   /// string templetes for more info.


//                JavaScript Strings as Objects


// Normally, JavaScript strings are primitive values, created from literals:
// let x = "John";


// But strings can also be defined as objects with the keyword new:
// let y = new String("John");


// Example
// let x = "John";
// let y = new String("John");




// Do not create Strings objects.

// The new keyword complicates the code and slows down execution speed.

// String objects can produce unexpected results:


// 1) When using the == operator, x and y are equal:

// let x = "John";
// let y = new String("John");


// 2) When using the === operator, x and y are not equal (strict check):

// let x = "John";
// let y = new String("John");

// Note the difference between (x==y) and (x===y).

//         [ NOW the object comparision ]

// 1)(x == y) true or false?

//       let x = new String("John");
//       let y = new String("John");

// 2)(x === y) true or false?
      
//       let x = new String("John");
//       let y = new String("John");

// Comparing two JavaScript objects always returns false.

// string as objeect memory allocation as heap  

let x = new String("aman");
console.log(typeof x);
console.log(x);

y  =  x;

y.String = "bhat";

console.log(y);


////################################################################################################################################################################################################################################################################################################################################


//                                                 STRING METHODS


const user ='    udai_Bhat_aman        ' 



 console.log(user.length); // returns length of string



 //################################################################################################################################################################################################################################################################################################################################
 


 //                  Extracting String Characters


//  There are 4 methods for extracting string characters:
 
//  1. The at(position) Method
//  2. The charAt(position) Method
//  3. The charCodeAt(position) Method
//  4. Using property access [] like in arrays


console.log(user.charAt(5));  // The charAt() method returns the character at a specified index (position) in a string:
                             //  If no character is found ,charAt() returns an empty string.
                              //  aur agr index ka bahr puch liya toh tab bii empty string return kargaa 
                              //  yehi drawback hai, pata nahi chalaga ki empty string kisko indicate kar rahi hai char not found ko ya out of index ko.


console.log(user.charCodeAt(2)); //The charCodeAt() method returns the code of the character at a specified index in a string:
                                 //The method returns a UTF-16 code (an integer between 0 and 65535).
                                 // out of index pa NAN retur karagaa

console.log(user.at(14));  //The at() method returns the character at a specified index (position) in a string.
                          // jitna string ki index hai agr usa agay ka pucho gay toh [undefined] return karagaa
                         // agr chars  nahi milta uss index pa matllab ki waha pa empty space hai toh [empty string] return karaga
// Note
// The at() method is a new addition to JavaScript.

// It allows the use of negative indexes while charAt() do not.

// Now you can use myString.at(-2) instead of charAt(myString.length-2).

console.log(user[15]);  // returns undefined when out of index


//################################################################################################################################################################################################################################################################################################################################


 console.log(user.toUpperCase());   
 console.log(user.toLowerCase());   


 //################################################################################################################################################################################################################################################################################################################################


console.log(user.trim()); // removes the white space
console.log(user.trimStart()); // removes whitespace only from the start of a string.
console.log(user.trimEnd());   // removes whitespace only from the end of a string.



//################################################################################################################################################################################################################################################################################################################################


console.log(user.padStart(40,"mana")); // It pads a string with another string (multiple times) until it reaches a given length.
let khan = (user.padEnd(40,"a"));  // It pads a string with another string (multiple times) until it reaches a given length.
console.log(khan.length);          // if given undefined it will pad till length is achieved but with undefined value
console.log(khan);       
//  The padStart() and padEnd() method is a string method.

//  To pad a number, convert the number to a string first.


//################################################################################################################################################################################################################################################################################################################################


// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.

let billi = "love";
console.log(billi.repeat(2));
console.log(billi);

//################################################################################################################################################################################################################################################################################################################################

                //Replacing String Content

// The replace() method replaces a specified value with another value in a string:

let billu = `Please visit mandir! and also mandir!`
console.log(billu.replace("mandir","majid")); // it will change only first beginning of the letter
                                              //    By default, the replace() method is case sensitive. Writing MANDIR (with upper-case) will not work:                          
                                             
console.log(billu);       // The replace() method does not change the string it is called on.
                         //  The replace() method returns a new string.




//To replace case insensitive, use a regular expression with an /i flag (insensitive)

console.log(billu.replace(/MANDiR/i,"majid"));  // Regular expressions are written without quotes.



// To replace all matches, use a regular expression with a /g flag (global match)

console.log(billu.replace(/mandir/g,"majid"));

const url = "https://udai.com/udai%20bhat";

console.log(url.replace('%20', '-'))

//################################################################################################################################################################################################################################################################################################################################

console.log(url.includes('sundar'))  // return true or false includes() is case sensitive.




// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:

let k = `Hello my name is udai bhat`;
console.log(k.startsWith(`Hello`));  //Returns true:
console.log(k.startsWith(`my`));
 
// A start position for the search can be specified:

console.log(k.startsWith(`my`,5)); // return false
console.log(k.startsWith(`my`,6)); // return true

// The endsWith() method returns true if a string ends with a specified value.
// Otherwise it returns false:
console.log(k.endsWith(`bhat`)); // return true

//Check if the 11 first characters of a string ends with "world":

console.log(k.endsWith(`my`,8)); // return true



//################################################################################################################################################################################################################################################################################################################################



 //console.log(user.__proto__);


 console.log(user.indexOf('bhat')); // returns the first matched word/alphabet ixdex at which value is present
 
 
 console.log(user.lastIndexOf(`a`)); // returns the last index of argument.
// return -1 if the text is not found:





//################################################################################################################################################################################################################################################################################################################################
 



// ===============>>>>>Extracting String Parts

// There are 3 methods for extracting a part of a string:

// 1) slice(start, end)
// 2) substring(start, end)
// 3) substr(start, length)


let text = "Apple, Banana, Kiwi";
console.log(text.slice(7,13));

//  slice() extracts a part of a string and returns the extracted part in a new string.
//  The method takes 2 parameters: start position, and end position (end not included).
//  If you omit the second parameter, the method will slice out the rest of the string:
//  If a parameter is negative, the position is counted from the end of the string:

let ext = "Apple, Banana, Kiwi";
console.log(ext.substring(7,13));

//  substring() is similar to slice().
//  The difference is that start and end values less than 0 are treated as 0 in substring().
//  If you omit the second parameter, substring() will slice out the rest of the string.

let xt = "Apple, Banana, Kiwi";
console.log(xt.substr(7,13));

//  The difference is that the second parameter specifies the length of the extracted part.



// A string can be converted to an array with the split() method:

let t = "aman"

let r = t.split("");

console.log(r[0]);  // If the separator is "", the returned array will be an array of single characters:

// If the separator is omitted, the returned array will contain the whole string in index [0].


//################################################################################################################################################################################################################################################################################################################################










