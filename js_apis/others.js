//there are other options for calling the apis instead of only fetch.for example, you can use XMLHttpRequest or axios library for making HTTP requests.XMLHttpRequest is an older API for making HTTP requests, while axios is a popular third-party library that provides a more convenient and feature-rich way to handle HTTP requests. Both options have their own advantages and use cases, and you can choose the one that best fits your needs.XMLHTTPRequest is not recommended nowadays due to its complexity and lack of modern features, while axios is widely used in many projects for its simplicity and ease of use.


//1)XMLHttpRequest (XHR) is an older API for making HTTP requests in JavaScript. It allows you to send and receive data from a server asynchronously, but it has a more complex syntax compared to fetch(). Here's a basic example of using XMLHttpRequest:

const xhr = new XMLHttpRequest();

xhr.open("GET", "/api/users");

xhr.onload = () => {
    const users = JSON.parse(xhr.responseText);
    console.log(users);
};

xhr.send();

//2)fetch() is a modern replacement for the older XMLHttpRequest (XHR) API, and it provides a more flexible and powerful way to handle network requests. It supports various HTTP methods (GET, POST, PUT, DELETE, etc.), allows you to set headers, and provides a simple way to handle responses and errors. we saw some examples of fetch() in the previous code snippet.
const response = await fetch("/https://jsonplaceholder.typicodeode.com");

const users = await response.json();

console.log(users);


//3)axios is a popular third-party library that provides a more convenient and feature-rich way to handle HTTP requests. It supports promises, allows you to set headers, and provides a simple way to handle responses and errors and so much built in features than the fetch().it is recommende to use in api heavy application for more simplicity. Here's a basic example of using axios:
import axios from "axios";

axios.get("/https://jsonplaceholder.typicodeode.com/posts/1") 
const users2 = response.data; //see here we are using the data property of the response object to access the actual data returned by the API. This is a feature of axios that simplifies the process of extracting data from the response.

console.log(users2);
