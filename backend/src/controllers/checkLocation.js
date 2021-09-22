/* eslint-disable no-unused-vars */
const checkLocationService = require('../services/checkLocation');

const checkLocation = async (req, res, _next) => {
  try {
    const { device: devicePosition, isMobile } = req.body;
    console.log(devicePosition);

    const goService = checkLocationService(devicePosition.location);

    return res.status(200).json(goService);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  checkLocation,
};
