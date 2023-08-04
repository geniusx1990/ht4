/* Task 7: Object Property Validation

Implement a function called validateObject that takes an object and a validation schema as arguments. 
The schema should define the required properties, their types, and any additional validation rules. 
The function should return true if the object matches the schema, and false otherwise. 
You can choose any schema you want */

function validateObject(obj, validationSchema) {
    for (const key in validationSchema) {
        const { type, required, minAge, maxAge, arrayLength } = validationSchema[key];
        const value = obj[key];

        if (required && value === undefined) {
            return false;
        }

        if (required && type === 'number' && (value < minAge || value > maxAge)) {
            return false;
        }


        if (type === 'array' && (!Array.isArray(value) || value.length !== arrayLength)) {
            return false;
        }
    }

    return true;
}

const person = {
    name: 'John',
    age: 22,
    grades: [10, 8, 8, 10],
};

const validationSchema = {
    name: { type: 'string', required: true },
    age: { type: 'number', required: true, minValue: 0, maxValue: 100 },
    grades: { type: 'array', required: false, arrayLength: 4 }
};

const person2 = {
    name: 'John',
    age: 22,
    grades: [10, 8, 8, 10, 8],
};

console.log(validateObject(person, validationSchema));
console.log(validateObject(person2, validationSchema));
