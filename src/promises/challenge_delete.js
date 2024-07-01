import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1'
const id = '76'

const deleteData = (urlAPI, data) => {
    const response = fetch(urlAPI, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

deleteData(`${API}/products/${id}`)
    .then(response => response.json())
    .catch(error => console.error(error))  