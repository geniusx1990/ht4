/* Task 4: Advanced Property Descriptors

Implement a function called createImmutableObject that takes an object as an argument and returns a new object 
with all its properties made read-only and non-writable using property descriptors. 
The function should handle nested objects and arrays recursively.

Use the createImmutableObject function to create an immutable version of the person object from Task 1.
 */

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


function createImmutableObject(obj) {
    if (typeof obj !== "object") {
        return obj;
    }

    const immutableObj = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            immutableObj[key] = createImmutableObject(value);
        }
    }

    Object.keys(immutableObj).forEach((key) => {
        const value = immutableObj[key];

        Object.defineProperty(immutableObj, key, {
            value: createImmutableObject(value),
            writable: false,
            configurable: false,
            enumerable: true,
        });
    });

    return immutableObj;
}



console.log(Object.getOwnPropertyDescriptors(createImmutableObject(person)))