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


//call back hell is a situation where we have multiple nested callback functions and it becomes difficult to read and understand the code. It is also known as pyramid of doom. It is a common problem in JavaScript and it can be solved using promises and async/await.

//example:
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        callback(`Processed: ${data}`);
    }, 1000);
}

function displayData(data, callback) {
    setTimeout(() => {
        callback(`Displaying: ${data}`);
    }, 1000);
}

fetchData((data) => {
    processData(data, (processedData) => {
        displayData(processedData, (displayedData) => {
            console.log(displayedData);
        });
    });
});

//fixed solution using promises and async/await 

async function fetchData() {
    const fetchData=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const processedData=await fetchData.json();
    return processedData;
}

//the above code is using async/await to handle the asynchronous code in a more readable way. It allows us to write asynchronous code in a synchronous manner. both the the above code snippets are doing the same thing but the second one is more readable and easier to understand.