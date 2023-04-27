// const { fetchCoordByIP } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })