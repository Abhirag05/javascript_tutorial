/* Data Types in JavaScript:undefined,null,boolean,number,string,array,object */
var age = 25; // number
var isStudent = true; // boolean
var hobbies = ["reading", "swimming", "coding"]; // array
var address = { street: "123 Main St", city: "Anytown" }; // object
var fullName = "John Doe"; // string
var phoneNumber; // undefined

console.log("Age: " + age);
console.log("Is Student: " + isStudent);
console.log("Hobbies: " + hobbies);
console.log("Address: " + JSON.stringify(address));
console.log("Full Name: " + fullName);
console.log("Phone Number: " + phoneNumber);