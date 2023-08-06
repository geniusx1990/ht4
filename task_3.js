/* Task 3: Object Property Getters and Setters

Create an object called bankAccount with the following properties and values:
balance: 1000 (default value)
Use a getter to define a property called formattedBalance, which returns the balance with a currency symbol (e.g., "$1000").

Use a setter to define a property called balance, 
which updates the account balance and automatically updates the corresponding formattedBalance value.

Implement a method called transfer on the bankAccount object 
that takes two bankAccount objects and an amount as arguments. 
The method should transfer the specified amount from the current account to the target account. 
Ensure that the balance and formattedBalance properties of both accounts are updated correctly.
 */

let bankAccount = {
    _balance: 1000,

    get formattedBalance() {
        return `$${this._balance}`
    },

    set balance(newBalance) {
        if (typeof newBalance === 'number') {
            this._balance = newBalance
        } else {
            throw new Error('please use type number');
        }
       
        return this.formattedBalance;
    },
    transfer(bankAccount, targetAccount, amount) {
        if (amount > this._balance) {
            throw new Error (`Please use amound lower than currect balance ${this._balance}`);
        }
        this._balance -= amount;
        targetAccount.balance = Number(targetAccount.formattedBalance.slice(1)) + amount;
    }

}

let bankAccount2 = {
    _balance: 5000,
    get formattedBalance() {
        return `$${this._balance}`
    },
    set balance(newBalance) {
        if (typeof newBalance === 'number') {
            this._balance = newBalance
        } else {
            throw new Error('please use type number');
        }

        return this.formattedBalance;
    },

}

console.log(bankAccount.formattedBalance)
//bankAccount.balance = 2000;

console.log(bankAccount2.formattedBalance)
bankAccount.transfer(bankAccount, bankAccount2, 200)
console.log(bankAccount)
console.log(bankAccount2.formattedBalance)


