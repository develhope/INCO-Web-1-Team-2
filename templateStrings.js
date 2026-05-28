class Person {
    constructor(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
    }
}

const developer = new Person("Mario", "Rossi");

// Refactored with template literals
console.log(`${developer.firstName} ${developer.lastName}`);
