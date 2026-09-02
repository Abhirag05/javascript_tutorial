//built in object methods

const person = {
    name: "John",
    age: 25
};

console.log(Object.keys(person)); // Output: ["name", "age"]
console.log(Object.values(person)); // Output: ["John", 25]
console.log(Object.entries(person)); // Output: [["name", "John"], ["age", 25]]


for (let [key, value] of Object.entries(person)) {
    console.log(`Key: ${key}, Value: ${value}`);
}
