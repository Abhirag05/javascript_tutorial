//call backs is the oldest way to handle asynchronous code in JavaScript. It is a function that is passed as an argument to another function and is executed after the completion of that function.

//example:

setTimeout(() => {
    console.log("This is a callback function");
}, 2000);

//() => {
//    console.log('');
//} is the callback function that is passed as an argument to the setTimeout function. It will be executed after 2 seconds.