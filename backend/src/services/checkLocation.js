/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const getDistanceFromLatLonInM = require('../utils/calculateDistance');

const compareDevicePosition = (clientPosition) => {
  try {
    const distance = getDistanceFromLatLonInM(clientPosition);
    console.log(`Your distance: ${distance}`);
    distance < 500
      ? console.log('You are in the range')
      : console.log('You are not in the range');

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = compareDevicePosition;
