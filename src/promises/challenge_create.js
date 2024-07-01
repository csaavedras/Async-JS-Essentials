import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1'

const postData = (urlAPI, data) => {
    const response = fetch(urlAPI, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'same-origin', // include, *same-origin, omit
        headers: { // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response;
}

const data = {
    "title": "TypeScript Course",
    "price": 500,
    "description": "Learn TypeScript from scratch",
    "categoryId": 32,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(response => response.json()) // Parse the JSON response
    .then(data => console.log(data)) // Print the data
    .catch(error => console.error(error)) // Print the error if the request fails


