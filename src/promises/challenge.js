import fetch from 'node-fetch'

const API = 'https://api.escuelajs.co/api/v1'

const fetchData = (API) => {
    return fetch(API)
}

const startTime = performance.now();

fetchData(`${API}/products`)
    .then(response => response.json()) // Parse the JSON response, why need to parse the response? because the fetch function returns a Promise that resolves to the Response to that request, whether it is successful or not.
    .then(products => console.log(products)) // Print the products
    .catch(error => console.error(error)) // Print the error if the request fails
    .finally(() => {
        const endTime = performance.now();
        console.log(`Time taken: ${endTime - startTime}ms`);
    })
/* 
  Explain this code as if you were explaining it to a new developer, focusing on what the code does and why it's written the way it is.
  This code snippet is designed to make an asynchronous HTTP GET request to a specified URL (API) using the fetch function. 
  The fetch function is a modern browser API that allows you to make network requests and handle responses in a more concise
  and readable way compared to the older XMLHttpRequest object. 
  
  Why I should use fetch instead of XMLHttpRequest?
  Fetch is a modern API that provides a more powerful and flexible way to make network requests in JavaScript. 
  Example of how to use fetch with best practices:

*/

fetch(`${API}/products`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    }); 