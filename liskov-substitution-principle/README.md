# Liskov Substitution Principle

* Following the Liskov substitution principle ensures that an instance of class `Vehicle` can be substituted out for instance of 
class `Car` (subclass of `Vehicle`) at any time and still retain functionality.
* This is because class `Car` implements every method of class `Vehicle` and thus `Car`'s API would be a superset of `Vehicle`'s API.
* The opposite however, cannot be true. One would be unable to substitute an instance of class `Car` for an instance of class `Vehicle`
(`Car`'s parent class) because it would be perfectly valid for class `Car` to implement other methods to it's API that class `Vehicle`
does not.

## Ways to violate Liskov Substitution

* The most obvious way to violate LSP is by inheriting from a superclass and then redefining the methods from it. This is a red flag and, 
if seen, should raise the question:

> If I'm redefining some or all of the methods that this class has received from it's parent class, is this really an appropriate use case 
> for classical inheritance?

## Why follow the Liskov Substitution Principle?

* When one writes code that violates the Liskov Substitution principle, every subclass of a specific superclass would need it's own
suite of tests. Behavior from each child class would be unpredictable, and you would effectively be writing an entirely new class
that only nominally inherits from it's superclass.
* Another readon to write objects that adhere to LSP, is that as long as the objects conform to the contracts outlined for them by their
parent class, a developer can design and write an entire system with clean code that is decoupled from the individual objects. The system
need only know the message it needs to send to instances of various calsses to get the information that it wants. If a subclass provided 
differently named methods and return types than it's superclass, a developer would have to write multiple sets of code, one for each collection
of API methods.
