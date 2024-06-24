// JS_Array Const



// All same like block scope of let , var and constant. 


//                                Array sorting 



 //     1) The sort() method sorts an array alphabetically:

 const am =[`bman`,`ahat`,`kartik`];

 am.sort()
 console.log(am);


 //      2)  The reverse() method reverses the elements in an array:

 {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);
 }


//       3)  ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.
//           The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.


const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted);



//       4)  JavaScript Array toReversed() Method
//           ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.
//           The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

{
    
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log(reversed);
}



//                                                                         sort(compareFn)

// Parameters

// ====>  compareFn 

// A function that determines the order of the elements. The function is called with the following arguments:

// a
//    The first element for comparison. Will never be undefined.

// b
//    The second element for comparison. Will never be undefined.

// ==> It should return a number where:

// A negative value indicates that a should come before b.
// A positive value indicates that a should come after b.
// Zero or NaN indicates that a and b are considered equal.
// To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.

// If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.



// NOTE==> If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.
//         The sort() method preserves empty slots. If the source array is sparse, the empty slots are moved to the end of the array, and always come after all the undefined.




// If compareFn is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFn).


// compareFn(a, b) return value	                                                                sort order

//             > 0	                                                                        sort a after b, e.g. [b, a]

//             < 0	                                                                        sort a before b, e.g. [a, b]

//             === 0	                                                                    keep original order of a and b


// function compareFn(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   } else if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }



// ===>Properties of comparators

// 1) Pure: The comparator does not mutate the objects being compared or any external state. (This is important because there's no guarantee when and how the comparator will be called, so any particular call should not produce visible effects to the outside.)

// 2) Stable: The comparator returns the same result with the same pair of input.

// 3) Reflexive: compareFn(a, a) === 0.

// 4) Anti-symmetric: compareFn(a, b) and compareFn(b, a) must both be 0 or have opposite signs.

// 5) Transitive: If compareFn(a, b) and compareFn(b, c) are both positive, zero, or negative, then compareFn(a, c) has the same positivity as the previous two.




// ==> To compare numbers instead of strings, the compare function can subtract b from a. The following function will sort the array in ascending order (if it doesn't contain NaN):


// function compareNumbers(a, b) {
//   return a - b;
// }

{
    const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

}


//                                                                                               Sorting array of objects



// Arrays of objects can be sorted by comparing the value of one of their properties.

{
    const items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 },
      ];
      
      // sort by value
      items.sort((a, b) => a.value - b.value);
      
      // sort by name
      items.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      
}

//                                                                               Sort stability


// Since version 10 (or ECMAScript 2019), the specification dictates that Array.prototype.sort is stable.

// For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:


const students = [
    { name: "Alex", grade: 15 },
    { name: "Devlin", grade: 15 },
    { name: "Eagle", grade: 13 },
    { name: "Sam", grade: 14 },
  ];

//   After sorting this array by grade in ascending order:

//   students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);

//   The students variable will then have the following value:

  [
    { name: "Eagle", grade: 13 },
    { name: "Sam", grade: 14 },
    { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
    { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
  ];

  
// Notes:- It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

//         Before version 10 (or ECMAScript 2019), sort stability was not guaranteed, meaning that you could end up with the following:

[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];





//                                                            Using sort() on sparse arrays


// Empty slots are moved to the end of the array.

console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]




//                                                                Sorting non-ASCII characters

//   For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use String.prototype.localeCompare(). This function can compare those characters so they appear in the right order.


  const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
  items.sort((a, b) => a.localeCompare(b));
  
  // items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']





//                                                                                   Sorting with map

// The compareFn can be invoked multiple times per element within the array. 
// Depending on the compareFn's nature, this may yield a high overhead. 
// The more work a compareFn does and the more elements there are to sort, it may be more efficient to use map() for sorting. 
// The idea is to traverse the array once to extract the actual values used for sorting into a temporary array, sort the temporary array, and then traverse the temporary array to achieve the right order.


// {
//     // the array to be sorted
// const data = ["delta", "alpha", "charlie", "bravo"];

// // temporary array holds objects with position and sort-value
// const mapped = data.map((v, i) => {
//   return { i, value: someSlowOperation(v) };
// });

// // sorting the mapped array containing the reduced values
// mapped.sort((a, b) => {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// const result = mapped.map((v) => data[v.i]);

// }


//                                                      ITERATION METHODS


// 1)  with() Method

//   ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.

{
    const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);
}



//  2)  JavaScript Array Spread (...)

//      The ... operator expands an iterable (like an array) into more elements:

{
    const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];


console.log([...q1, ...q2, ...q3, ...q4]);
console.log(...q1, ...q2, ...q3, ...q4);

}


//   3) JavaScript Array.from()
//      The Array.from() method returns an Array object from any object with a length property or any iterable object.


let khan=Array.from("ABCDEFG");
console.log(khan);

let udai = Array.from({name: `udaibhat`})
console.log(udai); // interesting case

//     Array.of

//Returns a new array from a set of elements.
//@param items — A set of elements to include in the new array object.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

{
    const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros );
}


// array checking 
console.log(Array.isArray("udai bhat")) // returns true or False



//for  more test cases refer https://www.w3schools.com/js/js_array_iteration.asp

