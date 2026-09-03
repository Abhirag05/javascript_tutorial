//fetch is the most common way to make network requests in modern web applications. It is a built-in JavaScript function that allows you to make HTTP requests to servers and retrieve data. The fetch API returns a Promise that resolves to the Response object representing the response to the request.

//fetch is a modern replacement for the older XMLHttpRequest (XHR) API, and it provides a more flexible and powerful way to handle network requests. It supports various HTTP methods (GET, POST, PUT, DELETE, etc.), allows you to set headers, and provides a simple way to handle responses and errors.

//fetch example:

async function fetchData() {//async tells the function to return a Promise and allows the use of await inside it. 
    const response = await fetch('https://jsonplaceholder.typicodeode.com/posts/1');//await is used to pause the execution of the function after the fetch() call until the Promise returned by fetch() is resolved. 
    const data = await response.json();//here from the response we read the response body, parses it as JSON, and returns a Promise that resolves to the resulting JavaScript value.
    console.log(data);
}

//api with error handling

async function fetchDataWithErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicodeode.com/posts/1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//api for get request

async function fetchDataGet() {
    try {
        const response = await fetch('https://jsonplaceholder.typicodeode.com/posts/1', {
            method: 'GET', // Specify the HTTP method (GET, POST, PUT, DELETE, etc.)
            headers: {
                'Content-Type': 'application/json'//specify the content type of the request body. In this case, it's set to 'application/json' to indicate that the request body will be in JSON format.
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//api for post request

async function PostData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicodeode.com/posts', {
            method: 'POST', // Specify the HTTP method (GET, POST, PUT, DELETE, etc.)
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })//the body of the request is specified using the body property. In this case, it's set to a JSON string representing the data to be sent in the request body. The JSON.stringify() method is used to convert a JavaScript object into a JSON string.
        });
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

//api for put request

async function PutData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicodeode.com/posts/1', {
            method: 'PUT', // Specify the HTTP method (GET, POST, PUT, DELETE, etc.)
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 1, title: 'foo', body: 'bar', userId: 1 })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error putting data:', error);
    }
}

//api for delete request
async function DeleteData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicodeode.com/posts/1', {
            method: 'DELETE', // Specify the HTTP method (GET, POST, PUT, DELETE, etc.)
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}