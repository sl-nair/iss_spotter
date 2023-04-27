//It will require and run our main fetch function.

const { fetchMyIP, fetchCoordByIP, fetchISSFlyOverTimes } = require('./iss');

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

fetchISSFlyOverTimes({ latitude: '49.27s670', longitude: '-123.13000' }, (error, data) => {
  if (error) {
        console.log("it didnt work :(", error);
        return;
      };
    
      console.log('it worked! here are the times:', data);
});