//usage of ternary operator,a ternary operator will check the value has true or false and if it is true run the first condition other wise run the condition after the colon':'.used for single line of condition preferred for smaller condition checks
let hasId=false
let age=18

hasId?console.log("You can enter"):console.log("You cant enter")

let result=hasId && age>=18?"You are allowed":"You are not allowed"
console.log(result)