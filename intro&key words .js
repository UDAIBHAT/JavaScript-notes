// JavaScript Display Possibilities
// JavaScript can "display" data in different ways:

// Writing into an HTML element, using document.getElementById("").innerHTML =; (use quoted commas  for string  values)
// Writing into the HTML output using document.write(); (use quoted commas  for string  values)
// Writing into an alert box inside the browser , using window.alert();  (use quoted commas  for string  values)
// Writing into the browser console, using console.log(); (use quoted commas  for string  values)
// Writing into the browser console as table , using console.table([]);

let $ = 1;
let $$ = 2;
let $$$ = 3;

console.table([$,$$,$$$])



// ===>JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const   


// JavaScript Identifiers
// All JavaScript variables must be identified with unique names.

// These unique names are called identifiers.

// Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

// The general rules for constructing names for variables (unique identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.
// JavaScript identifiers are case-sensitive.

// You can declare many variables in one statement.

// Start the statement with let and separate the variables by comma:
// let person = "John Doe", carName = "Volvo", price = 200;


   
                   // let keyword                        



// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same sapce however can be
// redeclared in different blocks  

let empid = 123; // variable is decleared through "let" keyword
console.log(empid);
empid = 236;// re assign of value is possible 
console.log(empid);

// let empid = 245 redeclearation is not allowed within same space or scope

{
    let empid = 245;
    console.log(empid); // this will be redecleared becoz it is in block scope 
   // let empid = 555; redecleration is not allowed even in the same scope.
    empid = 777;
    console.log(empid);// re-assign is allowed in same block.
}

// let x = 10;
// // Here x is 10

// {
// let x = 2;
// // Here x is 2     /// one more example
// }

// // Here x is 10


                               
                             ///var Keyword

// Variables declared with var  have global Scope

// Variables declared with let must be Declared before use

// Variables declared with var can be Redeclared in the same sapce however can be also be
// redeclared in different blocks  spaces

var udai = "aaaa";
console.log(udai);
var udai = "bbbb";
console.log(udai);
udai="cccc";
console.log(udai); // re-declearation & re-assignation of value is allowed within the same
                   // space
    {
        console.log(udai); // this shows global sccope
        udai = "dddd";
        console.log(udai);
    }
    console.log(udai); // here dddd becomes the global  varriable

//     var x = 10;
// // Here x is 10

// {
// var x = 2;
// // Here x is 2        /// another example of var keyword.
// }

// // Here x is 2

// Re-Declaring JavaScript Variables
// If you re-declare a JavaScript variable declared with var, it will not lose its value.

// The variable carName will still have the value "Volvo" after the execution of these statements:

// Example
// var carName = "Volvo";
// var carName;
 
   

                         /// const  Keyword





// Variables defined with const cannot be Redeclared

//   Variables defined with const cannot be Reassigned
                         
//       Variables defined with const have Block Scope


//   1)  A variable defined with the const keyword cannot be reassigned:

const PI = 3.141592653589793;
console.log(PI);
// PI = 3.14;      This will give an error
// PI = PI + 10;   This will also give an error


//  2) JavaScript const variables must be assigned a value when they are declared:

// const PI = 3.14159265359; // correct

// const PI;
//PI = 3.14159265359;      wrong 

// const PI = 401 this will give  an error due to re-declearation


    //    NOTE  ===>>>

// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object



//         1)Constant Arrays



// You can change the elements of a constant array:

//    example==>

// You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

//  You can change an element:
// cars[0] = "Toyota";

//  You can add an element:
// cars.push("Audi");

//                              But you can NOT reassign the array:

// const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR



//                 2) Constant Object




// You can change the properties of a constant object:

//         example===>

//  You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
// car.color = "red";

//  You can add a property:
// car.owner = "Johnson";

//                      But you can NOT reassign the object:

// const car = {type:"Fiat", model:"500", color:"white"};

// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR



/*                       NOTE===>
Prefer not to use var
because of issue in block scope and functional scope

"use strict"; // treat all JS code as newer version
*/ 



// ===> When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.


