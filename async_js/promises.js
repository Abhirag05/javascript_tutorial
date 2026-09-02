//A promise represents a value that we don't have yet but we will have in the future.

//for example, we can use a promise to represent the result of an asynchronous operation, such as fetching data from a server. A promise can be in one of three states: pending, fulfilled, or rejected. When a promise is fulfilled, it means that the operation completed successfully and we have the result. When a promise is rejected, it means that the operation failed and we have an error.

//example:
const promise =fetch('https://jsonplaceholder.typicode.com/todos/1');
promise.then((response)=>{
    console.log(response);  
}).catch((error)=>{
    console.log(error);
});
    //so here we are using the fetch function to make a request to the server and it will return a promise. We can use the then method to handle the fulfilled state and the catch method to handle the rejected state.