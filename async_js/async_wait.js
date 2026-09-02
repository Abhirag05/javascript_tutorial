//async and wait is built on top of promises and it is used to handle asynchronous code in a more readable way. It allows us to write asynchronous code in a synchronous manner. The async keyword is used to declare a function as asynchronous and the await keyword is used to wait for a promise to resolve before moving on to the next line of code.

//example:
async function getUser() {
    console.log("Starting");

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    console.log("Got user");

    return response;
}

console.log("Before");

getUser();

console.log("After");

//notice here that the getUser function is declared as asynchronous using the async keyword. Inside the function, we are using the await keyword to wait for the fetch function to resolve before moving on to the next line of code. This allows us to write asynchronous code in a synchronous manner and makes it more readable.