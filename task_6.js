/* Task 6: Object Deep Cloning

Implement a function called deepCloneObject that takes an object as an argument and returns a deep copy of the object. 
The function should handle circular references and complex nested structures. Do not use JSON methods.
 */



function deepCloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const clone = {};
    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            clone[item] = deepCloneObject(obj[item]);
        }
    }
    return clone;

}


//testing

const person = {
    name: 'John',
    age: 22,
    grades: [10, 8, 8, 10],
    adress: {
        homeAdress: {
            city: 'Minsk',
            street: 'Kulman',
            house: 33,
        }, workAdress:
        {
            city: 'Minsk',
            street: 'Kulman',
            house: 33,
        }
    },
};


let copyPerson = deepCloneObject(person);

console.log(copyPerson.adress.workAdress);
copyPerson.adress.workAdress = { 111: '0120100101' }
console.log(copyPerson.adress.workAdress)
console.log(person.adress.workAdress);
