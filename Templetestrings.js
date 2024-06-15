//   Back-Tics Syntax

//Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
// it allows  both single and double quotes inside a string
// allows multiline strings


//   Example

let text = `            "Hello's World!"`;
console.log(text);


// INTERPOLATION/ variable substitution


//Template String provide an easy way to interpolate variables and expressions into strings.
//The method is called string interpolation.
//The syntax is:

     //${...}

let firstName = "John";
let lastName = "Doe";

console.log(`Welcome ${firstName}, ${lastName}!`);

//      Expression Substitution
//  Template Strings allow expressions in strings:

let price = 10
console.log(price.toFixed(2));
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.table([total, price]);


// HTMl templetes 