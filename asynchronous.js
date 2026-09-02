//the synchronous js is basically executing the code line by line and it will wait for the previous line to finish before executing the next line. But in asynchronous js, it will not wait for the previous line to finish and it will execute the next line without waiting for the previous line to finish.

//synchronous example
console.log("Start");
console.log("Middle");
console.log("End");

//asynchronous example
console.log("Start");
setTimeout(() => {
    console.log("Middle"); //here it will wait for 2 seconds before executing this line and it will not block the execution of the next line.
}, 2000);
console.log("End");