//call backs is the oldest way to handle asynchronous code in JavaScript. It is a function that is passed as an argument to another function and is executed after the completion of that function.

//example:

setTimeout(() => {
    console.log("This is a callback function");
}, 2000);

//() => {
//    console.log('');
//} is the callback function that is passed as an argument to the setTimeout function. It will be executed after 2 seconds.

//another callback example is setInterval function which is used to execute a function repeatedly after a certain interval of time.

const intervalId = setInterval(() => {
    console.log("This is a setInterval callback function");
}, 1000);

//to stop the setInterval function we can use clearInterval function and pass the setInterval function as an argument to it.

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped the setInterval function afyer 5 seconds");
}, 5000);

