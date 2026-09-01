const person = {
    name: "John",
    age: 25,
    city: "New York",

    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Output: Hello, my name is John and I am 25 years old.

//this keyword refers to the current object, allowing access to its properties and methods.