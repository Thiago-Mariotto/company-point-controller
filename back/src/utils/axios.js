const axios = require('axios');

const api = axios.create({
  baseURL: 'https://www.googleapis.com/geolocation/v1/geolocate',
});

module.exports = api;
