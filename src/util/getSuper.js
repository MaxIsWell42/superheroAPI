const url = 'https://superheroapi.com/api/' + process.env.API_KEY + '/';
const axios = require('axios');

module.exports = getSupers => {
    return function(next) {
        // Get a random number between 1 and 300
        function getRandomInt() {
            return Math.floor(Math.random() * 300) + 1
        }

        var id1 = getRandomInt()
        var id2 = getRandomInt()
        if (id1 == id2) {
            id2 + 1
        }
        
        console.log(id1)
        console.log(id2)
        
        function apiCall(id) {
            axios.get(url, id)
                .then(data=>{
                    console.log(data)
                    return data
                })
                .catch(err=>console.log(err))
        }
        hero1 = apiCall(id1)
        hero2 = apiCall(id2)
        return hero1, hero2
    }
}
