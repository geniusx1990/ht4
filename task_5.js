/* Task 5: Object Observation

Implement a function called observeObject that takes an object and a callback function as arguments. 
The function should return a proxy object that wraps the original object and invokes the callback function 
whenever any property of the object is accessed or modified.

Use the observeObject function to create a proxy for the person object from Task 
1. The callback function should log the property name and the action (get or set) performed on the object.
 */

function observeObject(object, callback) {
    return new Proxy(object, {
        get(target, prop) {
            callback(prop, 'get');
            return target[prop];
        },
        set(target, prop, value) {
            callback(prop, 'set');
            target[prop] = value;
            return true;
        }
    });
}

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


const proxyPerson = observeObject(person,  (prop, action) => {
    console.log(`property = ${prop}; action = ${action}`);
});
proxyPerson.age = 100;


