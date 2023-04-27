const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho..is/${ip}`)
};

const fetchISSFlyOverTimes = (body) => {
  const { latitude, longitude } = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
}

const nextISSTimesForMyLocation = () => {
  return fetchMyIP ()
    .then(fetchCoordByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const {response} = JSON.parse(data);
      return response;
    })
}

module.exports = { nextISSTimesForMyLocation };