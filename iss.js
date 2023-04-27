//It will contain most of the logic for fetching the data from each API endpoint.

const request = require("request");

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data.ip);

  });
};

const fetchCoordByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    let ipGeolocation = JSON.parse(body);
    if (!ipGeolocation.success) {
      const message = `Success status was ${ipGeolocation.success}. Server message says: ${ipGeolocation.message} when fetching for IP ${ipGeolocation.ip}`;
      callback(Error(message), null);
      return;
    }
    const { latitude, longitude } = ipGeolocation;
    callback(null, {latitude, longitude});
  });
};

const fetchISSFlyOverTimes  = function(coords, callback) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
  // console.log(body)  
  if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
      return;
    }

    const flyOverTimes= JSON.parse(body).response;
    callback(null, flyOverTimes);
  })
}

module.exports = { fetchMyIP, fetchCoordByIP, fetchISSFlyOverTimes };