## Composition
- Composition is a design principle in Object-Oriented Programming (OOP) where a class is composed of one or more objects that represent its parts. Instead of inheriting properties and behaviors from a parent class, the class "has" or "contains" these objects. This approach promotes code reusability, modularity, and flexibility.

---

### Key Concepts of Composition
- "Has-a" Relationship:

- Composition represents a "has-a" relationship, meaning that an object is composed of other objects.
For example, a Car has an Engine, Wheels, and Transmission.
#### Flexible Design:

- Composition is more flexible than inheritance because it allows you to build complex objects by combining smaller, reusable objects.
- It makes it easy to change or extend functionality without affecting other parts of the code.
#### Reusability and Modularity:

- Smaller, independent components can be used in multiple classes without duplicating code.
- You can swap out components without affecting the rest of the system.
---
#### Composition Example in JavaScript
Let’s create an example where a Car is composed of several other objects like Engine, Transmission, and Wheels. Each of these parts has its own functionality, and the Car object uses them to perform its tasks.

```javascript
Copy code
// Components (independent objects)
class Engine {
    start() {
        console.log('Engine starts');
    }

    stop() {
        console.log('Engine stops');
    }
}

class Transmission {
    shiftGear() {
        console.log('Gear shifted');
    }
}

class Wheels {
    rotate() {
        console.log('Wheels are rotating');
    }
}

// Main class using composition
class Car {
    constructor() {
        this.engine = new Engine();
        this.transmission = new Transmission();
        this.wheels = new Wheels();
    }

    drive() {
        this.engine.start();
        this.transmission.shiftGear();
        this.wheels.rotate();
        console.log('Car is driving');
    }

    stop() {
        this.engine.stop();
        console.log('Car has stopped');
    }
}

// Create a Car object and use its methods
const myCar = new Car();
myCar.drive();  // Engine starts, Gear shifted, Wheels are rotating, Car is driving
myCar.stop();   // Engine stops, Car has stopped
```
---
### Benefits of Composition Over Inheritance
#### 1) Better Flexibility:

- Composition allows you to mix and match behaviors dynamically, making it easier to change or extend an object’s behavior at runtime.
- Unlike inheritance, where the class hierarchy is static, composition lets you build different behaviors using different objects.
#### 2) Loose Coupling:
- Objects in composition are loosely coupled, meaning that changes in one component don’t directly affect the others.
- You can easily replace a component with another that has the same interface without affecting the rest of the system.
#### 3) Avoiding the Fragile Base Class Problem:

- Inheritance can lead to issues when changes in a base class unintentionally affect all its subclasses.
- Composition eliminates this problem because you can modify individual components without altering the overall structure.
#### 4) Code Reusability:

- With composition, you can create reusable objects that can be used across multiple classes.
- This approach helps in keeping your code more modular and easier to maintain.
---
# Composition vs. Inheritance

| **Aspect**          | **Composition**                             | **Inheritance**                       |
|---------------------|---------------------------------------------|--------------------------------------|
| **Relationship**    | Has-a (e.g., a Car has an Engine)            | Is-a (e.g., a Dog is an Animal)       |
| **Flexibility**     | More flexible; allows dynamic behavior       | Less flexible; static class hierarchy |
| **Coupling**        | Loosely coupled; easier to maintain          | Tightly coupled; changes affect all subclasses |
| **Code Reuse**      | Promotes modular and reusable code           | Less modular; depends on the base class |
| **Hierarchy Depth** | No deep hierarchies; flat structure          | Can lead to deep and complex hierarchies |
| **Use Cases**       | Best for building with interchangeable parts | Best for creating strict class hierarchies |
---
### When to Use Composition
- When there is no strict "is-a" relationship: Use composition when the objects do not have a strict hierarchical relationship.
- For greater flexibility: If you need to change or extend the behavior of objects dynamically, composition is a better choice.
- To avoid complex hierarchies: If inheritance would lead to a deeply nested class hierarchy, composition can help simplify the structure.
- When you want loose coupling: Composition allows you to replace or change parts of an object without affecting its overall structure.
### Example: Strategy Pattern Using Composition
A common use of composition is the Strategy Pattern, where you can change the behavior of an object dynamically by swapping out its components.

``` javascript
// Strategy components (behaviors)
class NormalDrive {
    drive() {
        console.log('Driving normally');
    }
}

class SportDrive {
    drive() {
        console.log('Driving in sport mode');
    }
}

// Car class using a strategy component for driving behavior
class Car {
    constructor(driveBehavior) {
        this.driveBehavior = driveBehavior;
    }

    performDrive() {
        this.driveBehavior.drive();
    }

    setDriveBehavior(newBehavior) {
        this.driveBehavior = newBehavior;
    }
}

// Create a Car with NormalDrive behavior
const myCar = new Car(new NormalDrive());
myCar.performDrive(); // Driving normally

// Change the driving behavior to SportDrive
myCar.setDriveBehavior(new SportDrive());
myCar.performDrive(); // Driving in sport mode
```
In this example, the ```Car``` class uses composition to change its driving behavior dynamically by swapping out the ```driveBehavior``` component. This demonstrates the power of composition in creating flexible and extensible code.

### Summary
- Composition allows you to build complex objects from simpler, reusable components.
- It promotes loose coupling, better flexibility, and code reusability.
- Unlike inheritance, which defines a strict class hierarchy, composition provides a way to create modular and interchangeable behaviors.
- While inheritance is useful for "is-a" relationships, composition is best suited for "has-a" relationships and scenarios where you need more dynamic behavior.
### Using composition effectively leads to cleaner, more maintainable, and more adaptable code.