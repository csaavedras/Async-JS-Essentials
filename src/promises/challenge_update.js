import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1'
const id = '299'

const updateData = (urlAPI, data) => {
    const response = fetch(urlAPI, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response;
}

const data = {
    "title": "Typescript advanced course",
    "price": 250
}

updateData(`${API}/products/${id}`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))