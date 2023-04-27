//It will require and run our main fetch function.

const { nextISSTimesForMyLocation } = require('./iss');

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

// fetchISSFlyOverTimes({ latitude: '49.27s670', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//         console.log("it didnt work :(", error);
//         return;
//       };

//       console.log('it worked! here are the times:', data);
// });

const printPassTimes = function(flyOverTimes) {
  for (const pass of flyOverTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(flyOverTimes);
});

