                                 //ARRAYS

// An array is a special variable, which can hold more than one value:

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);


//                         Creating an Array


//       1)Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:

 // const array_name = [item1, item2, ...];      

 // It is a common practice to declare arrays with the const keyword.
//  Spaces and line breaks are not important. A declaration can span multiple lines:

//################################################################################################################################################################################################################################################################################################################################

//       2)You can also create an array, and then provide the elements:

// Example:-
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

//################################################################################################################################################################################################################################################################################################################################


//       3)Using the JavaScript Keyword new

// The following example also creates an Array, and assigns values to it:

const heros = new Array(`ironman`,`superman`,`wanda`);
console.log(heros);

// There is no need to use new Array().

// For simplicity, readability and execution speed, use the array literal method.

//################################################################################################################################################################################################################################################################################################################################


//                        Accessing Array Elements

// You access an array element by referring to the index number:

console.log(heros[0]);

// Changing an Array Element

heros[0]=`shaktiman`;
console.log(heros);

//################################################################################################################################################################################################################################################################################################################################


//                                    Converting an Array to a String

//  The JavaScript method toString() converts an array to a string of (comma separated) array values.

console.log(heros.toString());

//################################################################################################################################################################################################################################################################################################################################


//                     Array Elements Can Be Objects


//  JavaScript variables can be objects. Arrays are special kinds of objects.

//Because of this, you can have variables of different types in the same Array.

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;


//################################################################################################################################################################################################################################################################################################################################

 

                                    //ARRAY METHODS and PROPERTIES

//1) The length property of an array returns the length of an array (the number of array elements).


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;        
console.log(length);  
       // OR
console.log(fruits.length);      

//################################################################################################################################################################################################################################################################################################################################


// 2)Accessing the First Array Element


{
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let one_fruit = fruits[0];
console.log(one_fruit);
}

//################################################################################################################################################################################################################################################################################################################################


// 3)   Accessing the Last Array Element


//################################################################################################################################################################################################################################################################################################################################


{
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let last_fruit = fruits[fruits.length - 1];
console.log(last_fruit);
}

//################################################################################################################################################################################################################################################################################################################################


//     4)    JavaScript Array at()
// ES2022 intoduced the array method at():
// The at() method returns the same as [].

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.at(2)); // out of index values will result in 'undefined'
}

// NOTE:-Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.
        //This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
        //The at() method was introduced in ES2022 to solve this problem.


//################################################################################################################################################################################################################################################################################################################################


//     5) JavaScript Array pop()

//The pop() method removes the last element from an array:

{
    const fruits = ["Bana", "Onge", "Apple", "bhat"];
    //let aman=fruits.pop();  storing the poped element in a varriable.
    //console.log(aman);

    fruits.pop();
    console.log(fruits.length);

}

//################################################################################################################################################################################################################################################################################################################################


//   6) JavaScript Array push()
//      The push() method adds a new element to an array (at the end):


{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

}

{
    const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
}

//################################################################################################################################################################################################################################################################################################################################


//      7) Shifting Elements
//         Shifting is equivalent to popping, but working on the first element instead of the last.


//   a) JavaScript Array shift()
//      The shift() method removes the first array element and "shifts" all other elements to a lower index.

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();  // like pop 
console.log(fruits);
}


//  b) JavaScript Array unshift()
//     The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");   // like push
console.log(fruits);
}

//################################################################################################################################################################################################################################################################################################################################



//  8)Changing Elements


//  a) JavaScript Array length
//     The length property provides an easy way to append a new element to an array:

{
    const fruits = ["Ba", "Ora", "App", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits);
}

//   b) JavaScript Array delete()
//      Using delete() leaves undefined holes in the array.
//      Use pop() or shift() instead.

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];  // it will delete the value not the space 0th index will there having empty value. 
console.log(fruits);
}

//################################################################################################################################################################################################################################################################################################################################



//    9)JavaScript Array concat()


//      The concat() method creates a new array by merging (concatenating) existing arrays:

const Boys  = ["aman", "udai"];
const Girls = ["amni", "udaii", "Linus"];

const Children = Girls.concat(Boys);
console.log(Children);

//   NOTE
//   The concat() method does not change the existing arrays. It always returns a new array.
//   The concat() method can take any number of array arguments.

const a1 = [`aman`,`bhat`,`khan`]
const a2 = [`a`,`b`,`k`]
const a3 = [`am`,`bh`,`kh`]

const a4 = a1.concat(a2,a3);
console.log(a4);

//  Merging an Array with Values

const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
console.log(myChildren);

//################################################################################################################################################################################################################################################################################################################################


//    10)Array copyWithin()



// (method) Array<string>.copyWithin(target: number, start: number, end?: number | undefined): string[]

//Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

//  @param target
//  If target is negative, it is treated as length+target where length is the length of the array.

//  @param start
//  If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.

//  @param end — If not specified, length of the this object is used as its default value

{

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
fruits.copyWithin(2, 0);
console.log(fruits);

}


{

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
fruits.copyWithin(2, 0, 2);
console.log(fruits);

}

//Note

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

// The copyWithin() method does not change the length of the array.

//################################################################################################################################################################################################################################################################################################################################


//   11)  Flattening an Array
//        Flattening an array is the process of reducing the dimensionality of an array.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

console.log(another_array.flat(Infinity));

//   Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//   @param depth — The maximum recursion depth

//################################################################################################################################################################################################################################################################################################################################

// 12) Splicing and Slicing Arrays


//     The splice() method adds new items to an array.

//     The slice() method slices out a piece of an array.




//    a)JavaScript Array splice()



//The splice() method can be used to add new items to an array:

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

}

// (method) Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[] (+1 overload)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing/adding elements.

// @param deleteCount — The number of elements to remove.

// @param items — Elements to insert into the array in place of the deleted elements.

// @returns — An array containing the elements that were deleted.



//   Using splice() to Remove Elements


//   With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
let aman =fruits.splice(0, 1);
console.log(fruits);
console.log(aman);


}

// JavaScript Array toSpliced()
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.


{
    const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(months);
console.log(spliced);
}



//        b) JavaScript Array slice()

//The slice() method slices out a piece of an array into a new array:
//The slice() method does not remove any elements from the source array.


{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);
console.log(fruits);
}

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.

{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);
}

//f the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

//################################################################################################################################################################################################################################################################################################################################


// 13)   JOIN method

{
    const myArr = [0, 1, 2, 3, 4, 5]

const newArr = myArr.join(``)

console.log(myArr);
console.log( newArr)
}

// Adds all the elements of an array into a string, separated by the specified separator string.

// @param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

//################################################################################################################################################################################################################################################################################################################################
