/* Task 2: Object Property Enumeration and Deletion

Create a new object called product with the following properties and values:name: "Laptop"
price: 1000
quantity: 5
Use property descriptors to make the price and quantity properties non-enumerable and non-writable.

Implement a function called getTotalPrice that takes the product object as an argument 
and returns the total price (calculated as price * quantity). 
Ensure that the function accesses the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.

Implement a function called deleteNonConfigurable that takes an object and a property name as arguments. The function should delete the specified property from the object if it exists. If the property is non-configurable, throw an error with an appropriate message.
 */

let product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
}


Object.defineProperties(product, {
    'price': {
        enumerable: false,
        writable: false
    },
    'quantity': {
        enumerable: false,
        writable: false
    },
    'name': {
        configurable: false,
    }
});


function getTotalPrice(product) {
    const price = Object.getOwnPropertyDescriptor(product, "price");
    const quantity = Object.getOwnPropertyDescriptor(product, "quantity");

    return price.value * quantity.value;
}

console.log(getTotalPrice(product))



/* Implement a function called deleteNonConfigurable that takes an object and a property name as arguments. 
The function should delete the specified property from the object if it exists. If the property is non-configurable, 
throw an error with an appropriate message.
 */

function deleteNonConfigurable(object, prop) {
    if (Object.getOwnPropertyDescriptor(object, prop).configurable) {
        delete object[prop];
    } else {
        throw new Error("this property is non-configurable so you can't delete it")
    }

}
deleteNonConfigurable(product, 'price')
console.log(product)
