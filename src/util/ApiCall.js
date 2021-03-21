const URL = 'https://superheroapi.com/api/' + process.env.API_KEY + '/';
const fetch = require("node-fetch");

async function apiCall(id) {
    return fetch(URL + id)
        .then(response => {
            // console.log("Returns a response")
            return response.json()
        })
        // .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
}

exports.apiCall = apiCall