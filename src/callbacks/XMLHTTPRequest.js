// Why is important to use the XMLHttpRequest object? 
// The XMLHttpRequest object is used to exchange data with a server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
// Who to use the XMLHttpRequest object? 
// The XMLHttpRequest object is used to exchange data with a server. This object allows you to make HTTP requests to web servers.


const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1'

const startTime = performance.now();

const fetchData = (url_API, callback) => {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url_API, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + url_API);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, function (error, data) {
    if (error) return console.error(error);
    console.log(data[0]);
    const endTime = performance.now();
    console.log(`Time taken: ${endTime - startTime}ms`);
})



/*

This JavaScript code snippet is designed to make an asynchronous HTTP GET request to a specified URL (url_API) 
and handle the response using the XMLHttpRequest (often abbreviated as XHR) object. The XMLHttpRequest object is 
a browser API that allows you to interact with servers via HTTP, making it possible to retrieve data from a URL 
without having to do a full page refresh. This is a key technology in AJAX programming.
 
   1. Opening the request: The xhttp.open('GET', url_API, true); line initializes a new request. 
   The open method takes three parameters: the HTTP method ('GET' in this case), the URL of the server-side resource (url_API), 
   and a boolean value indicating whether the request should be handled asynchronously (true). Asynchronous requests do not 
   block the execution of subsequent JavaScript code, allowing the web page to continue to be interactive.

   2. Setting up the event handler: The onreadystatechange property of the xhttp object is set to a function that will be called 
   whenever the readyState property of the xhttp object changes. This property tracks the state of the request: from initialization (0), 
   connection established (1), request received (2), processing request (3), to finally the request being finished and the response being ready (4). 

   3. Handling the response: Inside the event handler function, there's a check to see if xhttp.readyState === 4, which means the request has been 
   completed and the response is ready. If the request was successful (xhttp.status === 200), the response text (xhttp.responseText) is parsed from 
   JSON into a JavaScript object or array using JSON.parse(), and a callback function is called with null for the error argument and the parsed data 
   as the second argument. If the request was not successful (the status is not 200), an Error object is created with a message indicating the URL 
   that caused the error, and the callback is called with this error object and null for the data argument.

This pattern of using a callback function with error and data arguments is common in Node.js and JavaScript asynchronous programming, facilitating error handling and processing of data upon successful completion of asynchronous operations.
 
*/