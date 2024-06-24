// SEARCH


//     1) JavaScript Array indexOf()



// The indexOf() method searches an array for an element value and returns its position.


const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf(`Orange`));


// array.indexOf(item, start)
// item	Required. The item to search for.
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.


//      2) JavaScript Array lastIndexOf()



//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.


{
    const fruits = ["Apple", "Orange", "Apple", "Mango"];
let aman = fruits.lastIndexOf("Apple") + 1;
console.log(aman);
}


//     3) JavaScript Array includes()



//ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.includes(`Mango`));  // is true
}




//      4) JavaScript Array find()



// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log(first);

function myFunction(value, index,)
 {
  return value > 18, index > 3 ;
}


//      5) JavaScript Array findIndex()


// The findIndex() method returns the index of the first array element that passes a test function.
// This example finds the index of the first element that is larger than 18:

{
    const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);
console.log(first);

function myFunction(value, index) 
{
  return value > 18, index > 3;
}
}


//     6) JavaScript Array findLast() Method



//ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

{
    const temp = [27, 50, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high);
}


//     7) JavaScript Array findLastIndex() Method

// The findLastIndex() method finds the index of the last element that satisfies a condition.


const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos);
