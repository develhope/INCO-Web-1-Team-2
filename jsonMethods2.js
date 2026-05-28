const person1 = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
    address: {
          state: 'Italy',
          city: 'Rome',
          street: 'Via Romano, 12'
    }
};

// Fix: use JSON.parse + JSON.stringify for a deep copy
const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = 'Milan';

console.log(person1); // address.city stays 'Rome'
console.log(person2); // address.city is 'Milan'
