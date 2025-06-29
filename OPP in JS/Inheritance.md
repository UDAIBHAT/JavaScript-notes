# INHERITANCE
Inheritance in Object-Oriented Programming (OOP) is a mechanism that allows a class to inherit properties and methods from another class. This promotes code reusability and establishes a relationship between classes, where one class can be based on another.

Types of Inheritance in OOP
There are several types of inheritance in OOP, and they can be categorized as follows:

----
## Single Inheritance

A class inherits from a single parent class.
It allows one class to derive the properties and behavior of another class.
### Example:

```javascript
class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    bark() {
        console.log('Dog barks');
    }
}
```
----
## Multiple Inheritance

A class inherits from more than one parent class.
JavaScript does not directly support multiple inheritance. However, it can be achieved using mixins or composition patterns.
### Example (using mixins):

```javascript
const CanFly = (Base) => class extends Base {
    fly() {
        console.log('Flying');
    }
};

const CanSwim = (Base) => class extends Base {
    swim() {
        console.log('Swimming');
    }
};

class Animal {}

class Duck extends CanSwim(CanFly(Animal)) {}

const myDuck = new Duck();
myDuck.fly();  // Flying
myDuck.swim(); // Swimming
```
----
## Multilevel Inheritance

A class derives from another class, which in turn derives from another class.
The inheritance chain can continue across multiple levels.
### Example:

```javascript
class Animal {
    move() {
        console.log('Animal moves');
    }
}

class Mammal extends Animal {
    feedMilk() {
        console.log('Feeds milk');
    }
}

class Dog extends Mammal {
    bark() {
        console.log('Dog barks');
    }
}
```
---
## Hierarchical Inheritance

Multiple classes inherit from a single parent class.
Each child class derives properties and behavior from the same parent class but may have its unique methods.
### Example:

```javascript

class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    bark() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    meow() {
        console.log('Cat meows');
    }
}
```
---
## Hybrid Inheritance

A combination of two or more types of inheritance (like single, multiple, and multilevel).
Since JavaScript does not support multiple inheritance directly, hybrid inheritance can be achieved through a combination of classes and mixins.
### Example:

```javascript
const CanFly = (Base) => class extends Base {
    fly() {
        console.log('Flying');
    }
};

class Animal {
    move() {
        console.log('Animal moves');
    }
}

class Bird extends CanFly(Animal) {
    chirp() {
        console.log('Bird chirps');
    }
}
```
---
### Summary of Inheritance Types
- Single Inheritance: One class inherits from a single parent class.
- Multiple Inheritance: One class inherits from multiple parent classes (not natively supported in JavaScript).
- Multilevel Inheritance: A class inherits from another class, which itself is a subclass of another class.
- Hierarchical Inheritance: Multiple classes inherit from a single parent class.
- Hybrid Inheritance: A combination of two or more types of inheritance.
### NOTE:-
#### Understanding these types of inheritance helps in designing flexible and maintainable object-oriented code that can efficiently model real-world relationships and behaviors.




---


Inheritance is a core concept in Object-Oriented Programming (OOP), and in JavaScript, it allows one class (or constructor function) to inherit the properties and methods of another class. This concept promotes code reuse and helps create a hierarchical relationship between classes.

### Types of Inheritance in JavaScript
JavaScript supports two main types of inheritance:

- Prototypal Inheritance: Objects inherit directly from other objects.
- Class-based Inheritance: Introduced in ES6 with the class keyword, it provides a more familiar syntax for developers coming from other programming languages.
---
## 1. Prototypal Inheritance Example
Prototypal inheritance is the traditional way of creating inheritance in JavaScript. In this approach, objects are linked directly to other objects using their prototypes.

```javascript
// Base object (parent)
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

// Derived object (child)
function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor with the current context
    this.breed = breed;
}

// Inherit from the Animal prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override the speak method
Dog.prototype.speak = function () {
    console.log(`${this.name} barks.`);
};

// Create instances
const myDog = new Dog('Rex', 'Labrador');
myDog.speak(); // Rex barks.
```
---
## 2. Class-based Inheritance Example
With the introduction of ES6, JavaScript introduced class syntax, which makes inheritance more intuitive and cleaner. The extends keyword is used to create a subclass.
 
``` javascript
// Base class (parent)
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Derived class (child)
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Create instances
const myDog = new Dog('Rex', 'Labrador');
myDog.speak(); // Rex barks.

```
### Explanation
- super(): This keyword is used in the constructor of a subclass to call the constructor of the parent class. It ensures that the object is properly initialized with the properties of the parent class.
- Method Overriding: The subclass can override methods of the parent class. In both examples, the speak method in the Dog class overrides the speak method of the Animal class.
#### Key Differences between Prototypal and Class-based Inheritance
- Syntax: Class-based syntax is more concise and easier to understand.
- Compatibility: Prototypal inheritance has been around since the beginning of JavaScript, while class-based inheritance was introduced in ES6 (2015).
- Underlying Mechanism: Even though class syntax is used, JavaScript still uses prototypal inheritance under the hood.

This approach allows JavaScript to support object-oriented programming concepts like inheritance, encapsulation, and polymorphism.



