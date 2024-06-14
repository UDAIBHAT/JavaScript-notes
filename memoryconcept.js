//    STACK ( primitive)  &&&&  HEAP ( non-primitive)

let name = 33;
let cast = name;

console.log(name);
console.log(cast);
cast = 22
console.log(cast);

// => all the primitive datatypes uses stack as memory unit which provide the copy of data so so 
//    whenever the data is changed it does changes the real data which was decleared earlier in the memory


let details = {

    name: "Aman",
    code: 22
}

console.log(details);

let user = details

console.log(user);

user.name = "udai"

console.log(user.name);

console.log(details.name);

// all non primitive datatype use heap memory so when the data is changed by giving the reference it is 
// originally changed from the pre defined place.

