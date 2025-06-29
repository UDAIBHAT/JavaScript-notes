  # Encapsulation
  
  - Encapsulation is one of the fundamental principles of object-oriented programming (OOP). It involves bundling data (attributes) and methods that operate on that data into a single unit or class. The key idea is to protect the data from outside interference and misuse by controlling access to it.

In JavaScript, encapsulation can be implemented using several techniques:

#### 1) Using Constructors with Private Variables
#### 2) Using Getters and Setters
#### 3) Using ES6 Classes with the # Prefix (Private Fields)

-----
                                   
## Using Constructors with Private Variables      

 - Encapsulation in JavaScript can be achieved by using constructors with private variables, typically through closures. This technique involves defining variables within a constructor function, making them private to that function, while providing methods to access or manipulate these variables. Here's how you can implement it using constructors with private variables:

#### Example of Encapsulation using Constructors

```javascript
function Person(name, age) {
    // Private variables
    let _name = name;
    let _age = age;

    // Public methods to access and modify private variables
    this.getName = function () {
        return _name;
    };

    this.setName = function (newName) {
        _name = newName;
    };

    this.getAge = function () {
        return _age;
    };

    this.setAge = function (newAge) {
        if (newAge > 0) {
            _age = newAge;
        } else {
            console.log('Age must be a positive number.');
        }
    };
}

// Creating an instance of the Person object
const person = new Person('John', 30);

console.log(person.getName()); // Output: John
console.log(person.getAge());  // Output: 30

person.setName('Doe');
person.setAge(35);

console.log(person.getName()); // Output: Doe
console.log(person.getAge());  // Output: 35
```

#### Explanation
- **Private variables**: The variables `_name` and `_age` are private because they are defined within the constructor function and cannot be accessed directly from outside the function.
- **Public methods**: The methods `getName`, `setName`, `getAge`, and `setAge` are public. They are accessible outside of the constructor and provide a way to get or modify the private variables.
  
#### Key Benefits
- **Data protection**: Private variables cannot be accessed directly from outside the object, protecting them from unintended modifications.
- **Controlled access**: Public methods act as an interface for interacting with the private variables, allowing you to control how they are accessed or modified.
### NOTE
- This approach is an effective way to implement encapsulation in JavaScript before the introduction of classes and private fields in ES6 and beyond.

------
## Using Getters and Setters

- In JavaScript, one of the primary ways to achieve encapsulation is through the use of getters and setters. Let's look into them in detail.

#### What are Getters and Setters?
- Getters: Methods used to access the properties of an object.
- Setters: Methods used to modify the properties of an object.
- By using getters and setters, you can control how certain properties are accessed and modified, adding logic to validate, transform, or control how values are set.

### Syntax of Getters and Setters
Getters and setters are often defined using the get and set keywords within JavaScript objects. Here is a simple example:

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  // Getter method for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter method for fullName
  set fullName(name) {
    const [first, last] = name.split(' ');
    this.firstName = first;
    this.lastName = last;
  }
};

// Using the getter
console.log(person.fullName); // Output: John Doe

// Using the setter
person.fullName = 'Jane Smith';
console.log(person.firstName); // Output: Jane
console.log(person.lastName);  // Output: Smith
```

### Detailed Explanation
#### Getter (get keyword)

- The get keyword is used to define a getter method for retrieving the property value.
- It allows you to access the result as if it were a property (without using parentheses).
- In the above example, person.fullName calls the getter method, and it returns the string representation of the full name.
#### Setter (set keyword)

- The set keyword is used to define a setter method for modifying the property value.
- It allows you to set a value as if you were assigning to a property.
- The setter method in the example takes the string name, splits it into two parts (first and last names), and updates the firstName and lastName properties of the object.
#### Benefits of Using Getters and Setters
- Control and Validation: Getters and setters allow you to add validation logic or other transformations when accessing or modifying object properties. This prevents invalid data from being assigned.

```javascript
Copy code
const account = {
  balance: 1000,

  get getBalance() {
    return `$${this.balance}`;
  },

  set setBalance(value) {
    if (value < 0) {
      console.error('Balance cannot be negative!');
    } else {
      this.balance = value;
    }
  }
};

account.setBalance = -500;  // Error: Balance cannot be negative!
console.log(account.getBalance);  // Output: $1000
```
- Data Protection: Using getters and setters can protect properties from unintended modification by directly controlling how properties are accessed or changed.

- Consistency: Allows maintaining a consistent interface to interact with object properties.

- Lazy Evaluation: Getters can be used to calculate the property value only when needed, optimizing performance when dealing with expensive computations.


#### Use Cases for Getters and Setters
- Data Validation: Check or clean data before setting it to an object's property.
- Computed Properties: Calculating values dynamically based on other property values.
- Read-Only Properties: Making properties accessible but not modifiable.
- Lazy Loading: Loading data only when it's accessed for the first time.
### Example of Read-Only Property
```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Read-only property
  get diameter() {
    return this.radius * 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // Output: 10
circle.diameter = 20; // Error: Cannot set a read-only property
```
In this example, the diameter property is read-only because it only has a getter, not a setter.

#### Conclusion
- Using getters and setters in JavaScript is a powerful way to encapsulate data within an object, control access to that data, and add validation or transformation logic when getting or setting values. This approach helps in building more maintainable, reliable, and secure code.



---

## Using ES6 Classes with the # Prefix (Private Fields)

In JavaScript, ES6 classes introduced a way to create and manage objects using a more object-oriented approach. One of the powerful features that were added to JavaScript classes in later updates is the use of private fields, denoted by the # prefix. Private fields provide a way to encapsulate data within classes, ensuring that they cannot be accessed or modified directly from outside the class. Let’s dive into the details of how private fields work.

### What are Private Fields?
- Private fields in JavaScript classes are declared with a # prefix. They are only accessible from within the class in which they are defined. This means that any attempt to access these fields from outside the class will result in an error, providing a level of data encapsulation that was not available in earlier versions of JavaScript.

#### Benefits of Using Private Fields
- Encapsulation: Private fields allow you to keep the internal implementation details of a class hidden from the outside, which is an important principle in object-oriented programming.
- Data Integrity: By preventing direct access to class fields, you can control how data is manipulated, which helps maintain data integrity.
- Cleaner Code: It reduces the need for "getter" and "setter" methods, leading to cleaner and more readable code.
### Syntax of Private Fields
Here is the syntax for creating and using private fields in a class:

```javascript
class MyClass {
    // Private field declaration
    #privateField;

    constructor(value) {
        this.#privateField = value; // Initialize the private field
    }

    // Method to access the private field
    getPrivateField() {
        return this.#privateField;
    }

    // Method to modify the private field
    setPrivateField(value) {
        this.#privateField = value;
    }
}

const instance = new MyClass(10);
console.log(instance.getPrivateField()); // 10
instance.setPrivateField(20);
console.log(instance.getPrivateField()); // 20
console.log(instance.#privateField); // Syntax error: Private field is not accessible outside the class
```
#### Key Points to Remember:
- Declaration: Private fields must be declared with a # before their name.
- Access Control: Private fields cannot be accessed or modified directly from outside the class. An attempt to do so will throw a syntax error.
- Unique to Each Instance: Each instance of a class has its own copy of the private fields. There’s no shared memory across instances for private fields.
- Not Inherited: Private fields are not accessible from subclasses. If a subclass needs to interact with a private field, you must use methods provided by the base class.
#### Encapsulation with Private Methods
- JavaScript also supports private methods, which are useful for operations that should not be exposed to the outside world. Like private fields, they also use the # prefix.

```javascript
class MyClass {
    #privateField;
    #privateMethod() {
        console.log('This is a private method');
    }

    constructor(value) {
        this.#privateField = value;
    }

    publicMethod() {
        this.#privateMethod(); // Calling the private method within the class
        console.log(this.#privateField);
    }
}

const instance = new MyClass(10);
instance.publicMethod(); // Works fine
instance.#privateMethod(); // Syntax error: Private method is not accessible outside the class
```
#### Comparison with ES5 Closures
- Before private fields were introduced, JavaScript developers used closures to achieve data encapsulation. This approach still works but can be more verbose and less intuitive:

```javascript

function MyClass(value) {
    let privateField = value; // Closure to encapsulate the private field

    this.getPrivateField = function() {
        return privateField;
    };

    this.setPrivateField = function(value) {
        privateField = value;
    };
}

const instance = new MyClass(10);
console.log(instance.getPrivateField()); // 10
instance.setPrivateField(20);
console.log(instance.getPrivateField()); // 20
console.log(instance.privateField); // undefined
```
While this method works, using the new # syntax is simpler and more aligned with modern JavaScript standards.

#### Limitations of Private Fields
- No Access from Prototypes: You cannot access private fields through prototype methods, which can sometimes be a limitation when dealing with inheritance or polymorphism.
- Performance Overhead: Using private fields might have a slight performance overhead compared to public fields because of their strict access restrictions.
- Not Enumerated in Object Properties: Private fields are not included in object property enumeration, which means you won't see them in methods like Object.keys() or for...in loops.
#### Summary
- Private fields and methods, marked with the # prefix, provide a clean and efficient way to encapsulate data in JavaScript classes. They ensure that internal implementation details are hidden from external access, leading to better data integrity and code maintainability. This approach aligns JavaScript more closely with other object-oriented languages that support data encapsulation.







