//It will require and run our main fetch function.

const { fetchMyIP, fetchCoordByIP } = require('./iss');

// fetchMyIP((error,ip) => {
//   if (error) {
//     console.log("it didnt work :(", error);
//     return
//   }
//   console.log('it worked! Returned IP:', ip);
// })

// fetchCoordByIP("42", (error, data) => {
//   if (error) {
//     console.log("it didnt work :(", error);
//     return
//   };

//   console.log('it worked! Returned IP Geolocation:', data);
// })