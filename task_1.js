/* Task 1: Object Property Manipulation

Create an object called person with the following properties and values:
firstName: "John"
lastName: "Doe"
age: 30
email: "john.doe@example.com"

Use property descriptors to make all properties of the person object read-only and non-writable, 
so their values cannot be changed directly.

Implement a method called updateInfo on the person object that takes a new info object as an argument. 
The info object should contain updated values for any of the properties (e.g., { firstName: "Jane", age: 32 }). 
Ensure that this method adheres to the read-only property descriptor set earlier.

Create a new property called address on the person object with an initial value of an empty object. 
Make this property non-enumerable and non-configurable.
 */


//implementation 

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    updateInfo(object) {

        for (const property in object) {
            if (object.hasOwnProperty(property)) {
                this[`${property}`] = object[`${property}`];
            }
        }
    }
}

writableForbidden(false)

function writableForbidden(value) {
    for (const key in person) {
        Object.defineProperty(person, key, {
            writable: value,
        })
    }
}


//Testing;

person.grades = [1, 2, 3, 4];

let newObject = {
    firstName: "Jane",
    age: 32,
    grades: {}
}
console.log(Object.values(person));

console.log('we can try to assign a new value to the property of the person object but received the same value 30')
person.age = 1100000;
console.log('person.age =', person.age, 'not 1100000')
console.log('then we have used method updateInfo and as result we can see that changed only firstName and age');
person.updateInfo(newObject);
console.log(Object.values(person));


/* Create a new property called address on the person object with an initial value of an empty object. 
Make this property non-enumerable and non-configurable.
 */

Object.defineProperty(person, 'address', {
    value: {},
    enumerable: false,
    configurable: false
})

