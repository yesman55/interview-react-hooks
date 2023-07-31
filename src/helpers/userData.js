const axios = require('axios');

function fetchUserData() {
  return axios.get('https://randomuser.me/api')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

module.exports = { fetchUserData };