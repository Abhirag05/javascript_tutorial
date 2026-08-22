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

//string indexing and built in methods of string 

string1 = "Hello";
console.log(string1[0]);//print hello similar as python 
console.log("Hello"[0]);//same as above
console.log(string1[string1.length - 1]);//print last character of string

// built in methods of string
console.log(string1.length); // 5
console.log(string1.toUpperCase()); // HELLO
console.log(string1.toLowerCase()); // hello

//numbers in js

var num1 = 1000;
console.log(num1/(5/5));//print 1000  

//boolean in js

var isTrue = true;
console.log(isTrue); // true
console.log(!isTrue); // false
console.log(30>21); // true

//null and undefined in js

var myVar = null;
console.log(myVar); // null

var myUndefinedVar;
console.log(myUndefinedVar); // undefined

console.log(0/0); // NaN (Not a Number)