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

// Example data:
// {
//   "results": [
//       {
//           "gender": "female",
//           "name": {
//               "title": "Miss",
//               "first": "Danieke",
//               "last": "Breed"
//           },
//           "location": {
//               "street": {
//                   "number": 5054,
//                   "name": "Ben Neijndorffplein"
//               },
//               "city": "Wijdenes",
//               "state": "Utrecht",
//               "country": "Netherlands",
//               "postcode": "5624 DH",
//               "coordinates": {
//                   "latitude": "34.4083",
//                   "longitude": "11.1565"
//               },
//               "timezone": {
//                   "offset": "+4:30",
//                   "description": "Kabul"
//               }
//           },
//           "email": "danieke.breed@example.com",
//           "login": {
//               "uuid": "314a81ec-3320-497b-978c-93d859d1774f",
//               "username": "silvermeercat319",
//               "password": "lebowski",
//               "salt": "picMCRvC",
//               "md5": "1a2b370563181ec5c7df6219fb03158b",
//               "sha1": "faf91af8663aef14cb356870a03439f2d6ccd2a2",
//               "sha256": "c98d73158a500557f8ba2e5efaf327191ef1f3e46d7cecdf8bdfcf346b8067c9"
//           },
//           "dob": {
//               "date": "1993-12-27T05:59:45.158Z",
//               "age": 29
//           },
//           "registered": {
//               "date": "2012-05-14T13:28:55.300Z",
//               "age": 11
//           },
//           "phone": "(0457) 003305",
//           "cell": "(06) 85899180",
//           "id": {
//               "name": "BSN",
//               "value": "68186470"
//           },
//           "picture": {
//               "large": "https://randomuser.me/api/portraits/women/35.jpg",
//               "medium": "https://randomuser.me/api/portraits/med/women/35.jpg",
//               "thumbnail": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
//           },
//           "nat": "NL"
//       }
//   ],
//   "info": {
//       "seed": "15af2c7e5a7da62e",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//   }
// }
